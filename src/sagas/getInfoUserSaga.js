import {call, put, takeEvery} from 'redux-saga/effects';
// import {getInfoUserFail, getInfoUserSuccess} from '../store/actions/action';

// import {GET_INFO_REQUEST} from '@utils/consts';

const fetchGetInfoUserAPI = () =>
  fetch('http://localhost:8081/bd/userInfo.json');

function* getInfoWorker() {
  // try {
  //   const data = yield call(fetchGetInfoUserAPI);
  //   const json = yield call(() => new Promise(res => res(data.json())));
  //   yield put(getInfoUserSuccess(json));
  // } catch (e) {
  //   yield put(getInfoUserFail(e));
  // }
}

export function* getInfoWatcher() {
  // yield takeEvery(GET_INFO_REQUEST, getInfoWorker);
}
