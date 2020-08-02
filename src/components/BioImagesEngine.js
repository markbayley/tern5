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
  const hits = useSelector((state) => state.search.hits);
  const filters = useSelector((state) => state.search.filters);
  const aggregation = useSelector((state) => state.search.aggregation);
  const selectedFilter = useSelector((state) => state.search.selectedFilter);

  console.log("in BioImagesEngine. hits=", hits);
  console.log("in BioImagesEngine. filters=", filters);
  console.log("in BioImagesEngine. aggregation=", aggregation);
  console.log("in BioImagesEngine. selectedFilter=", selectedFilter);
  //[loading, hits, filters, aggregation] = props;

  // const [selectedFilter, setSelectedFilter] = useState({});
  //const selectedFilter = {}; //testing
  //const [loading, setLoading] = useState(false);

  const [favourites, setFavourites] = useState([]);

  const [error, setError] = useState({
    isError: false,
    error: null,
  });

  const fetchFavourites = async () => {
    //setLoading(true);
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
    //setLoading(false);
  };

  // TODO fix this hook! I dont to render everything all the time!
  // TODO do something about the selectedFilter value!!
  useEffect(() => {
    // const query = {
    //   selectedFilter: { site_id: "alic", image_type: "ancillary" },
    // };
    console.log("in useEffect(). selectedFilter=", selectedFilter);
    dispatch(fetchSearchAction({ selectedFilter: selectedFilter }));
  }, [selectedFilter]);

  const filterSiteID = (id) => {
    // this.setState({ selectedFilter: { site_id: id } });
    //setSelectedFilter({ site_id: id });
    console.log("filterSiteID", selectedFilter);
  };

  const handleFilter = (filterValue) => {
    console.log("in handleFilter(). HELLO MARK", filterValue);
    var arr = filterValue.split("=");
    const fKey = arr[0];
    const fValue = arr[1];
    const miniFilter = { [fKey]: fValue };
    //const updatedFilter = { ...selectedFilter, ...miniFilter };
    //setSelectedFilter(updatedFilter);

    // if (arr[0] !== "_id") {
    //   // selectedFilter["_id"] = "";
    //   setSelectedFilter({ _id: "" });
    // }
  };

  const handleFavourite = (i) => {
    // const favourites = this.state.favourites;
    // TODO Impliment later!
    console.log("in handleFavourite() i =" + i);
    alert(i); //image_type=photopoint
  };

  if (loading === false) {
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
            // imageFilters={filters}
            // handleFilter={(i) => handleFilter(i)}
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
                // bioImageDocuments={hits}
                handleFilter={() => handleFilter()}
              />
              {/*End of Leaflet  Map */}
              <BreadCrumb />

              {/*Photo Gallery */}
              <div id="gallery"></div>
              <SearchEngine
                bioImageDocuments={hits}
                aggregation={aggregation}
                handleFilter={handleFilter}
              />
            </div>
          </Col>
        </Row>
        <Toggle />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <p>Loading....</p>
      </div>
    );
  }
};

// const mapStateToProps = (state, ownProps) => {
//   console.log("state=", state);
//   return {
//     loading: state.search.isLoadingSearch,
//     hits: state.search.hits,
//     filters: state.search.filters,
//     aggregation: state.search.aggregation,
//     selectedFilter: state.search.selectedFilter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchSearch: (action) => dispatch(fetchSearchAction(action)),
//   };
// };

// const ConnectedBioImagesEngine = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(BioImagesEngine);

// export default ConnectedBioImagesEngine;
export default BioImagesEngine;
