import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import SearchBar from "./searchbar/SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";
import { Col, Row, Button } from "react-bootstrap";
import DateRange from "./DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
import {
  fetchSearchAction,
  selectedMapImagesModeAction,
} from "../store/reducer";
import LeftSideBar from "../animations/LeftSideBar";

import { Card, Form, Modal, Image, Navbar, Carousel } from "react-bootstrap";
import MobileSidebar from "./MobileSidebar";

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  const selectedMapImagesMode = useSelector(
    (state) => state.search.selectedMapImagesMode
  );
  // TODO Look at this life cycle again and improve if required
  useEffect(() => {
    console.log("in useEffect(). selectedFilter=", selectedFilter);
    // dispatch(fetchSearchAction({ selectedFilter: selectedFilter }));
    dispatch(fetchSearchAction(selectedFilter));
  }, [selectedFilter]);

  //TODO to be implemented later - if ever!
  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    //setSelectedFilter({ site_id: id });
    console.log("filterSiteID", selectedFilter);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  return (
    <div id="map">


      <TopBar />
      <SearchBar />

      <LeftSideBar searchmode={mySearch} />
      <Row>
        {/*Filter SideBar*/}
        <Col
          sm="auto"
          className="filterbar"
          style={{ zIndex: "9", margin: "0", paddingRight: "0" }}
        >
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
        {/*Leaflet Map */}

        <div className="map-container">
          {/*End of Leaflet  Map */}

          {/*Photo Gallery */}
          <div id="gallery"></div>
        </div>
      </Row>
      <BreadCrumb />
      {/* <Footer /> */}
    </div>
  );
};
export default BioImagesEngine;

/*Map Image Toggle*/
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
      <Col
        className="scroll2"
        style={{
          height: "80vh",
          padding: "0%",
          margin: "0%",
        }}
      >
        {searchmode === "Map" && (
          <div>
            <BioMapEngine />
          </div>
        )}
        {searchmode === "Images" && (
          <div>
            <SearchEngine />
          </div>
        )}
      </Col>
    </>
  );
}
