import React from "react";
import ImageFilterType from "./ImageFilterType";
import { useSelector } from "react-redux";
// import { fetchSearchAction, selectedFilterAction } from "../../store/reducer";

const ImageSearchEngine = () => {
  const filterOrder = {
    site_id: 5,
    image_type: 4,
    image_type_sub: 3,
    plot: 2,
    site_visit_id: 1,
  };

  // const dispatch = useDispatch();
  const filters = useSelector((state) => state.search.filters);

  return (
    <div>
      {Object.keys(filters)
        .sort((a, b) => {
          return filterOrder[a] < filterOrder[b] ? 1 : -1;
        })
        .map((key, indexer) => (
          <ImageFilterType
            imageFilter={filters[key]}
            header={key}
            key={key}
            // handleFilter={(i) => handleFilter(i)}
          />
        ))}
    </div>
  );
};

export default ImageSearchEngine;
