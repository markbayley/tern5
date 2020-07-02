import React, { Fragment, useState } from 'react';
import '../App.css';
import { CONFIG } from '../config.js';
import { Map, Marker, Popup, Tooltip, TileLayer, GeoJSON } from 'react-leaflet';
//import Wkt from 'wicket';
//import wkt_coords from 'wicket';
import data from '../assets/data';
import Markers from './VenueMarkers';
import Footer from './Footer'
//import SideBar from './SideBar';

import { Accordion, Card, CardTitle, Button, Col, Row, Form } from "react-bootstrap";

import Datepicker from './Datepicker';
import IconBar from './IconBar';
import Filter from './test/Filter';
import DatePicker from 'react-date-picker'
import MultiSelect from './MultiSelect';




// import {
//   Row, Col, Button
// } from 'reactstrap';

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
      <img src={img_url} alt="image_result" /><br />
      <span className="space-left"><button onClick={() => props.onClick(props.id)}>key:{props.id} - count: {props.value.doc_count}- id:{props.value._id} - node:{props.value.metadata_doc.supersite_node_code} - img:{props.value.metadata_doc.image_type}</button></span>
    </li>
  );
}

function ImageSearch(props) {
  return (
    <div>
      <div >
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
      <span>
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
      <div>
        <li key="{key}">
          <button onClick={props.onClick}>
            {props.value.key} ({props.value.doc_count})</button>
        </li>
      </div>
    </div>
  );
}

// function Favourite(props) {
//   return (
//     <li key="{index}"> <button
//       onClick={props.onClick}>{props.value.user_id} {props.value.favourite_name}</button></li>
//   );
// }

function ImageMarkers(props) {
  console.log('hello');
  console.log(props.value);
  var popup = "";
  var tooltip = "";
  var id = props.location;
  var position = props.value.centre_point;
  console.log(id);
  console.log(position);
  for (var this_key in props.value.image_types) {
    console.log(this_key);
    popup += this_key + "(" + props.value.image_types[this_key] + ") \r\n";
    tooltip += props.value.image_types[this_key] + " - " + this_key;
  }
  console.log(popup);
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

class MapSearch extends React.Component {
 

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
    console.log('fetching');
    var search_url = CONFIG.API_BASE_URL + '?1=1';
    const selectedFilter = this.state.selectedFilter;
    for (const [key, value] of Object.entries(selectedFilter)) {
      search_url += '&' + key + '=' + value;
    }
    console.log(search_url);
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
    console.log(i);
    this.fetchSearch();
    console.log(this.state.isLoadingSearch);
    //console.log(args[0]);
    alert(i);  //image_type=photopoint
  }

  // handleFavourite(i) {
  //   const favourites = this.state.favourites;

  //   console.log(i);
  //   //console.log(args[0]);
  //   alert(i);  //image_type=photopoint
  // }

  handleChange = (event) => {
    this.setState({
      topic: event.target.value
    })
    console.log(event.target.value)
  }



  
  

  render() {
    // const { favourites } = this.state;
    // const favs = favourites.map((favourite, index) => {
    // return (
    // <Favourite
    //   value={favourite}
    //   index={index}
    //   key={'f' + index}
    //   onClick={() => this.handleFavourite(favourite.favourite_name)} />
    //   );
    // });

    const position = [this.state.lat, this.state.lng];
   
    return (
      <Fragment>

        <Row>
       


          <Col sm="0" md="0" lg="0" xl="2" style={{ borderRight: "70px solid rgba(149, 219, 199, 0.5)", color: "#065f65" }} >
            <Card body style={{ border: "white" }} >

              <header style={{ textAlign: "left", fontFamily: 'museo-sans, sans-serif', fontSize: "20px", backgroundColor: "white" }}><strong>Filter</strong></header>
             
              <Card style={{ border: "white", textAlign: "left" }} >

                <h6 style={{ paddingTop: "5%", color: "#065f65", fontWeight: "500" }}>Site</h6>
           
                <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check value={'Site 1'} onChange={this.handleFilter} inline label="Site One" type={type} id={`inline-${type}-1`} /><br />
                      <Form.Check selectedFilter={this.handleInputChange} onChange={this.selectedFilter} inline label="Site Two" type={type} id={`inline-${type}-2`} /><br />
                      <Form.Check value={this.state.selectedFilter} onChange={this.handleFilter} inline label="Site Three" type={type} id={`inline-${type}-3`} /><br />
                      <Form.Check value={this.state.selectedFilter} onChange={this.handleFilter} inline label="Site Four" type={type} id={`inline-${type}-4`} />
                    </div>
                  ))}
                </Form>

              </Card>
              <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

              <Card style={{ border: "white", textAlign: "left" }} >
                <h6 style={{ paddingTop: "0%", color: "#065f65", fontWeight: "500" }}>Image Type</h6>

                <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Leaf Area Index" type={type} id={`inline-${type}-5`} /><br />
                      <Form.Check inline label="Phenocam" type={type} id={`inline-${type}-6`} /><br />
                      <Form.Check inline label="Panorama" type={type} id={`inline-${type}-7`} /><br />
                      <Form.Check inline label="Photopoint" type={type} id={`inline-${type}-8`} />
                    </div>
                  ))}
                </Form>

              </Card>

              <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

              <Datepicker />

              <Card style={{ border: "white", textAlign: "left" }} >
                <h6 style={{ paddingTop: "0%", color: "#065f65", fontWeight: "500" }}>Frequency</h6>

                <Form value={this.state.selectedFilter} onChange={this.handleChange} style={{ paddingTop: "5px" }}>

                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check inline label="Daily" type={type} id={`inline-${type}-9`} /><br />
                      <Form.Check inline label="Weekly" type={type} id={`inline-${type}-10`} /><br />
                      <Form.Check inline label="Monthly" type={type} id={`inline-${type}-11`} /><br />
                      <Form.Check inline label="Yearly" type={type} id={`inline-${type}-12`} />
                    </div>
                  ))}
                </Form>

              </Card>

              <hr style={{ border: '0.5px solid #66b3a6', marginTop: "0%" }}></hr>

            </Card>
      

            <IconBar />

          </Col>





          <Col sm="12" md="12" lg='10' xl='10' style={{ padding: "0% 0% 0% 0%", marginTop: "0%", marginBottom: "-0.7%" }} >
            <div className="map-container">
              <div className="right map-frame">
                <div id="map-id" >
                  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                    crossOrigin="" />
                  <Map center={position} zoom={this.state.zoom}>

                    <TileLayer
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />

                    <Markers venues={data.venues} />

                    {Object.keys(this.state.hits).map((index) => (
                      <ImageMarkers
                        value={this.state.hits[index]}
                        location={index} />
                    ))}
                  </Map >
                </div>
                <div>
                  <SearchResults
                    value={this.state.hits}
                    group={this.state.aggregation}
                    onClick={(i) => this.handleFilter(i)} />
                </div>
                <div>
                  <ImageSearch
                    value={this.state.filters}
                    onClick={(i) => this.handleFilter(i)} />
                </div>
                <div className="favs">

                  {/* <ul>
                  {favs}
                </ul> */}
                </div>
              </div>
            </div>
          </Col>

        </Row>

        <Footer />
      </Fragment>

    );
  }
}

export default MapSearch;