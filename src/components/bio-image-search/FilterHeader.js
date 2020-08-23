import React, { useState } from "react";
import ResetFilter from "../buttons/ResetFilter";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAction, selectedFilterAction } from "../../store/reducer";

const FilterHeader = () => {
  const dispatch = useDispatch();

  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  const resetFilter = () => {
    console.log("Firing.. reset all filters!!");
    // dispatch(fetchSearchAction(selectedFilter));
    dispatch(selectedFilterAction({}));
  };
  return (
    <h5 className={"filter-header"}>
      <Button variant="filter">
        <i className="fa fa-filter"></i> Filter
      </Button>
      <Button variant="filter">
        <i className="fa fa-star"></i> Favourites
      </Button>
      <Button variant="filter">
        <i className="fa fa-check-square"></i> Saved
      </Button>

      {/* Mosheh disabled it - useless with checkbox tree structure now! */}
      {/* <ResetFilter resetFilter={resetFilter} /> */}
    </h5>
  );
};

export default FilterHeader;
