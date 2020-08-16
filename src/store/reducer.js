import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
import { featchFacets } from "./middleware/api/bioimages";
// const fetchFeatures = createAction('FETCH_FEATURES');
export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");
export const selectedFilterAction = createAction("SELECTED_FILTER");
export const fetchFacetsAction = createAction("FETCH_FACETS");
export const fetchFacetsDoneAction = createAction("FETCH_FACETS_DONE");
const initialState = {
  isLoadingSearch: true,
  hits: [],
  filters: {},
  aggregation: null,
  selectedFilter: {},
  facets: {},
};

//TODO Mosheh cleaning it up! 
//Lots changed after API changes.
const searchReducer = createReducer(initialState, {
  [fetchSearchAction]: (state, action) => {
    state.isLoadingSearch = true;
    state.selectedFilter = action.payload;
  },
  [fetchSearchDoneAction]: (state, action) => {
    state.isLoadingSearch = false;
    // const { hits, aggregation, aggregations } = action.payload;
    const { hits } = action.payload;
    // console.log("fetch payload=", action.payload);
    if (hits !== null) {
      // console.log("Loading hits....");
      state.hits = hits["hits"];
    } else {
      // console.log("Hits are still null!");
    }
    // state.filters = aggregations;
    // state.aggregation = aggregation;
    // if (isEmpty(state.staticFilters)) {
    //   state.staticFilters = aggregations;
    // }
  },
  [selectedFilterAction]: (state, action) => {
    // state.selectedFilter = { ...state.selectedFilter, ...action.payload };
    state.selectedFilter = {...action.payload };
  },
  [fetchFacetsDoneAction]: (state, action) => {
    const { aggregations } = action.payload;
    if (isEmpty(state.facets)) {
      state.facets = aggregations;
    }
  },
});

export const rootReducer = combineReducers({
  search: searchReducer,
});
