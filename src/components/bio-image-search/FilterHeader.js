import React from "react";
import ResetFilter from "../buttons/ResetFilter";

const FilterHeader = ({ resetFilter }) => {
  return (
    <h5
      style={{
        color: "#fff",
        backgroundColor: "#ED694B",
        padding: "20px 10px 20px 10px",
        marginBottom: "1px",
      }}
    >
      Filter Reset <ResetFilter resetFilter={resetFilter} />
    </h5>
  );
};

export default FilterHeader;
