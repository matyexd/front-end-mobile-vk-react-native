import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_INFO_REQUEST,
  getInfoUserSuccess,
  getInfoUserFail,
} from '../store/actions/action';

const fetchGetInfoUserAPI = () => fetch('http://localhost:8081/bd/json.json');

function* getInfoWorker() {
  try {
    const data = yield call(fetchGetInfoUserAPI);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(getInfoUserSuccess(json));
  } catch (e) {
    yield put(getInfoUserFail(e));
  }
}

export function* getInfoWatcher() {
  yield takeEvery(GET_INFO_REQUEST, getInfoWorker);
}
