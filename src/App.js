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
import Footer from "./components/Footer";
import { Link, animateScroll as scroll } from "react-scroll";
import { Accordion, Card, Button, Col, Row } from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import IconBar from "./components/IconBar";
import MarkerClusterGroup from "react-leaflet-markercluster";
import Scroll from "./components/test/Scroll";
import DateRange from "./components/DateRange";
import Legend from "./components/Legend";
import Query from "./components/Query";
import BreadCrumb from "./components/BreadCrumb";
import SearchEngine from "./components/bio-search/SearchEngine";
import ImageSearchEngine from "./components/bio-image-search/ImageSearchEngine";
import ImageMarkerEngine from "./components/bio-image-marker/ImageMarkerEngine";
import Favourite from "./components/bio-favourites/Favourite";
import Toggle from "./components/buttons/Toggle";
import MapNav from "./components/MapNav";

const base_image_url =
  "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/";

/*Photo Gallery*/
/*Photo Gallery Item*/
/*Filter SideBar*/
/*Filter SideBar Item*/

// function Favourite(props) {
//   return (
//     <li key="{index}">
//       {" "}
//       <button onClick={props.onClick}>
//         {props.value.user_id} {props.value.favourite_name} (
//         {props.value.favourites_id})
//       </button>
//     </li>
//   );
// }

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
    console.log("Fetching Data now .....");
    var search_url = CONFIG.API_BASE_URL + "search?1=1";
    const selectedFilter = this.state.selectedFilter;
    for (const [key, value] of Object.entries(selectedFilter)) {
      search_url += "&" + key + "=" + value;
    }

    console.log("ES API. search_url" + search_url);

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

  filterSiteID(id) {
    this.setState({ selectedFilter: { site_id: id } });
    console.log("filterSiteID", this.state);
  }

  // resetSiteID(id) {
  //   this.setState({ selectedFilter: { site_id: null } });
  //   console.log("resetSiteID", this.state);
  // }

  handleFilter(i) {
    const selectedFilter = this.state.selectedFilter;

    console.log("HELLO MARK", i);
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
          user_id={favourite.user_id}
          favourite_name={favourite.favourite_name}
          favourite_id={favourite.favourite_id}
          index={index}
          key={"f" + index}
          handleFavourite={() => this.handleFavourite(favourite.favourite_name)}
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
      <div id="map">
        <TopBar />
        <SearchBar />
      <MapNav />
        <Row>
          {/*Filter SideBar*/}
          <Col className="filterbar"
            xl={2}
            style={{ marginRight: "-.7%", zIndex: "9"}}
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
                My Favourites
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

              <div id="gallery"></div>
              {/*Photo Gallery */}
              <SearchEngine
                bioImageDocuments={this.state.hits}
                aggregation={this.state.aggregation}
                onBioImageClick={(i) => this.handleFilter(i)}
              />
            </div>
            <ul>{favs}</ul>
          </Col>
        </Row>

      <Toggle />

 

        <Footer />
      </div>
    );
  }
}

export default App;
