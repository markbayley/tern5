// import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { fetchSearchAction, fetchSearchDoneAction } from "./redux";

import { bioimages } from "../api";

function* fetchSearchSaga(action) {
  console.log("SAGA started. action=", action);
  try {
    const { data } = yield call(bioimages.fetchSearch, action.payload);
    // console.log("SAGA started. data=", data);
    yield put(fetchSearchDoneAction(data));
  } catch (error) {
    // console.error("SAGA started. error=", error.message);
    yield put(fetchSearchDoneAction(error.message));
  }
}

function* watchFetchSearchSaga() {
  console.log("watchFetchSearchSaga fired.");
  yield takeLatest(fetchSearchAction.type, fetchSearchSaga);
}

export function* rootSaga() {
  yield all([watchFetchSearchSaga()]);
}
