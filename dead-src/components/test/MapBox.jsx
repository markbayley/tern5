import React, { Fragment } from 'react';

import { CONFIG } from '../../config.js';
import { Map, Marker, Popup, Tooltip, TileLayer } from 'react-leaflet';
//import Wkt from 'wicket';
//import wkt_coords from 'wicket';
//import Api from './Api';


import {
  Card, CardTitle, Row, Col, Button,
} from 'reactstrap';

import PhotoGallery from './PhotoGallery'
import BreadCrumb from '../BreadCrumb';
import SideBar from '../SideBar';





const base_image_url = 'https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/';

function SearchResults(props) {
  return (
    <div>
      <div className="right">
        <ul>
          {Object.keys(props.value).map((index, value) => (
            <SearchResult
              value={props.value[index]}
              id={props.group + '=' + index}
              key={index + value}
              onClick={(i) => props.onClick(i)} />
          ))
          }
        </ul>
      </div>
    </div>
  );
}

function SearchResult(props) {
  const img_url = base_image_url + props.value.published_root + '/' + props.value.thumbnail_path;
  return (
    <li id={props.id}>
      <img src={img_url} /><br />
      <span className="space-left"><button onClick={() => props.onClick(props.id)}>key:{props.id} - count: {props.value.doc_count}- id:{props.value._id} - node:{props.value.metadata_doc.supersite_node_code} - img:{props.value.metadata_doc.image_type}</button></span>
    </li>
  );
}

function ImageSearch(props) {
  return (
    <div>
      <div className="">
        {Object.keys(props.value).map((key, indexer) => (
          <ImageFilterType
            value={props.value[key]}
            header={key}
            key={key}
            onClick={(i) => props.onClick(i)} />
        ))}
      </div>
    </div>
  );
}

function ImageFilterType(props) {
  return (
    <div className="container" key="{key}">
      <span className="">
        <button onClick={() => props.onClick(props.header + '=')}>
          {props.header}</button></span>
      <ul>
        {Object.keys(props.value).map((key1) => (
          <ImageFilter
            value={props.value[key1]}
            key={props.header + '=' + props.value[key1].key}
            onClick={() => props.onClick(props.header + '=' + props.value[key1].key)} />
        ))}
      </ul>
    </div>
  );
}

function ImageFilter(props) {
  return (
    <div>
      <div className="">
        <li key="{key}">
          <button onClick={props.onClick}>
            {props.value.key} ({props.value.doc_count})</button>
        </li>
      </div>
    </div>
  );
}

function Favourite(props) {
  return (
    <li key="{index}"> <button
      onClick={props.onClick}>{props.value.user_id} {props.value.favourite_name}</button></li>
  );
}

function ImageMarkers(props) {
  //console.log('hello');
  //console.log(props.value);
  var popup = "";
  var tooltip = "";
  var id = props.location;
  var position = props.value.centre_point;
  //console.log(id);
  //console.log(position);
  for (var this_key in props.value.image_types) {
    console.log(this_key);
    popup += this_key + "(" + props.value.image_types[this_key] + ") \r\n";
    tooltip += props.value.image_types[this_key] + " - " + this_key;
  }
  //console.log(popup);
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
      key={id} />
  );
}

function ImageMarker(props) {
  return (
    <Marker key={props.id}
      position={props.position}>
      <Popup>Popup {props.type} - {props.value}</Popup>
      <Tooltip>{props.type} - {props.value} Tooltip</Tooltip>
    </Marker>
  );
}

class MapBox extends React.Component {

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
      lat: -27.47,
      lng: 143.02,
      zoom: 4
    };
  }

  fetchFavourites() {
    // Where we're fetching data from
    fetch(CONFIG.API_BASE_URL + 'favourites')
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          favourites: data,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  fetchSearch() {
    // Where we're fetching data from
   //console.log ('fetching');
    var search_url = CONFIG.API_BASE_URL + '?1=1';
    const selectedFilter = this.state.selectedFilter;
    for (const [key, value] of Object.entries(selectedFilter)) {
      search_url += '&' + key + '=' + value;
    }
    //console.log(search_url);
    fetch(search_url)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          search: data,
          hits: data['hits'],
          filters: data['aggregations'],
          isLoadingSearch: false,
          aggregation: data['aggregation']
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }


  componentDidMount() {
    this.fetchFavourites()
    this.fetchSearch()
  }

  handleFilter(i) {
    const selectedFilter = this.state.selectedFilter;

    console.log(i);
    var arr = i.split('=');
    selectedFilter[arr[0]] = arr[1];
    if (arr[0] !== '_id') {
      selectedFilter['_id'] = "";
    }
    this.state.selectedFilter = selectedFilter;
    //console.log(i);
    this.fetchSearch();
    //console.log(this.state.isLoadingSearch);
    //console.log(args[0]);
    //alert(i);  //image_type=photopoint
  }

  handleFavourite(i) {
    const favourites = this.state.favourites;

    //console.log(i);
    //console.log(args[0]);
    alert(i);  //image_type=photopoint
  }

  render() {
    const { favourites } = this.state;
    const favs = favourites.map((favourite, index) => {
      return (
        <Favourite
          value={favourite}
          index={index}
          key={'f' + index}
          onClick={() => this.handleFavourite(favourite.favourite_name)} />
      );
    });

    const position = [this.state.lat, this.state.lng];
    return (
      <Fragment>
   

        <div className="App">
    

      

        <Row >
          <Col sm="0" md="0" lg="0" xl="2">
          </Col>

          <Col sm="3" xl={2} style={{ fontFamily: 'museo-sans, sans-serif', borderRight: "70px solid rgba(149, 219, 199, 0.5)", marginTop: "-1.5%"}}>
            
              <SideBar />
            
              <div>
                <ImageSearch
                  value={this.state.filters}
                  onClick={(i) => this.handleFilter(i)} />
              </div>
              <div className="left">
                <ul>
                  {favs}
                </ul>
              </div>

              <Row style={{ position: "absolute", left: "112%", top: "5%"}}>
              <img src="img/icons/Location.svg" alt="location" height="40px"/>
              </Row>

              <Row style={{ position: "absolute", left: "112%", top: "13%"}}>
             <img src="img/icons/camera1.svg" alt="location" height="40px"/>
              </Row>
        
              <Row style={{ position: "absolute", left: "112%", top: "29%"}}>
              <img src="img/icons/calendar.svg" alt="location" height="40px"/>
              </Row>

              <Row style={{ position: "absolute", left: "112%", top: "37%"}}>
              <img src="img/icons/frequency.svg" alt="location" height="40px"/>
              </Row>

              

             
          </Col>

        

         
         
          

          <Col sm="9" md="9" lg='9' xl='6'  >
            <Card body style={{padding: "0%", marginTop: "-3.3%", marginLeft: "-1.5%"}}>
              <div className="map-container" >
                <div className="right map-frame" >
                  <div id="map-id" >
                    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                      crossOrigin="" />
                    <Map center={position} zoom={this.state.zoom} style={{ height: "650px", borderBottom: "1.5px solid #66b3a6"}} >
                      <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                      />
                      {Object.keys(this.state.hits).map((index) => (
                        <ImageMarkers
                          value={this.state.hits[index]}
                          location={index} />
                      ))}
                    </Map  >
                  </div>

                  <div>
                    <SearchResults
                      value={this.state.hits}
                      group={this.state.aggregation}
                      onClick={(i) => this.handleFilter(i)} />
                  </div>
                </div>
              
               
              
              </div>
            
              <BreadCrumb></BreadCrumb>
              <PhotoGallery />
             
            </Card>
          </Col>
        </Row>
        <hr style={{ border: '1.5px solid #66b3a6', width: "110%" }}></hr>

        </div>
      </Fragment>
  
    );
  }
}

export default MapBox;