import React, { useState } from "react";
import ResetFilter from "../buttons/ResetFilter";
import { Button } from 'react-bootstrap'




const FilterHeader = ({resetFilter}) => {
  
  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");
      
  return (
    <h5
      style={{   
        color: "#fff",
        backgroundColor: "#00565D",
        padding: "20px 10px 20px 10px",
        marginBottom: "1px"
      }}
    >
      Filter   

      
        <ResetFilter resetFilter={resetFilter}/>
    </h5>
  );
};

export default FilterHeader

