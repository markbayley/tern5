import React, { useState, useEffect } from "react";
import { CONFIG } from "./../config.js";
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
import IconBar from "./IconBar";
import BreadCrumb from "./../BreadCrumb";
import Scroll from "./../Scroll";
import Legend from "./../Legend";
import Footer from "./Footer";
import { Col, Row } from "react-bootstrap";
import DateRange from "./../DateRange";
import Query from "./../Query";
import Favourite from "./bio-favourites/Favourite";
import ImageSearchEngine from "./bio-image-search/ImageSearchEngine";
import BioMapEngine from "./bio-image-map/BioMapEngine";
import SearchEngine from "./bio-search/SearchEngine";

const base_image_url =
  "https://swift.rc.nectar.org.au/v1/AUTH_05bca33fce34447ba7033b9305947f11/";

/*Photo Gallery*/
/*Photo Gallery Item*/
/*Filter SideBar*/
/*Filter SideBar Item*/

const BioImagesEngine = ({ initFilter }) => {
  const [bioState, setBioState] = useState({
    hits: [],
    aggregation: null,
    filters: {},
    search: {},
  });
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

  const updateBioState = (bioField, value) => {
    setBioState({ ...bioState, [bioField]: value });
  };

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

  const fetchSearch = async (qry) => {
    console.log("Fetching Data now .....");
    var search_url = CONFIG.API_BASE_URL + "search?1=1";
    for (const [key, value] of Object.entries(qry)) {
      search_url += "&" + key + "=" + value;
    }
    console.log("ES API. search_url" + search_url);
    setLoading(true);
    try {
      const apiRes = await fetch(search_url);

      // We get the API response and receive data in JSON format...
      const resJSON = await apiRes.json();
      setBioState({
        search: resJSON,
        hits: resJSON["hits"],
        filters: resJSON["aggregations"],
        aggregation: resJSON["aggregation"],
      });
    } catch (error) {
      setError({
        isError: true,
        error: error,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchSearch(initFilter);
  }, [initFilter]);

  const handleFilter = (i) => {
    console.log(i);
    var arr = i.split("=");
    selectedFilter[arr[0]] = arr[1];
    if (arr[0] !== "_id") {
      selectedFilter["_id"] = "";
    }
    setSelectedFilter(selectedFilter);
    console.log(i);
    fetchSearch(selectedFilter);
    console.log(bioState.loading);
    //console.log(args[0]);
    //alert(i);  //image_type=photopoint
  };

  const handleFavourite = (i) => {
    // const favourites = this.state.favourites;
    // TODO Impliment later!
    console.log("Favourite handling: " + i);
    alert(i); //image_type=photopoint
  };

  return (
    <div>
      <TopBar />
      <SearchBar />
      <IconBar />

      <Row>
        {/*Filter SideBar*/}
        <Col
          xl={2}
          style={{ marginRight: "-.7%", zIndex: "9", height: "200vh" }}
        >
          <h5
            style={{
              marginLeft: "15px",
              marginTop: "20px",
              color: "#065f65",
            }}
          >
            Filter
          </h5>
          <ImageSearchEngine
            imageFilters={bioState.filters}
            handleFilter={(i) => handleFilter(i)}
          />

          <DateRange />
          <Query />

          <div className="favs">
            <h5
              style={{
                marginLeft: "15px",
                marginTop: "20px",
                color: "#065f65",
              }}
            >
              My Favourites
            </h5>
            <Favourite
              favourites={favourites}
              handleFavourite={(i) => handleFavourite(i)}
            />
          </div>
        </Col>

        {/*Leaflet Map */}
        <Col
          sm={12}
          md={12}
          lg={10}
          xl={10}
          style={{
            height: "80vh",
            padding: "0% 0% 0% 0%",
            marginTop: "0%",
            marginBottom: "0%",
          }}
        >
          <div className="map-container">
            <BioMapEngine bioImageDocuments={bioState.hits} />
            {/*End of Leaflet  Map */}
            <BreadCrumb />

            {/*Photo Gallery */}
            <SearchEngine
              bioImageDocuments={bioState.hits}
              aggregation={bioState.aggregation}
              onBioImageClick={(i) => handleFilter(i)}
            />
          </div>
        </Col>
      </Row>
      <Scroll />
      <Legend />

      <Footer />
    </div>
  );
};
export default BioImagesEngine;
