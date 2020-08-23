import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import TopBar from "./headers/TopBar";
import SearchBar from "./searchbar/SearchBar";
import IconBar from "./bio-image-search/IconBar";
import BreadCrumb from "./footers/BreadCrumb";
import Footer from "./footers/Footer";
import { Col, Row, Button } from "react-bootstrap";
import DateRange from "./bio-image-search/DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
// import { fetchSearchAction, getSelectedFilter } from "../store/reducer";
import { fetchSearchAction } from "../store/reducer";
import LeftSideBar from "../animations/LeftSideBar";
import MobileSidebar from "./test/MobileSidebar";

const BioImagesEngine = () => {
  const selectedFilter = useSelector((state) => state.search.selectedFilter);
  // const pagination = useSelector((state) => state.search.pagination);
  const dispatch = useDispatch();
  //const updateSearchFilter = getSelectedFilter(useStore().getState());

  const searchmodes = ["Map", "Images"];
  const [mySearch, setMySearch] = useState("Map");

  // TODO Look at this life cycle again and improve if required
  useEffect(() => {
    console.log("in useEffect(). selectedFilter=", selectedFilter);
    dispatch(fetchSearchAction(selectedFilter));
  }, []);

  //TODO to be implemented later - if ever!
  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    //setSelectedFilter({ site_id: id });
    // console.log("filterSiteID", selectedFilter);
  };

  /*Map Image Toggle*/
  function Toggle({ searchmode, setMySearch, searchmodes }) {
    // && <img src="/img/map.png" width="40px"/>
 
    return (
      <>
        <div className={"toggle"}>
          {searchmodes.map((searchmode) => (
            <Button
              variant={"toggle"}
              key={searchmode}
              onClick={() => setMySearch(searchmode)}
            >
              {searchmode}
            </Button>
          ))}
        </div>
        <Col className={"scroll-images"}>
          {/*Leaflet Map */}
          {searchmode === "Map" && (
            <div>
              <BioMapEngine />
            </div>
          )}
          {/*Photo Gallery */}
          {searchmode === "Images" && (
            <div>
              <SearchEngine />
            </div>
          )}
        </Col>
      </>
    );
  }

  return (
    <div>
      <TopBar />
      <SearchBar />

      <LeftSideBar searchmode={mySearch} setMySearch={setMySearch} />
      <Row>
        {/*Filter SideBar*/}
        <Col xs="auto" className={"filter-bar"}>
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
