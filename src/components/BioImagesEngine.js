import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import DateRange from "./DateRange";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import Toggle from "./buttons/Toggle";
import MapNav from "./MapNav";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
import { fetchSearchAction } from "../store/reducer";

const BioImagesEngine = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.search.isLoadingSearch);
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  // TODO fix this hook! I dont to render everything all the time!
  // TODO do something about the selectedFilter value!!
  useEffect(() => {
    console.log("in useEffect(). selectedFilter=", selectedFilter);
    dispatch(fetchSearchAction({ selectedFilter: selectedFilter }));
  }, [selectedFilter]);

  //TODO to be implemented later!
  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    //setSelectedFilter({ site_id: id });
    console.log("filterSiteID", selectedFilter);
  };

  // if (loading === false) {
  return (
    <div id="map">
      <TopBar />
      <SearchBar />
      {/* <MapNav /> */}
      <IconBar />
      <Row>
        {/*Filter SideBar*/}
        <Col
          className="filterbar"
          xl={3}
          style={{ zIndex: "9", margin: "0", paddingRight: "0" }}
        >
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
          <FavouriteHeader />
          <Favourite />
        </Col>
        {/*Leaflet Map */}
        <Col
          sm={12}
          md={12}
          lg={10}
          xl={9}
          style={{
            height: "80vh",
            padding: "0%",
            margin: "0%",
          }}
        >
          <div className="map-container">
            <BioMapEngine />
            {/*End of Leaflet  Map */}
            <BreadCrumb />
            {/*Photo Gallery */}
            <div id="gallery"></div>
            <SearchEngine />
          </div>
        </Col>
      </Row>
      {/* <Toggle /> */}
      <Footer />
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //       <p>Loading....</p>
  //     </div>
  //   );
  // }
};
export default BioImagesEngine;
