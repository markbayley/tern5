import React from "react";
import ImageMarker from "./ImageMarker";
// import BreadCrumb from "../BreadCrumb";

const ImageMarkerEngine = ({ bioImageDocument, siteLocation }) => {
  var popup = "";
  var tooltip = "";
  // var sitePosition = bioImageDocument.centre_point;
  let sitePosition = bioImageDocument["location"]["coordinates"];
  const locType = bioImageDocument["location"]["type"];

  let siteCordinates = [];
  if (locType === "polygon") {
    //Take lat/lon from the first coords
    //TODO Have asked Wilma to look at this if we should be expecting
    // that some sites have polygons instead of lat/lon
    siteCordinates.push(sitePosition[0][0][1]);
    siteCordinates.push(sitePosition[0][0][0]);
  } else {
    siteCordinates.push(sitePosition[1]);
    siteCordinates.push(sitePosition[0]);
  }

  popup = bioImageDocument.image_type.label;

  return (
    <ImageMarker
      value={popup}
      siteLocation={siteLocation}
      site={siteLocation}
      sitePosition={siteCordinates}
      id={siteLocation}
      key={siteLocation}
      label={siteLocation}
      name={bioImageDocument.site_id.label}
      images={bioImageDocument.image_type.label}
      plot={bioImageDocument.plot.label}
      date={bioImageDocument.site_visit_id}
    />
  );
};
export default ImageMarkerEngine;
