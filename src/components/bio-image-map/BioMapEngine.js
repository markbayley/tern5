import React, { useState } from "react";
import ImageMarkerEngine from "./ImageMarkerEngine";
import { Map, TileLayer, FeatureGroup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import Leaflet from 'leaflet';
import { useSelector } from "react-redux";

// import MarkerClusterGroup from "react-leaflet-markercluster";

const BioMapEngine = () => {
  const [mapInitState, setMapInitState] = useState({
    lat: -26.47,
    lng: 134.02,
    zoom: 5,
    maxZoom: 30,
    minZoom: 5,
  });
  const [showMap, setShowMap] = useState(true);
  const [showMapButtonLabel, setShowMapButtonLabel] = useState("Hide Map");
  const mapInitPosition = [mapInitState.lat, mapInitState.lng];
  const bioImageDocuments = useSelector((state) => state.search.hits);
  console.log("In BioMapEngine. bioImageDocuments=", bioImageDocuments);
  // TODO not used yet - use it later!
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // };
  //Set map boundary (australia)
  const corner1 = Leaflet.latLng(-9.820066, 110.240312);
  const corner2 = Leaflet.latLng(-44.482812, 152.339923);
  const bounds = Leaflet.latLngBounds(corner1, corner2);

  const hideShowMap = () => {
    switch(showMapButtonLabel){
      case "Hide Map":
        setShowMapButtonLabel("Show Map");
        break;
      case "Show Map":
        setShowMapButtonLabel("Hide Map")
        break;
      default:
        setShowMapButtonLabel("Hide Map");
    }
    setShowMap(!showMap);
  }
  
  const BioMap = () => (  
    <div className="map-frame">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <div id="map-id">
        <Map
          className="markercluster-map"
          center={mapInitPosition}
          zoom={mapInitState.zoom}
          style={{ zIndex: "1" }}
          scrollWheelZoom={'center'}
          minZoom={mapInitState.zoom}
          maxBounds={bounds}
          
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

          {/* <FeatureGroup>
            <EditControl
              position="topright"
              // onEdited={this._onEditPath}
              // onCreated={this._onCreate}
              // onDeleted={this._onDeleted}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
          </FeatureGroup> */}

          {/* API Markers */}
          {Object.keys(bioImageDocuments).map((siteLocationAsIndex) => (
            <ImageMarkerEngine
              bioImageDocument={bioImageDocuments[siteLocationAsIndex]}
              siteLocation={siteLocationAsIndex}
              key={siteLocationAsIndex}
            />
          ))}
        </Map>
      </div>
    </div>
  );

  return (
    <div>
    <input type="submit" value={showMapButtonLabel} onClick={hideShowMap}/>
    {showMap? <BioMap/> : null}
    </div>
  );
};
export default BioMapEngine;
