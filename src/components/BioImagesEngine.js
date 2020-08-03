import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONFIG } from "./../config.js";
// import { TopBar } from "tern-react";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
// import Scroll from "./Scroll";
// import Legend from "./Legend";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import DateRange from "./DateRange";
// import Query from "./Query";
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
  const loading = useSelector((state) => state.search.isLoadingSearch);
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  const [favourites, setFavourites] = useState([]);

  const [error, setError] = useState({
    isError: false,
    error: null,
  });

  // TODO to be implement properly in its time!
  const fetchFavourites = async () => {
    try {
      const apiRes = await fetch(CONFIG.API_BASE_URL + "favourites");
      const resJSON = await apiRes.json();
      setFavourites(resJSON);
    } catch (error) {
      setError({
        isError: true,
        error: error,
      });
    }
  };

  // TODO fix this hook! I dont to render everything all the time!
  // TODO do something about the selectedFilter value!!
  useEffect(() => {
    console.log("in useEffect(). selectedFilter=", selectedFilter);
    dispatch(fetchSearchAction({ selectedFilter: selectedFilter }));
  }, [selectedFilter]);

  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    //setSelectedFilter({ site_id: id });
    console.log("filterSiteID", selectedFilter);
  };

  const handleFavourite = (i) => {
    // const favourites = this.state.favourites;
    // TODO Impliment later!
    console.log("in handleFavourite() i =" + i);
    alert(i); //image_type=photopoint
  };

  // if (loading === false) {
  return (
    <div id="map">
      <TopBar />
      <SearchBar />
      <MapNav />
      <IconBar />

      <Row>
        {/*Filter SideBar*/}
        <Col
          className="filterbar"
          xl={2}
          style={{ zIndex: "9", margin: "0", paddingRight: "0" }}
        >
          <FilterHeader />
          <ImageSearchEngine />
          <DateRange />
          <FavouriteHeader />
          {/* <Query /> */}
          <Favourite
            favourites={favourites}
            handleFavourite={(i) => handleFavourite(i)}
          />
        </Col>

        {/*Leaflet Map */}
        <Col
          sm={12}
          md={12}
          lg={10}
          xl={10}
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
      <Toggle />
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
