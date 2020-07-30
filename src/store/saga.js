// import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { fetchSearch, fetchSearchDone } from "./redux";

import { bioimages } from "../api";

function* fetchSearchSaga(action) {
  console.log("SAGA started. action=", action);
  try {
    const { data } = yield call(bioimages.fetchSearch, action.payload);
    // console.log("SAGA started. data=", data);
    yield put(fetchSearchDone(data));
  } catch (error) {
    // console.error("SAGA started. error=", error.message);
    yield put(fetchSearchDone(error.message));
  }
}

function* watchFetchSearchSaga(action) {
  console.log("watchFetchSearchSaga fired. action=", action);
  yield takeLatest(fetchSearch.type, fetchSearchSaga);
}

export function* rootSaga() {
  yield all([watchFetchSearchSaga()]);
}
