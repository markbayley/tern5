import React from "react";
import ImageMarker from "./ImageMarker";

const ImageMarkerEngine = ({
  bioImageDocument,
  siteLocation,
  handleFilter,
}) => {
  //console.log("in ImageMarkerEngine. bioImageDocument=");
  //console.log(bioImageDocument);
  //console.log("handleFilter:");
  //console.log(handleFilter);

  var popup = "";
  var tooltip = "";
  var sitePosition = bioImageDocument.centre_point;
  //console.log(siteLocation);
  //console.log("in ImageMarkerEngine. siteLocation=" + siteLocation);
  for (var this_key in bioImageDocument.image_types) {
    //console.log(this_key);
    for (var sub_key in bioImageDocument.image_types[this_key]) {
      var site_key = sub_key;
      //console.log(Object.keys(bioImageDocument.image_types[this_key]).length);
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
    //console.log(popup);
    //console.log("this is the popup for " + this_key);
  }

  return (
    /*Object.keys(props.value.image_types).map((index) => (
      <ImageMarker
        value={props.value.image_types[index]}
        type={index}
        site={props.value.supersite_node_code}
        sitePosition={props.value.centre_point}
        siteLocation={props.value.supersite_node_code + index}
        key={props.value.supersite_node_code + index} />
    //)) */
    <ImageMarker
      value={popup}
      siteLocation={siteLocation}
      site={siteLocation}
      sitePosition={sitePosition}
      id={siteLocation}
      key={siteLocation}
      label={siteLocation}
      onClick={handleFilter}

      name={bioImageDocument.site_id.label}
      images={bioImageDocument.image_type.label}
      plot={bioImageDocument.plot.label}
      date={bioImageDocument.site_visit_id}
    />
  );
};
export default ImageMarkerEngine;
