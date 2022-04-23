import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_COMMENTS_REQUEST} from '@type/comments';
import {
  setComments,
  failGetComments,
  fetchGetCommentsAPI,
} from '@action/commentsAction';

function* getCommentsWorker({payload}) {
  try {
    const data = yield call(fetchGetCommentsAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      yield put(failGetComments(json.error.error_msg));
    } else {
      yield put(setComments(json));
    }
  } catch (e) {
    yield put(failGetComments(e));
  }
}

export function* getCommentsWatcher() {
  yield takeEvery(GET_COMMENTS_REQUEST, getCommentsWorker);
}
