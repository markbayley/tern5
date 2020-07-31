import { createAction, combineReducers, createReducer } from "@reduxjs/toolkit";

// const fetchFeatures = createAction('FETCH_FEATURES');
export const fetchSearchAction = createAction("FETCH_SEARCH");
export const fetchSearchDoneAction = createAction("FETCH_SEARCH_DONE");

const initialState = {
  isLoadingSearch: true,
  hits: [],
  filters: {},
  aggregation: null,
};

const searchReducer = createReducer(initialState, {
  [fetchSearchAction.type]: (state, action) => {
    console.log("in searchReducer. fetchSearch.type", fetchSearchAction.type);
    state.isLoadingSearch = true;
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
});

export const rootReducer = combineReducers({
  search: searchReducer,
});
