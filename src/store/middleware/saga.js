// eslint-disable-next-line object-curly-newline
import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  fetchSearchAction,
  fetchSearchDoneAction,
  fetchFacetsAction,
  fetchFacetsDoneAction,
  fetchSearchErrorAction,
} from "../reducer";

import { bioimages } from "./api";

function* fetchSearchSaga(action) {
  // console.log("SAGA started. action=", action);
  try {
    const { data } = yield call(bioimages.fetchSearch, action.payload);
    yield put(fetchSearchDoneAction(data));
  } catch (error) {
    yield put(fetchSearchErrorAction(error.message));
  }
}

function* fetchFacetsSaga(action) {
  try {
    const { data } = yield call(bioimages.fetchFacets, action.payload);
    yield put(fetchFacetsDoneAction(data));
  } catch (error) {
    yield put(fetchSearchErrorAction(error.message));
  }
}

function* watchFetchFacetsSaga() {
  yield takeLatest(fetchFacetsAction.type, fetchFacetsSaga);
}

function* watchFetchSearchSaga() {
  yield takeLatest(fetchSearchAction.type, fetchSearchSaga);
}

export function* rootSaga() {
  yield all([watchFetchSearchSaga(), watchFetchFacetsSaga()]);
}
