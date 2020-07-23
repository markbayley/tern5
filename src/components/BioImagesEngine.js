import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CONFIG } from "./../config.js";
import { TopBar } from 'tern-react';
// import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./BreadCrumb";
// import Scroll from "./Scroll";
import Legend from "./Legend";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import DateRange from "./DateRange";
import Query from "./Query";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";
import Toggle from "./buttons/Toggle";
import MapNav from "./MapNav";
import FavouriteHeader from "./bio-favourites/FavouriteHeader";
import FilterHeader from "./bio-image-search/FilterHeader";
import { Link, scroller, animateScroll as scroll } from "react-scroll";

import { fetchSearch } from "../redux";

const base_image_url =
  "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/";

/*Photo Gallery*/
/*Photo Gallery Item*/
/*Filter SideBar*/
/*Filter SideBar Item*/

const BioImagesEngine = ({ initFilter, hits, aggregation, filters, fetchSearch }) => {
  //const [bioState, setBioState] = useState({
  //   hits: [],
  //   aggregation: null,
  //   filters: {},
  //   search: {},
  //});
  const [selectedFilter, setSelectedFilter] = useState({});

  const [loading, setLoading] = useState(false);

  const [favourites, setFavourites] = useState([]);

  const [error, setError] = useState({
    isError: false,
    error: null,
  });

  const [mapParams, setMapParams] = useState({
    lat: -26.47,
    lng: 134.02,
    zoom: 5,
    maxZoom: 30,
    minZoom: 5,
  });

  // const updateBioState = (bioField, value) => {
  //   setBioState({ ...bioState, [bioField]: value });
  // };

  const fetchFavourites = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  // const fetchSearch = async (qry) => {
  //   console.log("Fetching Data now .....");
  //   var search_url = CONFIG.API_BASE_URL + "search?1=1";
  //   for (const [key, value] of Object.entries(qry)) {
  //     search_url += "&" + key + "=" + value;
  //   }
  //   console.log("ES API. search_url" + search_url);
  //   setLoading(true);
  //   try {
  //     const apiRes = await fetch(search_url);

  //     // We get the API response and receive data in JSON format...
  //     const resJSON = await apiRes.json();
  //     setBioState({
  //       search: resJSON,
  //       hits: resJSON["hits"],
  //       filters: resJSON["aggregations"],
  //       aggregation: resJSON["aggregation"],
  //     });
  //   } catch (error) {
  //     setError({
  //       isError: true,
  //       error: error,
  //     });
  //   }
  //   setLoading(false);
  // };

  useEffect(() => {
    fetchSearch(initFilter);
  }, [initFilter]);

  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    setSelectedFilter({ site_id: id });
    console.log("filterSiteID", selectedFilter);
  };

  const handleFilter = (i) => {
    console.log("in handleFilter(). HELLO MARK", i);
    var arr = i.split("=");
    // selectedFilter[arr[0]] = arr[1];
    setSelectedFilter({ [arr[0]]: arr[1] });
    if (arr[0] !== "_id") {
      // selectedFilter["_id"] = "";
      setSelectedFilter({ _id: "" });
    }
    setSelectedFilter(selectedFilter);
    fetchSearch(selectedFilter);
    console.log("Are we loading? " + loading);
  };

  const handleFavourite = (i) => {
    // const favourites = this.state.favourites;
    // TODO Impliment later!
    console.log("in handleFavourite() i =" + i);
    alert(i); //image_type=photopoint
  };

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
          <ImageSearchEngine
            imageFilters={filters}
            handleFilter={(i) => handleFilter(i)}
          />
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
            <BioMapEngine
              bioImageDocuments={hits}
              handleFilter={() => handleFilter()}
            />
            {/*End of Leaflet  Map */}
            <BreadCrumb />

            {/*Photo Gallery */}
            <div id="gallery"></div>
            <SearchEngine
              bioImageDocuments={hits}
              aggregation={aggregation}
              onBioImageClick={(i) => handleFilter(i)}
            />
          </div>
        </Col>
      </Row>
      {/* <Scroll />
      <Legend /> */}
      <Toggle />
      <Footer />
    </div >
  );
};



function mapStateToProps(state, ownProps) {
  return {
    loading: state.search.isLoadingSearch,
    hits: state.search.hits,
    filters: state.search.filters,
    aggregation: state.search.aggregation,
  }
}

const mapDispatchToProps = {
  fetchSearch,
}

const ConnectedBioImagesEngine = connect(mapStateToProps, mapDispatchToProps)(BioImagesEngine);

// export default App;
export default ConnectedBioImagesEngine;


// export default BioImagesEngine;
