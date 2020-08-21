import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import TopBar from "./TopBar";
import SearchBar from "./searchbar/SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
import DateRange from "./DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
import { fetchSearchAction } from "../store/reducer";
import LeftSideBar from "../animations/LeftSideBar";
import MobileSidebar from "./MobileSidebar";

/* Map Image Toggle */
function Toggle({ searchmode, setMySearch, searchmodes }) {
  // && <img src="/img/map.png" width="40px"/>
  return (
    <>
      <div
        className="toggle"
        style={{
          position: "absolute",
          right: "5%",
          top: "80px",
          zIndex: "10",
        }}
      >
        {searchmodes.map((smode) => (
          <Button
            variant="round"
            style={{ borderRadius: "20px" }}
            key={smode}
            onClick={() => setMySearch(smode)}
          >
            {smode}
          </Button>
        ))}
      </div>
      <Col
        className="scroll-images"
        style={{
          height: "80vh",
          padding: "0%",
          margin: "0%",
          width: "80vw",
        }}
      >
        {/* Leaflet Map */}
        {searchmode === "Map" && (
          <div>
            <BioMapEngine />
          </div>
        )}
        {/* Photo Gallery */}
        {searchmode === "Images" && (
          <div>
            <SearchEngine />
          </div>
        )}
      </Col>
    </>
  );
}

Toggle.propTypes = {
  searchmode: PropTypes.string.isRequired,
  setMySearch: PropTypes.func.isRequired,
  searchmodes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  // TODO: this triggers a re-render - this component does not depend on selectedFilter
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  // TODO Look at this life cycle again and improve if required
  useEffect(() => {
    dispatch(fetchSearchAction(selectedFilter));
  }, [dispatch, selectedFilter]);

  return (
    <div>
      <TopBar />
      <SearchBar />

      <LeftSideBar searchmode={mySearch} />
      <Row>
        {/* Filter SideBar */}
        <Col xs="auto" className="filterbar" style={{ borderRight: "60px solid #B3D4C9" }}>
          <IconBar />
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
          <MobileSidebar />
          <FavouriteHeader />
          <Favourite />
        </Col>
        <Toggle
          searchmode={mySearch}
          setMySearch={setMySearch}
          searchmodes={searchmodes}
        />
        {/* <div > */}
      </Row>
      <BreadCrumb />
      {/* <Footer /> */}
    </div>
  );
};
export default BioImagesEngine;
