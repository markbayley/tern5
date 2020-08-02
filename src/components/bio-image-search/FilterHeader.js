import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchAction } from "../../store/reducer";

const FilterHeader = () => {
  const dispatch = useDispatch();
  const selectedFilter = {
      selectedFilter: {},
    };;

  const resetFilter = () => {
    console.log("Firing.. reseting Filter!!");
    dispatch(fetchSearchAction(selectedFilter));
  };
  return (
    <h5
      style={{
        color: "#fff",
        backgroundColor: "#ED694B",
        padding: "20px 10px 20px 10px",
        marginBottom: "1px",
      }}
    >
      Filter Reset
      <Button
        style={{ padding: "0px 3px 0px 3px", float: "right" }}
        variant="reset"
        size="sm"
        onClick={resetFilter}
      >
        <img src="/img/icons/reset-icon-white.png" alt="reset" width="30px" />
      </Button>
    </h5>
  );
};

export default FilterHeader;
