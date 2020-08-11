import React, { useState } from "react";
import ImageMarkerEngine from "./ImageMarkerEngine";
import { Map, TileLayer, FeatureGroup, Circle } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

// import MarkerClusterGroup from "react-leaflet-markercluster";

const BioMapEngine = ({ bioImageDocuments, handleFilter }) => {
  const [mapInitState, setMapInitState] = useState({
    lat: -26.47,
    lng: 134.02,
    zoom: 5,
    maxZoom: 30,
    minZoom: 5,
  });

  const mapInitPosition = [mapInitState.lat, mapInitState.lng];
  // TODO not used yet - use it later!
  // const selectionRange = {
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // };

  //console.log("in BioMapEngine.bioImageDocuments:");
  //console.log(bioImageDocuments);
  // console.log("handleFilter:");
  // console.log(handleFilter);

  return (
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
          center={mapInitPosition}
          zoom={mapInitState.zoom}
          style={{ zIndex: "1" }}
          scrollWheelZoom={false}
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

          <FeatureGroup>
            <EditControl
              position="bottomright"
              // onEdited={this._onEditPath}
              // onCreated={this._onCreate}
              // onDeleted={this._onDeleted}
            />
            <Circle center={[51.51, -0.06]} radius={200} />
          </FeatureGroup>

          {/* API Markers */}
          {Object.keys(bioImageDocuments).map((siteLocationAsIndex) => (
            <ImageMarkerEngine
              bioImageDocument={bioImageDocuments[siteLocationAsIndex]}
              siteLocation={siteLocationAsIndex}
              key={siteLocationAsIndex}
              handleFilter={() =>
                handleFilter(`site_id=${siteLocationAsIndex}`)
              }
            />
          ))}
        </Map>
      </div>
    </div>
  );
};
export default BioMapEngine;

