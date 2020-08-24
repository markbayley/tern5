import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import TopBar from "./headers/TopBar";
import SearchBar from "./searchbar/SearchBar";
import IconBar from "./bio-image-search/IconBar";
import BreadCrumb from "./footers/BreadCrumb";
import DateRange from "./bio-image-search/DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FilterHeader from "./bio-image-search/FilterHeader";
// import { fetchSearchAction, getSelectedFilter } from "../store/reducer";
import { fetchSearchAction } from "../store/reducer";
import LeftSideBar from "../animations/LeftSideBar";
import MobileSidebar from "./test/MobileSidebar";

/* Map Image Toggle */
function Toggle({ searchmode, setMySearch, searchmodes }) {
  // && <img src="/img/map.png" width="40px"/>
  return (
    <>
      <div className="toggle">
        {searchmodes.map((smode) => (
          <Button
            variant="round"
            key={smode}
            onClick={() => setMySearch(smode)}
          >
            {smode}
          </Button>
        ))}
      </div>
      <Col className="scroll-images">
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
  // TODO: this triggers a re-render - this component does not depend on selectedFilter
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  // const pagination = useSelector((state) => state.search.pagination);
  const dispatch = useDispatch();
  // const updateSearchFilter = getSelectedFilter(useStore().getState());

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

      <LeftSideBar searchmode={mySearch} setMySearch={setMySearch} />
      <Row>
        {/* Filter SideBar */}
        <Col xs="auto" className="filterbar">
          <IconBar />
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
          <MobileSidebar />

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
