import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";

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
};

const searchReducer = createReducer(initialState, {
  [fetchSearchAction.type]: (state, action) => {
    console.log("in searchReducer. action", action);
    state.isLoadingSearch = true;
    state.selectedFilter = action.payload.selectedFilter;
  },
  [fetchSearchDoneAction.type]: (state, action) => {
    console.log("update state, action=", action);
    console.log("update state=", state);
    state.isLoadingSearch = false;
    const { hits, aggregation, aggregations } = action.payload;
    state.hits = hits;
    state.filters = aggregations;
    state.aggregation = aggregation;
  },
  [selectedFilterAction.type]: (state, action) => {
    console.log("in Reducer selectedFilter. action=", action);
    state.selectedFilter = { ...state.selectedFilter, ...action.payload };
  },
});

export const rootReducer = combineReducers({
  search: searchReducer,
});
