import React from "react";
import ImageFilterType from "./ImageFilterType";
import { useSelector } from "react-redux";
import ImageFilterTypeReactCkbTree from "./ImageFilterTypeReactCkbTree";

// import { fetchSearchAction, selectedFilterAction } from "../../store/reducer";

const ImageSearchEngine = () => {
  // const filterOrder = {
  //   site_id: 5,
  //   image_type: 4,
  //   image_type_sub: 3,
  //   plot: 2,
  //   site_visit_id: 1,
  // };

  // const dispatch = useDispatch();
  //const filters = useSelector((state) => state.search.filters);

  return (
    // <div>
    //   {Object.keys(filters)
    //     .sort((a, b) => {
    //       return filterOrder[a] < filterOrder[b] ? 1 : -1;
    //     })
    //     .map((key) => {
    //       if (key === "site_id") {
    //         return (
    //           <ImageFilterTypeReactCkbTree sites={filters[key]}
    //             image_types={filters['image_type']}
    //             image_type_sub={filters['image_type_sub']}
    //             key={key}
    //           />
    //         );
    //       } else {
    //         return (
    //           <ImageFilterType
    //             imageFilter={filters[key]}
    //             header={key}
    //             key={key}
    //             // handleFilter={(i) => handleFilter(i)}
    //           />
    //         );
    //       }
    //     })}
    // </div>
    <div className="react-checkbox-tree">
      <ImageFilterTypeReactCkbTree />
    </div>
  );
};

export default ImageSearchEngine;
