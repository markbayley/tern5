import React, { useState } from "react";
import ResetFilter from "../buttons/ResetFilter";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAction } from "../../store/reducer";

const FilterHeader = () => {
  const dispatch = useDispatch();
  const selectedFilter = {
    selectedFilter: {},
  };

  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  const resetFilter = () => {
    console.log("Firing.. reset all filters!!");
    dispatch(fetchSearchAction(selectedFilter));
  };
  return (
    <h5
      style={{
        color: "#fff",
        backgroundColor: "#00565D",
        padding: "20px 10px 20px 10px",
        marginBottom: "1px",
      }}
    >
      Filter
      <ResetFilter resetFilter={resetFilter} />
    </h5>
  );
};

export default FilterHeader;
