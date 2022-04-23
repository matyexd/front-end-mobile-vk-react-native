import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_NEWS_REQUEST} from '@type/news';
import {failGetNews, setNews, fetchGetNewsAPI} from '@action/newsAction';

function* getNewsWorker({payload}) {
  try {
    const data = yield call(fetchGetNewsAPI, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    if (json.error) {
      yield put(failGetNews(json.error));
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
