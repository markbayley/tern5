import React from "react";
import ImageFilterType from "./ImageFilterType";

const ImageSearch = ({ imageFilters, handleFilter }) => {
  return (
    <div>
      {Object.keys(imageFilters).map((key, indexer) => (
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

export default ImageSearch;
