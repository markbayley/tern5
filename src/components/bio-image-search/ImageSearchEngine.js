import React from "react";
import ImageFilterType from "./ImageFilterType";
import { connect } from "react-redux";
import { fetchSearchAction, selectedFilterAction } from "../../store/reducer";

const ImageSearchEngine = ({ imageFilters, handleFilter }) => {
  const filterOrder = {
    site_id: 5,
    image_type: 4,
    image_type_sub: 3,
    plot: 2,
    site_visit_id: 1,
  };

  const handleFilterX = (filterValue) => {
    console.log("in handleFilter(). HELLO MARK", filterValue);
    var arr = filterValue.split("=");
    const fKey = arr[0];
    const fValue = arr[1];
    const miniFilter = { [fKey]: fValue };
    //const updatedFilter = { ...selectedFilter, ...miniFilter };
    //setSelectedFilter(updatedFilter);

    // if (arr[0] !== "_id") {
    //   // selectedFilter["_id"] = "";
    //   setSelectedFilter({ _id: "" });
    // }
  };

  return (
    <div>
      {Object.keys(imageFilters)
        .sort((a, b) => {
          return filterOrder[a] < filterOrder[b] ? 1 : -1;
        })
        .map((key, indexer) => (
          <ImageFilterType
            imageFilter={imageFilters[key]}
            header={key}
            key={key}
            handleFilter={(i) => handleFilter(i)}
          />
        ))}
    </div>
  );
};

export default ImageSearchEngine;
