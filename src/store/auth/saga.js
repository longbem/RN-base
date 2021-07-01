import {all, takeLatest} from 'redux-saga/effects';
import TYPES from '../types';

function* login({type, payload}) {
  // service
  // console.log(type, payload);
  // const profile = yield call();
  // profileHash
  // !profileHash => call update
  // yield put({ type: 'SAVE_USER_INFO', profile })
}

function* logout({type, payload}) {}

export default function* authWatchers() {
  yield all([
    yield takeLatest(TYPES.LOG_IN, login),
    yield takeLatest(TYPES.LOG_OUT, logout),
  ]);
}
