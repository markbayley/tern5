import React from "react";
import ImageMarker from "./ImageMarker";
// import BreadCrumb from "../BreadCrumb";

const ImageMarkerEngine = ({ bioImageDocument, siteLocation }) => {
  var popup = "";
  var tooltip = "";
  // var sitePosition = bioImageDocument.centre_point;
  let sitePosition = bioImageDocument["location"]["coordinates"];

  let siteCordinates = [];
  siteCordinates.push(sitePosition[1]);
  siteCordinates.push(sitePosition[0]);

  // for (var this_key in bioImageDocument.image_types) {
  //   //console.log(this_key);
  //   for (var sub_key in bioImageDocument.image_types[this_key]) {
  //     var site_key = sub_key;
  //     if (
  //       sub_key === "total" &&
  //       Object.keys(bioImageDocument.image_types[this_key]).length === 1
  //     ) {
  //       site_key = this_key;
  //     }
  //     popup +=
  //       site_key +
  //       "(" +
  //       bioImageDocument.image_types[this_key][sub_key] +
  //       ") \r\n";
  //     tooltip += bioImageDocument.image_types[this_key] + " - " + this_key;
  //   }
  // }
  //TODO Mark to fix the above. Used the following to make it rendered.
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

