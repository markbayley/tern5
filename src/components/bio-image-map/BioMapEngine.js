import React, { useState } from "react";
import ImageMarkerEngine from "./ImageMarkerEngine";
import { Map, Marker, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";

const BioMapEngine = ({ bioImageDocuments }) => {
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
          {Object.keys(bioImageDocuments).map((index) => (
            <ImageMarkerEngine
              value={bioImageDocuments[index]}
              location={index}
              key={index}
            />
          ))}
        </Map>
      </div>
    </div>
  );
};
export default BioMapEngine;
