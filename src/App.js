import React from "react";
import "./App.css";
import "./index.css";
import { CONFIG } from "./config.js";
import { Map, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";
// import Wkt from 'wicket';
// import wkt_coords from 'wicket';
import "bootstrap/dist/css/bootstrap.min.css";
// import { DateRangePicker } from 'react-date-range';
/* import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file */
import TopBar from "./components/TopBar";
import Footer from "./Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { Accordion, Card, Button, Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Scroll from "./Scroll";
import DateRange from "./DateRange";
import Legend from "./Legend";
import Query from "./Query";
import BreadCrumb from "./BreadCrumb";
import SearchEngine from "./components/bio-search/SearchEngine";
import ImageSearchEngine from "./components/bio-image-search/ImageSearchEngine";
import ImageMarkerEngine from "./components/bio-image-marker/ImageMarkerEngine";

const base_image_url =
  "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/";

/*Photo Gallery*/
/*Photo Gallery Item*/
/*Filter SideBar*/
/*Filter SideBar Item*/

function Favourite(props) {
  return (
    <li key="{index}">
      {" "}
      <button onClick={props.onClick}>
        {props.value.user_id} {props.value.favourite_name} (
        {props.value.favourites_id})
      </button>
    </li>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favourites: [],
      filters: {},
      hits: [],
      images: null,
      error: null,
      isLoading: true,
      isLoadingSearch: true,
      search: {},
      selectedFilter: {},
      aggregation: null,
      lat: -26.47,
      lng: 134.02,
      zoom: 5,
      maxZoom: 30,
      minZoom: 5,
    };
  }

  /*handleSelect(ranges) {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }*/

  fetchFavourites() {
    // Where we're fetching data from
    fetch(CONFIG.API_BASE_URL + "favourites")
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) =>
        this.setState({
          favourites: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  fetchSearch() {
    // Where we're fetching data from
    console.log("fetching");
    var search_url = CONFIG.API_BASE_URL + "search?1=1";
    const selectedFilter = this.state.selectedFilter;
    for (const [key, value] of Object.entries(selectedFilter)) {
      search_url += "&" + key + "=" + value;
    }
    console.log(search_url);
    fetch(search_url)
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) =>
        this.setState({
          search: data,
          hits: data["hits"],
          filters: data["aggregations"],
          isLoadingSearch: false,
          aggregation: data["aggregation"],
        })
      )
      // Catch any errors we hit and update the app
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    //this.fetchFavourites()
    this.fetchSearch();
  }

  handleFilter(i) {
    const selectedFilter = this.state.selectedFilter;

    console.log(i);
    var arr = i.split("=");
    selectedFilter[arr[0]] = arr[1];
    if (arr[0] !== "_id") {
      selectedFilter["_id"] = "";
    }
    this.state.selectedFilter = selectedFilter;
    console.log(i);
    this.fetchSearch();
    console.log(this.state.isLoadingSearch);
    //console.log(args[0]);
    //alert(i);  //image_type=photopoint
  }

  handleFavourite(i) {
    const favourites = this.state.favourites;

    console.log(i);
    //console.log(args[0]);
    alert(i); //image_type=photopoint
  }

  render() {
    const { favourites } = this.state;
    const favs = favourites.map((favourite, index) => {
      return (
        <Favourite
          value={favourite}
          index={index}
          key={"f" + index}
          onClick={() => this.handleFavourite(favourite.favourite_name)}
        />
      );
    });

    const position = [this.state.lat, this.state.lng];
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    };

    return (
      <div>
        <TopBar />
        <SearchBar />
        <IconBar />

        <Row>
          {/*Filter SideBar*/}
          <Col
            xl={2}
            style={{ marginRight: "-.7%", zIndex: "9", height: "200vh" }}
          >
            <h5
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                color: "#065f65",
              }}
            >
              Filter
            </h5>
            <ImageSearchEngine
              imageFilters={this.state.filters}
              handleFilter={(i) => this.handleFilter(i)}
            />

            <DateRange />
            <Query />

            <div className="favs">
              <h5
                style={{
                  marginLeft: "15px",
                  marginTop: "20px",
                  color: "#065f65",
                }}
              >
                Favourites
              </h5>
              <ul>{favs}</ul>
            </div>
          </Col>

          {/*Leaflet Map */}
          <Col
            sm={12}
            md={12}
            lg={10}
            xl={10}
            style={{
              height: "80vh",
              padding: "0% 0% 0% 0%",
              marginTop: "0%",
              marginBottom: "0%",
            }}
          >
            <div className="map-container">
              <div className=" map-frame">
                <link
                  rel="stylesheet"
                  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                  integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                  crossOrigin=""
                />
                <div id="map-id">
                  <Map
                    className="markercluster-map"
                    center={position}
                    zoom={this.state.zoom}
                    style={{ zIndex: "1" }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />

                    <TileLayer
                      attribution='&copy; <a href="http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png">OpenStreetMap</a> contributors'
                      url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />

                    <TileLayer
                      attribution='&copy; <a href="http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                    />

                    {/* Example Markers */}
                    <MarkerClusterGroup>
                      <Marker position={[-27.8397, 143.0297]} />
                      <Marker position={[-28.2297, 143.0122]} />
                      <Marker position={[-27, 143.0901]} />
                      <Marker position={[-27.8397, 143.0297]} />
                      <Marker position={[-28.2297, 142.0122]} />
                      <Marker position={[-27, 143.0901]} />
                      <Marker position={[-27.8397, 143.0297]} />
                      <Marker position={[-28.2297, 143.0122]} />
                      <Marker position={[-27, 143.0901]} />
                      <Marker position={[-27.8397, 144.0297]} />
                      <Marker position={[-28.2297, 143.0122]} />
                      <Marker position={[-28, 143.0901]} />
                      <Marker position={[-27.8397, 143.0297]} />
                      <Marker position={[-28.2297, 143.0122]} />
                      <Marker position={[-26, 143.0901]} />
                      <Marker position={[-27.8397, 143.0297]} />
                      <Marker position={[-28.2297, 140.0122]} />
                      <Marker position={[-28, 143.0901]} />
                      <Marker position={[-27.8397, 142.0297]} />
                      <Marker position={[-28.2297, 143.0122]} />
                    </MarkerClusterGroup>

                    <MarkerClusterGroup>
                      <Marker position={[-29.8397, 140.0297]} />
                      <Marker position={[-28.2297, 142.0122]} />
                      <Marker position={[-29, 141.0901]} />
                      <Marker position={[-27.8397, 141.0297]} />
                      <Marker position={[-29.2297, 140.0122]} />
                      <Marker position={[-26, 141.0901]} />
                      <Marker position={[-30.8397, 142.0297]} />
                      <Marker position={[-29.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-29.8397, 141.0297]} />
                      <Marker position={[-29.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-29.8397, 139.0297]} />
                      <Marker position={[-29.2297, 142.0122]} />
                      <Marker position={[-27, 141.0901]} />
                      <Marker position={[-29.8397, 140.0297]} />
                      <Marker position={[-26.2297, 141.0122]} />
                      <Marker position={[-25, 141.0901]} />
                    </MarkerClusterGroup>

                    <MarkerClusterGroup>
                      <Marker position={[-20.8397, 140.0297]} />
                      <Marker position={[-27.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-26.8397, 140.0297]} />
                      <Marker position={[-27.2297, 135.0122]} />
                      <Marker position={[-26, 131.0901]} />
                      <Marker position={[-20.8397, 140.0297]} />
                      <Marker position={[-27.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-26.8397, 140.0297]} />
                      <Marker position={[-27.2297, 135.0122]} />
                      <Marker position={[-26, 131.0901]} />
                      <Marker position={[-20.8397, 140.0297]} />
                      <Marker position={[-27.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-26.8397, 140.0297]} />
                      <Marker position={[-27.2297, 135.0122]} />
                      <Marker position={[-26, 131.0901]} />
                      <Marker position={[-20.8397, 140.0297]} />
                      <Marker position={[-27.2297, 140.0122]} />
                      <Marker position={[-28, 141.0901]} />
                      <Marker position={[-26.8397, 140.0297]} />
                    </MarkerClusterGroup>

                    {/* API Markers */}
                    {Object.keys(this.state.hits).map((index) => (
                      <ImageMarkerEngine
                        value={this.state.hits[index]}
                        location={index}
                        key={index}
                      />
                    ))}
                  </Map>
                </div>
              </div>
              {/*End of Leaflet  Map */}
              <BreadCrumb />

              {/*Photo Gallery */}
              <SearchEngine
                bioImageDocuments={this.state.hits}
                aggregation={this.state.aggregation}
                onBioImageClick={(i) => this.handleFilter(i)}
              />
            </div>
          </Col>
        </Row>
        <Scroll />
        <Legend />

        <Footer />
      </div>
    );
  }
}

export default App;
