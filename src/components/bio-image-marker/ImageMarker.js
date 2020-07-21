import React from "react";
import { Map, Marker, Popup, Tooltip, TileLayer } from "react-leaflet";
import L from "leaflet";
import Toaster from "./../../Toaster";

const ImageMarker = (props) => {
  return (
    <Marker
      icon={L.divIcon({
        html: "<div>" + props.value[10] + props.value[11] + "</div>",
        className: "custom-marker",
        iconSize: L.point(33, 33, true),
      })}
      key={props.id}
      position={props.position}
    >
      {" "}
      <br />
      <Popup>
        <strong>
          <p>You Have Selected This Site!</p>
        </strong>
        <strong>
          Site:{" "}
          <a style={{ textTransform: "capitalize", color: "#065f65" }}>
            {props.type}{" "}
          </a>
        </strong>
        <br />
        <strong>
          Image Types:{" "}
          <a style={{ textTransform: "capitalize", color: "#065f65" }}>
            {props.value}
          </a>{" "}
        </strong>{" "}
        <br /> <img src="/img/LAI.svg" width="25px" margin-right="5px" alt="" />
        <img src="/img/Panoramic.svg" width="25px" margin-right="10px" alt="" />
        <img src="/img/phenocam.svg" width="25px" margn-right="5px" alt="" />
        <img src="/img/photopoint.svg" width="25px" margin-right="5px" alt="" />
        <Toaster />
      </Popup>
      <Tooltip>
        <strong>
          <p>Click The Marker To Search This Site! </p>
        </strong>
        Site:{" "}
        <a style={{ textTransform: "capitalize", color: "#065f65" }}>
          {props.type}{" "}
        </a>
        <br />
        Image Types:{" "}
        <a style={{ textTransform: "capitalize", color: "#065f65" }}>
          {props.value}
        </a>{" "}
        <br /> <img src="/img/LAI.svg" width="25px" margin-right="5px" alt="" />
        <img src="/img/Panoramic.svg" width="25px" margin-right="10px" alt="" />
        <img src="/img/phenocam.svg" width="25px" margn-right="5px" alt="" />
        <img src="/img/photopoint.svg" width="25px" margin-right="5px" alt="" />
      </Tooltip>
    </Marker>
  );
};
export default ImageMarker;
