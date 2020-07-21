import React, { useState } from "react";
import "./App.css";
import "./index.css";
import { CONFIG } from "./config.js";
import { Map, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";
//import Wkt from 'wicket';
//import wkt_coords from 'wicket';
import "bootstrap/dist/css/bootstrap.min.css";
//import { DateRangePicker } from 'react-date-range';
/*import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file*/
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { Link, scroller, animateScroll as scroll } from "react-scroll";
import { Accordion, Card, Button, Col, Row, Form, Modal, Image, Navbar} from "react-bootstrap";
import SearchBar from "./components/SearchBar";
import IconBar from "./components/IconBar";
import DateRange from "./components/DateRange";
import Legend from "./components/Legend";
import Query from "./components/Query";
import BreadCrumb from "./components/BreadCrumb";
import Toggle from "./components/buttons/Toggle";
import ViewImages from "./components/buttons/ViewImages";
import MarkerClusters from "./components/test/MarkerClusters";
import LoginButton from "./components/buttons/LoginButton";
import ResetFilter from "./components/buttons/ResetFilter";
import MapNav from "./components/MapNav";

const base_image_url =
  "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/";

{ /*Photo Gallery*/ }
function SearchResults(props) {
  return (
    <Row>
  
      {Object.keys(props.value).map((index, value) => (
        <SearchResult
          value={props.value[index]}
          id={props.group + "=" + index}
          key={index + value}
          onClick={(i) => props.onClick(i)}
        />
      ))}
          
    </Row>
  );
}

{ /*Photo Gallery Item*/ }
function SearchResult(props) {
  const img_url = props.value.thumbnail_url;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

<>
    <style type="text/css">
    {`
    .btn-flat {
      background-color: #fff;
      color:  #00565D;
      border: 1px solid #00565D;
    }

    .btn-flat:hover {
      background-color: #00565D;
      color:  #fff;
      border: 1px solid #00565D;
    }
    
    `}
    </style>
    <Col xl={3}>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <Col sm={2} style={{ position: "absolute", left: "0%" }}>
              <Navbar.Brand>
                <div className="site-branding">
                  <Link to="/">
                    <img src="img/logo@3x.png" alt="" />
                  </Link>
                </div>
              </Navbar.Brand>
            </Col>
            <Col style={{ position: "relative", left: "230%", width: "100%" }}>
              <h5>
                Site: {props.value.site_id.label} <br />
                Image Type: {props.value.image_type.value} <br />
                Image Count: 1/{props.value.doc_count}
              </h5>
            </Col>
          </Modal.Title>
        </Modal.Header>
        <hr
          style={{
            border: "0.5px solid #66b3a6",
            marginTop: "0%",
            marginBottom: "0.5%",
          }}
        ></hr>
        <Modal.Body>
          {" "}
          <Image src={img_url} width="765px" height="465px" />
          <br />
          <br />
          <Form
            className="center"
            style={{ paddingTop: "5px", color: "#065f65" }}
          >
            {["radio"].map((type) => (
              <div key={props.id} className="mb-3">
                <Form.Check
                  inline
                  label="Add To Selected Images?"
                  type={type}
                  id={props.id}
                />
              </div>
            ))}
          </Form>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>

      <Card id={props.id} style={{ marginTop: "5%", border: "#fff" }}>
        <div className="hvrbox">
          <Button
            variant="flat"
            style={{ width: "100%", padding: "0px" }}
            onClick={() => props.onClick(props.id)}
          >
            <Image
              className="hvrbox-layer_bottom"
              onClick={handleShow}
              src={img_url}
              style={{ width: "400px", height: "210px" }}
            />
            <div className="hvrbox-layer_top">
              <div className="hvrbox-text">
                Search These Images?
                <br />
                <img src="/img/icons/Bioimages icon.svg" alt="bioimages icon" width="100px" /> <br />
                <span className="center"></span>
              </div>
            </div>{" "}
            <strong>Site:</strong> {props.value.site_id.label} <br />
            <strong>Image Type:</strong>{" "}
            {props.value.image_type.value[0].toUpperCase() +
              props.value.image_type.value.substr(1)}{" "}
            <strong>Image Count:</strong> {props.value.doc_count}{" "}
          </Button>
        </div>

        <Form
          className="center"
          style={{ paddingTop: "5px", color: "#065f65" }}
        >
          {["checkbox"].map((type) => (
            <div key={props.id} className="mb-3">
              <Form.Check
                type={type}
                id={props.id}
                inline
                label="View"
                onClick={handleShow}
              />
              <Form.Check inline label="Select" type={type} id={props.id} />
              <Form.Check inline label="Download" type={type} id={props.id} />

      
            {/*{props.value.doc_count} */}
    
            </div>
          ))}
        </Form>
      </Card>
    </Col>
    </>
  );
}

{ /*Filter SideBar*/ }
function ImageSearch(props) {
  
  return (
    <>
    <div > 
     
      <h5
        style={{
          marginLeft: "0px",
          marginTop: "0px",
          color: "#fff",
          backgroundColor: "#ED694B",
          //border: "1px solid #065f65",
          //borderRight: "55px solid rgba(149, 219, 199, 0.5)",
         
          padding: "20px 10px 20px 10px"
        }}
      >
        Filter <ResetFilter />
      </h5>
      <div >
      {Object.keys(props.value).map((key, indexer) => (
        
        <ImageFilterType
          value={props.value[key]}
          header={key}
          key={key}
          onClick={(i) => props.onClick(i)}
          
        />
        
      ))}
     
      </div>
      <DateRange />
    
    </div>

<div className="favs" >
<h5
      style={{
        marginLeft: "0px",
        marginTop: "0px",
        color: "#fff",
        backgroundColor: "#00565D",
        //border: "1px solid #065f65",
        //borderBottom: "5px solid #66b3a6",
        padding: "20px 10px 20px 10px",
      
      }}
>
  
  Favourites
</h5>
<div className="" style={{ backgroundColor: "white", padding: "3% 6%" }}>
 
 <img src="/img/LAI_circle.svg" width="35px" />Leaf Area Index <img style={{float: 'right'}} src="/img/LAI.svg" width="30px" /> <br />
 <img src="/img/Panorama_circle.svg" width="35px" />Panorama <img style={{float: 'right'}} src="/img/panoramic.svg" width="30px"/> <br />
 <img src="/img/Phenocam_circle.svg" width="35px" />Phenocam <img style={{float: 'right'}} src="/img/phenocam.svg" width="30px" /> <br />
 <img src="/img/photopoint_circle.svg" width="35px" />Photopoint <img style={{float: 'right'}} src="/img/photopoint.svg" width="30px" />

</div>
</div>
</>
  );
}

{ /*Filter SideBar Toggle*/ }
function ImageFilterType(props) {

  return (
    <div style={{ marginLeft: "5px" }} key="{key}">
      <Accordion>
        <Card >
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            style={{
              backgroundColor: "#fff",
              borderRight: "55px solid rgba(149, 219, 199, 0.5)",
            }}
          >
            <Button
              style={{
                width: "105%",
                textTransform: "capitalize",
                color: "#065f65",
                fontWeight: "500",
              }}
              variant="outline"
              onClick={() => props.onClick(props.header + "=")}
            >
              {props.header
                .replace("_", " ")
                .replace("_", " ")
                .replace("d", "D")}{" "}
              <img className="accordion" src="/img/quickview.svg" width="40px" alt="quickview" />
            </Button>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ul>
                {Object.keys(props.value).map((key1) => (
                  <ImageFilter
                    value={props.value[key1]}
                    key={props.header + "=" + props.value[key1].key}
                    onClick={() =>
                      props.onClick(props.header + "=" + props.value[key1].key)
                    }
                  />
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <hr
        style={{
          border: "1px solid #66b3a6",
          marginTop: "0%",
          marginBottom: "0.5%",
        }}
      ></hr>
    </div>
  );
}

{ /*Filter SideBar Item*/ }
function ImageFilter(props) {
  return (
    <div>
      <div className="">
        <div key="{key}">
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              style={{ textTransform: "capitalize" }}
              label={props.value.label}
              onClick={props.onClick}
            />
            {/*{props.value.doc_count} */}
          </Form.Group>
        </div>
      </div>
    </div>
  );
}

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

function ImageMarkers(props) {
  console.log("hello");
  console.log(props.value);
  var popup = "";
  var tooltip = "";
  var id = props.location;
  var position = props.value.centre_point;
  console.log(id);
  console.log(position);
  for (var this_key in props.value.image_types) {
    console.log(this_key);
    for (var sub_key in props.value.image_types[this_key]) {
      var site_key = sub_key;
      console.log(Object.keys(props.value.image_types[this_key]).length);
      if (
        sub_key == "total" &&
        Object.keys(props.value.image_types[this_key]).length == 1
      ) {
        site_key = this_key;
      }
      popup +=
        site_key + "(" + props.value.image_types[this_key][sub_key] + ") \r\n";
      tooltip += props.value.image_types[this_key] + " - " + this_key;
    }
    console.log(popup);
    console.log("this is the popup for " + this_key);
  }

  return (
    /*Object.keys(props.value.image_types).map((index) => (
      <ImageMarker
        value={props.value.image_types[index]}
        type={index}
        site={props.value.supersite_node_code}
        position={props.value.centre_point}
        id={props.value.supersite_node_code + index}
        key={props.value.supersite_node_code + index} />
    //)) */
    <ImageMarker
      value={popup}
      type={id}
      site={id}
      position={position}
      id={id}
      key={id}
      label={id}
      onClick={props.onClick}
    />
  );
}

function ImageMarker(props) {
  return (
    <Marker
      icon={L.divIcon({
      
         html: `  `,
        className: "custom-marker",
        iconSize: L.point(33, 33, true),
        tooltipAnchor: [ 20, 0 ]
      })}

      key={props.id}
      position={props.position}
      onClick={props.onClick}
    >
      {" "}
      <br />

    

      <Popup >
                      <strong>
                        <h6>{props.label} selected. Choose an image type.</h6>
                      </strong>
                      Site:{" "}
                      <a
                        href="www.link.com"
                        style={{ textTransform: "capitalize", color: "#065f65" }}
                      >
                       {props.type} 
                      </a>{" "}
                      <br />
                      Image Types:{" "}
                      <a
                        href="www.link.com"
                        style={{ textTransform: "capitalize", color: "#065f65" }}
                      >
                      {props.value}  
                      </a>{" "}
                      <br />
                      <br />
                      <Button
                        style={{
                          padding: "3px",
                          border: "1px solid #065f65",
                          marginRight: "5px",
                        }}
                        variant="light"
                        size="small"
                      >
                        <img
                          src="/img/LAI.svg"
                          width="25px"
                          margin-right="5px"
                          alt="leaf area index"
                        />
                      </Button>
                      <Button
                        style={{
                          padding: "3px",
                          border: "1px solid #065f65",
                          marginRight: "5px",
                        }}
                        variant="light"
                        size="small"
                      >
                        <img
                          src="/img/Panoramic.svg"
                          width="25px"
                          margin-right="10px"
                          alt="panorama"
                        />
                      </Button>
                      <Button
                        style={{
                          padding: "3px",
                          border: "1px solid #065f65",
                          marginRight: "5px",
                        }}
                        variant="light"
                        size="small"
                      >
                        <img
                          src="/img/phenocam.svg"
                          width="25px"
                          margn-right="5px"
                          alt="phenocam"
                        />
                      </Button>
                      <Button
                        style={{
                          padding: "3px",
                          border: "1px solid #065f65",
                          marginRight: "5px",
                        }}
                        variant="light"
                        size="small"
                      >
                        <img
                          src="/img/photopoint.svg"
                          width="25px"
                          margin-right="5px"
                          alt="photopoint"
                        />
                      </Button>
                      <Link
                        style={{ float: "right" }}
                        to="gallery"
                        smooth={true}
                        duration={1000}
                      >
              
                      <>
                      <style type="text/css">
                      {`
                      .btn-flat {
                        background-color: #fff;
                        color:  #00565D;
                        border: 1px solid #00565D;
                      }
                
                      .btn-flat:hover {
                        background-color: #00565D;
                        color:  #fff;
                        border: 1px solid #00565D;
                      }
                      
                      `}
                      </style>
                      <Link
                      style={{ float: "right" }}
                      to="gallery"
                      smooth={true}
                      duration={1000}
                    >
                      <Button
                        style={{ padding: "6px 7px", border: "1px solid #065f65" }}
                        variant="flat"
                        size="sm"
                      
                     
                      >
                        View Images
                      </Button>
                    </Link>
                    </>
                       
              
              
              
                      </Link>
                    </Popup>
                   
    
      <Tooltip>
        <strong>
          <h6>Click the marker to select this site</h6>
        </strong>
        Site:{" "}
        <a
          href="www.tern.org"
          style={{ textTransform: "capitalize", color: "#065f65" }}
        >
          {props.type}{" "}
        </a>{" "}
        <br />
        Image Types:{" "}
        <a
          href="www.tern.org"
          style={{ textTransform: "capitalize", color: "#065f65" }}
        >
          {props.value}
        </a>{" "}
        <br />
        <img
          src="/img/LAI.svg"
          width="25px"
          margin-right="5px"
          alt="leaf area index"
        />
        <img
          src="/img/Panoramic.svg"
          width="25px"
          margin-right="10px"
          alt="panorama"
        />
        <img
          src="/img/phenocam.svg"
          width="25px"
          margn-right="5px"
          alt="phenocam"
        />
        <img
          src="/img/photopoint.svg"
          width="25px"
          margin-right="5px"
          alt="photopoint"
        />
      </Tooltip>
    </Marker>
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
      <div id="map">
        <TopBar />
        <SearchBar />
        <MapNav />
        <Row>
          {/*Filter SideBar*/}
          <Col 
            xl={2}
            style={{ marginRight: "-.7%", zIndex: "9", height: "190vh" }}
          >
            <ImageSearch
              value={this.state.filters}
              onClick={(i) => this.handleFilter(i)}
            />
        
          
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
                      
                      <ImageMarkers
                        value={this.state.hits[index]}
                        location={index}
                        // onClick={() => {
                        //   console.log("test", this.props, this.state);
                        //   this.handleFilter("site_id=" + index);
                          // scroller.scrollTo("gallery", {
                          //   duration: 1000,
                          //   smooth: true,
                          // });
                        // }}
                      />
                      
                    ))}
                  </Map>
                </div>
              </div>
              {/*End of Leaflet  Map */}
      
              <BreadCrumb />

              <div id="gallery"></div>
              {/*Photo Gallery */}
              <SearchResults
                value={this.state.hits}
                group={this.state.aggregation}
                onClick={(i) => this.handleFilter(i)}
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
