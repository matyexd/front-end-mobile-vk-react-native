import {all} from 'redux-saga/effects';
import {getFriendsWatcher} from './getFriendsSaga';
import {getInfoWatcher} from './getInfoUserSaga';
import {getPhotoWatcher} from './getPhotoUserSaga';
import {getNewsWatcher} from './getNewsSaga';

export function* rootSaga() {
  yield all([
    getInfoWatcher(),
    getPhotoWatcher(),
    getFriendsWatcher(),
    getNewsWatcher(),
  ]);
}
