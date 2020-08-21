import React from "react";

const FilterHeader = () => (
  <h5
    style={{
      color: "#fff",
      backgroundColor: "#00565D",
      padding: "20px 10px 20px 10px",
      marginBottom: "1px",
    }}
  >
    Filter
    {/* Mosheh disabled it - useless with checkbox tree structure now! */}
    {/* <ResetFilter resetFilter={resetFilter} /> */}
  </h5>
);

export default FilterHeader;
