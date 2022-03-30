import {all} from 'redux-saga/effects';
import {getInfoWatcher} from './getInfoUserSaga';

export function* rootSaga() {
  yield all([getInfoWatcher()]);
}
