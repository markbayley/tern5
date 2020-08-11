// import { all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { all, takeLatest, put, call } from "redux-saga/effects";
import { fetchSearchAction, fetchSearchDoneAction } from "../reducer";

import { bioimages } from "./api";

function* fetchSearchSaga(action) {
  // console.log("SAGA started. action=", action);
  try {
    const { data } = yield call(bioimages.fetchSearch, action.payload);
    yield put(fetchSearchDoneAction(data));
  } catch (error) {
    yield put(fetchSearchDoneAction(error.message));
  }
}

function* watchFetchSearchSaga() {
  yield takeLatest(fetchSearchAction.type, fetchSearchSaga);
}

export function* rootSaga() {
  yield all([watchFetchSearchSaga()]);
}
