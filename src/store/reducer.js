import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");
export const selectedFilterAction = createAction("SELECTED_FILTER");
export const fetchFacetsAction = createAction("FETCH_FACETS");
export const fetchFacetsDoneAction = createAction("FETCH_FACETS_DONE");
export const selectedMapImagesModeAction = createAction("MAP_IMAGES_MODE");

const initialState = {
  isLoadingSearch: true,
  hits: [],
  totalDocuments: null,
  page_num: null,
  page_size: null,
  filters: {},
  aggregation: null,
  selectedFilter: { page_size: 10, page_num: 1 },
  facets: {},
  selectedMapImagesMode: "Images",
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
    const { hits, page_num, page_size } = action.payload;
    if (hits !== null) {
      state.hits = hits["hits"];
      state.totalDocuments = hits["total"]["value"];
      state.page_num = page_num;
      state.page_size = page_size;
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
    console.log("REDUCER. selectedFilterAction. action.payload=", action.payload);
    // state.selectedFilter = { ...state.selectedFilter, ...action.payload };
    state.selectedFilter = { ...action.payload };
    // if ("concat-selected" in state.selectedFilter) {
    //   if (state.selectedFilter["concat-selected"] === "") {
    //     delete state.selectedFilter["concat-selected"];
    //   }
    // }
  },
  [fetchFacetsDoneAction]: (state, action) => {
    const { aggregations } = action.payload;
    //if (isEmpty(state.facets)) {
      console.log("aggregations=", aggregations);
      state.facets = aggregations;
    //}
  },
  [selectedMapImagesModeAction]: (state, action) => {
    state.selectedMapImagesMode = action.payload;
  },
});

export const rootReducer = combineReducers({
  search: searchReducer,
});
