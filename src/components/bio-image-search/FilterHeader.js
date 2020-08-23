import React from "react";
import { Button } from "react-bootstrap";

const FilterHeader = () => (
  <h5 className="filter-header">
    <Button variant="filter">
      <i className="fa fa-filter" />
      {" "}
      Filter
    </Button>
    <Button variant="filter">
      <i className="fa fa-star" />
      {" "}
      Favourites
    </Button>
    <Button variant="filter">
      <i className="fa fa-check-square" />
      {" "}
      Saved
    </Button>

    {/* Mosheh disabled it - useless with checkbox tree structure now! */}
    {/* <ResetFilter resetFilter={resetFilter} /> */}
  </h5>
);

export default FilterHeader;
