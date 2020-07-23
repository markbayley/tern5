import { createAction, combineReducers, createReducer } from '@reduxjs/toolkit';


// const fetchFeatures = createAction('FETCH_FEATURES');
export const fetchSearch = createAction('FETCH_SEARCH');
export const fetchSearchDone = createAction('FETCH_SEARCH_DONE');

const initialState = {
    isLoadingSearch: true,
    hits: [],
    filters: {},
    aggregation: null,
}

const searchReducer = createReducer(initialState, {
    [fetchSearch.type]: (state, action) => {
        state.isLoadingSearch = true;
    },
    [fetchSearchDone.type]: (state, action) => {
        console.log('update state', action);
        state.isLoadingSearch = false;
        const { hits, aggregation, aggregations } = action.payload;
        state.hits = hits;
        state.filters = aggregations;
        state.aggregation = aggregation;
    }
})


export const rootReducer = combineReducers({
    search: searchReducer
})
