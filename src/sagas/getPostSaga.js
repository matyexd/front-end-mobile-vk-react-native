import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_POST_REQUEST} from '@type/post';
import {fetchGetPostAPI, setPost, failGetPost} from '@action/postAction';

function* getPostWorker({payload}) {
  try {
    const data = yield call(fetchGetPostAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      yield put(failGetPost(json.error));
    } else {
      yield put(setPost(json));
    }
  } catch (e) {
    yield put(failGetPost(e));
  }
}

export function* getPostWatcher() {
  yield takeEvery(GET_POST_REQUEST, getPostWorker);
}
