import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";
import { Col, Row, Button } from "react-bootstrap";
import DateRange from "./DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
// import Toggle from "./buttons/Toggle";
// import MapNav from "./MapNav";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
import { fetchSearchAction } from "../store/reducer";
import Side from "./test/Side.jsx";

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

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

  /*Map Image Toggle*/
  const Toggle = () => {
    const searchmodes = ["Map", "Images"];
    const [mySearch, setMySearch] = useState("Map");

    return (
      <>
        <div
          style={{
            position: "absolute",
            left: "105px",
            top: "165px",
            zIndex: "10",
          }}
          role="group"
          aria-label="toggle"
        >
          {searchmodes.map((searchmode) => (
            <Button
              style={{
                color: "#fff",
                border: "2px solid rgba(84, 179, 166, 0.9)",
                borderRadius: "35px",
              }}
              variant="btntoggle"
              className="btntoggle"
              key={searchmode}
              onClick={() => setMySearch(searchmode)}
            >
              {searchmode}
            </Button>
          ))}
        </div>
        <Col
          style={{
            height: "80vh",
            padding: "0%",
            margin: "0%",
          }}
        >
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

  return (
    <div id="map">
      <TopBar />
      <SearchBar />
      <Side />
      <IconBar />
      <Row>
        {/*Filter SideBar*/}
        <Col
          lg="auto"
          className="filterbar"
          style={{ zIndex: "9", margin: "0", paddingRight: "0" }}
        >
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
          <FavouriteHeader />
          <Favourite />
        </Col>
        {/*Leaflet Map */}
        <Toggle />
        <div className="map-container">
          {/*End of Leaflet  Map */}

          {/*Photo Gallery */}
          <div id="gallery"></div>
        </div>
      </Row>
      <BreadCrumb />
      <Footer />
    </div>
  );
};
export default BioImagesEngine;
