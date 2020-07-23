import { all, takeLatest, put, call } from 'redux-saga/effects';
import { fetchSearch, fetchSearchDone } from './redux';

import { bioimages } from './api';


function* fetchSearchSaga(action) {
    console.log("SAGA started");
    try {
        const { data } = yield call(bioimages.fetchSearch, action.payload);
        yield put(fetchSearchDone(data));
    } catch (error) {
        yield put(fetchSearchDone(error.message));
    }
}

function* watchFetchSearchSaga() {
    yield takeLatest(fetchSearch.type, fetchSearchSaga);
}

export function* rootSaga() {
    yield all([
        watchFetchSearchSaga(),
    ]);
};