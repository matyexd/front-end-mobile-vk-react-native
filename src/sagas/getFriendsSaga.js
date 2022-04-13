import {call, put, takeEvery} from 'redux-saga/effects';

const fetchGetFriendsAPI = () =>
  fetch('http://localhost:8081/bd/getFriends.json');

function* getFriendsWorker() {
  // try {
  //   const data = yield call(fetchGetFriendsAPI);
  //   const json = yield call(() => new Promise(res => res(data.json())));
  //   yield put(getFriendsSuccess(json));
  // } catch (e) {
  //   yield put(getFriendsFail(e));
  // }
}

export function* getFriendsWatcher() {
  // yield takeEvery(GET_FRIENDS_REQUEST, getFriendsWorker);
}
