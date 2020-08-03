import React from "react";
import ImageMarker from "./ImageMarker";

const ImageMarkerEngine = ({ bioImageDocument, siteLocation }) => {
  var popup = "";
  var tooltip = "";
  var sitePosition = bioImageDocument.centre_point;
  for (var this_key in bioImageDocument.image_types) {
    //console.log(this_key);
    for (var sub_key in bioImageDocument.image_types[this_key]) {
      var site_key = sub_key;
      if (
        sub_key === "total" &&
        Object.keys(bioImageDocument.image_types[this_key]).length === 1
      ) {
        site_key = this_key;
      }
      popup +=
        site_key +
        "(" +
        bioImageDocument.image_types[this_key][sub_key] +
        ") \r\n";
      tooltip += bioImageDocument.image_types[this_key] + " - " + this_key;
    }
  }

  return (
    <ImageMarker
      value={popup}
      siteLocation={siteLocation}
      site={siteLocation}
      sitePosition={sitePosition}
      id={siteLocation}
      key={siteLocation}
      label={siteLocation}
    />
  );
};
export default ImageMarkerEngine;
