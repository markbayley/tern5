import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";
// const fetchFeatures = createAction('FETCH_FEATURES');
export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");
export const selectedFilterAction = createAction("SELECTED_FILTER");
const initialState = {
  isLoadingSearch: true,
  hits: [],
  filters: {},
  aggregation: null,
  selectedFilter: {},
  staticFilters: {},
};

const searchReducer = createReducer(initialState, {
  [fetchSearchAction]: (state, action) => {
    state.isLoadingSearch = true;
    state.selectedFilter = action.payload;
    
  },
  [fetchSearchDoneAction]: (state, action) => {
    state.isLoadingSearch = false;
    const { hits, aggregation, aggregations } = action.payload;
    state.hits = hits;
    state.filters = aggregations;
    state.aggregation = aggregation;
    if (isEmpty(state.staticFilters)) {
      state.staticFilters = aggregations;
    }
  },
  [selectedFilterAction]: (state, action) => {
    state.selectedFilter = { ...state.selectedFilter, ...action.payload };
  },
});

export const rootReducer = combineReducers({
  search: searchReducer,
});
