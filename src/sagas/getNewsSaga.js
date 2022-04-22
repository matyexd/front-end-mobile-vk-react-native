import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_NEWS_FAIL,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  ADD_NEWS_LIKE,
} from '@type/news';
import {
  failGetNews,
  setNews,
  fetchGetNewsAPI,
  fetchPutLikeNewsAPI,
} from '@action/newsAction';

function* getNewsWorker({payload}) {
  try {
    const data = yield call(fetchGetNewsAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      yield put(failGetNews(json.error.error_msg));
    } else {
      yield put(setNews(json));
    }
  } catch (e) {
    yield put(failGetNews(e));
  }
}

export function* getNewsWatcher() {
  yield takeEvery(GET_NEWS_REQUEST, getNewsWorker);
}
