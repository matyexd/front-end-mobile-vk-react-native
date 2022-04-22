import {call, put, takeEvery} from 'redux-saga/effects';
import {DELETE_LIKE, PUT_LIKE} from '@type/likes';
import {
  fetchDeleteLikeAPI,
  fetchPutLikeAPI,
  fetchGetLikesItemAPI,
  setLike,
} from '@action/likeAction';

// Поставить лайк

function* putLikeWorker({payload}) {
  try {
    const data = yield call(fetchPutLikeAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      console.log(json.error);
    } else {
      yield put(setLike(json));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* putLikeWatcher() {
  yield takeEvery(PUT_LIKE, putLikeWorker);
}

// Удалить лайк

function* deleteLikeWorker({payload}) {
  try {
    const data = yield call(fetchDeleteLikeAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      console.log(json.error);
    } else {
      yield put(setLike(json));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* deleteLikeWatcher() {
  yield takeEvery(DELETE_LIKE, deleteLikeWorker);
}
