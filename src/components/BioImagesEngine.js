import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Button } from "react-bootstrap";
import SearchBar from "./searchbar/SearchBar";
import DateRange from "./bio-image-search/DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FilterHeader from "./bio-image-search/FilterHeader";
// import { fetchSearchAction, getSelectedFilter } from "../store/reducer";
import { fetchSearchAction, setSearchModeAction } from "../store/reducer";
import LeftSideBar from "../animations/LeftSideBar";
import Dates from "./bio-image-search/Dates";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

// import MobileSidebar from "./test/MobileSidebar";


import { addDays } from 'date-fns';
import { useState } from 'react';




/* Map Image Toggle */
function Toggle() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-toggle">
        <Button variant="round" onClick={() => dispatch(setSearchModeAction("Map"))}>
          Map
        </Button>
        <Button variant="round" onClick={() => dispatch(setSearchModeAction("Images"))}>
          Image
        </Button>
      </div>
    </>
  );
}

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  const searchMode = useSelector((state) => state.ui.searchResults.searchMode);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  // TODO: move these two below somewhere else, or look at url params?
  // TODO: this triggers a re-render - this component does not depend on selectedFilter
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  // TODO Look at this life cycle again and improve if required
  useEffect(() => {
    dispatch(fetchSearchAction(selectedFilter));
  }, [dispatch, selectedFilter]);

  return (
    <>
      <SearchBar />

      <LeftSideBar searchmode={searchMode} />
      <Row>
        {/* Filter SideBar */}
        <Col xs="auto" className="filter-bar">
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
{/* 
          <DateRangePicker
            onChange={item => setState([item.selection])}
            showSelectionPreview={false}
            moveRangeOnFirstSelection={false}
            
            months={2}
            ranges={state}
            direction="horizontal"
          /> */}

          {/* <MobileSidebar /> */}
          <Dates />

    
          <Favourite />
        </Col>
        <Toggle />
        <Col className="scroll-images">
          {/* Leaflet Map or Photo Gallery */}
          {searchMode === "Map"
            ? <BioMapEngine />
            : <SearchEngine />}
        </Col>
        {/* <div > */}
      </Row>
    </>
  );
};

export default BioImagesEngine;
