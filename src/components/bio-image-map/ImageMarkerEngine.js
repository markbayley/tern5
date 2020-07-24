import React from "react";
import ImageMarker from "./ImageMarker";

const ImageMarkerEngine = ({
  props,
  bioImageDocument,
  location,
  handleFilter,
}) => {
  console.log("hello");
  console.log(bioImageDocument);
  var popup = "";
  var tooltip = "";
  var id = location;
  var position = bioImageDocument.centre_point;
  console.log(id);
  console.log(position);
  for (var this_key in bioImageDocument.image_types) {
    console.log(this_key);
    for (var sub_key in bioImageDocument.image_types[this_key]) {
      var site_key = sub_key;
      console.log(Object.keys(bioImageDocument.image_types[this_key]).length);
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
    console.log(popup);
    console.log("this is the popup for " + this_key);
  }

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
      key={id}
      label={id}
      onClick={handleFilter}
    />
  );
};
export default ImageMarkerEngine;
