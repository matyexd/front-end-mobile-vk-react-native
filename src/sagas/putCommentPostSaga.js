import {call, put, takeEvery} from 'redux-saga/effects';
import {PUT_COMMENT_REQUEST} from '@type/putComment';

import {
  fetchGetSentComment,
  fetchPutCommentPostAPI,
  setPutComment,
} from '@action/putCommentAction';

function* putCommentPostWorker({payload}) {
  try {
    const data = yield call(fetchPutCommentPostAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));

    const data1 = yield call(fetchGetSentComment, {
      ownerId: payload.ownerId,
      commentId: json.response.comment_id,
    });
    const json1 = yield call(() => new Promise(res => res(data1.json())));
    if (json1.error) {
      console.log(json.error);
    } else {
      yield put(setPutComment(json1));
    }
  } catch (e) {
    yield console.log(e);
  }
}

export function* putCommentPostWatcher() {
  yield takeEvery(PUT_COMMENT_REQUEST, putCommentPostWorker);
}
