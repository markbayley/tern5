import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
// import { createSelector } from "reselect";

export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");
export const fetchSearchErrorAction = createAction("FETCH_SEARCH_ERROR");
export const selectedFilterAction = createAction("SELECTED_FILTER");
export const fetchFacetsAction = createAction("FETCH_FACETS");
export const fetchFacetsDoneAction = createAction("FETCH_FACETS_DONE");
export const paginationAction = createAction("PAGINATION");

const initialState = {
  error: null,
  isLoadingSearch: true,
  hits: [],
  totalDocuments: null,
  filters: {},
  aggregation: null,
  selectedFilter: {},
  pagination: { page_size: 32, page_num: 1 },
  facets: {},
};

const searchReducer = createReducer(initialState, {
  [fetchSearchAction]: (state, action) => {
    state.isLoadingSearch = true;
    state.selectedFilter = action.payload;
  },
  [fetchSearchDoneAction]: (state, action) => {
    state.isLoadingSearch = false;
    const { hits, page_num, page_size } = action.payload;
    if (hits !== null) {
      state.hits = hits["hits"];
      state.totalDocuments = hits["total"]["value"];
      // state.page_num = page_num;
      // state.page_size = page_size;
      state.pagination = { page_size: page_size, page_num: page_num };
    }
  },
  [fetchSearchErrorAction]: (state, action) => {
    state.isLoadingSearch = false;
    state.error = action.payload;
  },
  [selectedFilterAction]: (state, action) => {
    const updateSelectedFilter = { ...state.pagination, ...action.payload };
    state.selectedFilter = { ...updateSelectedFilter };
  },
  [fetchFacetsDoneAction]: (state, action) => {
    const { aggregations } = action.payload;
    state.facets = aggregations;
  },
  [paginationAction]: (state, action) => {
    const updateSelectedFilter = { ...state.selectedFilter, ...action.payload };
    state.selectedFilter = { ...updateSelectedFilter };
  },
});

export const rootReducer = combineReducers({
  search: searchReducer,
});

//Add Selector function (using memoization)
//TODO look at it later
// export const getSelectedFilter = createSelector(
//   (state) => state.search.selectedFilter,
//   (state) => state.search.pagination,
//   (selectedFilter, pagination) => ({ ...selectedFilter, ...pagination })
// );
