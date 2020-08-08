import React, { useState } from "react";
import ResetFilter from "../buttons/ResetFilter";
import { Button } from "react-bootstrap";

const FilterHeader = ({ resetFilter }) => {
  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  return (
    <div>
      <h5
        style={{
          color: "#fff",
          backgroundColor: "#00565D",
          padding: "20px 20px 20px 20px",
          marginBottom: "1px",
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Reset
 
          <ResetFilter resetFilter={resetFilter} />
  
      </h5>
    </div>
  );
};

export default FilterHeader;
