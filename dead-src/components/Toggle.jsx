import React, { useState } from "react";
import { Col, Button } from "react-bootstrap";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";

/* Map Image Toggle */
const Toggle = () => {
  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");
  // && <img src="/img/map.png" width="40px"/>
  return (
    <>
      <div className="map-image-toggle">
        {searchmodes.map((searchmode) => (
          <Button
            variant="round"
            style={{ borderRadius: "20px" }}
            key={searchmode}
            onClick={() => setMySearch(searchmode)}
          >
            {searchmode}
          </Button>
        ))}
      </div>
      <Col className="toggle-result">
        {mySearch === "Map" && (
          <div>
            <BioMapEngine />
          </div>
        )}
        {mySearch === "Images" && (
          <div>
            <SearchEngine />
          </div>
        )}
      </Col>
    </>
  );
};

export default Toggle;
