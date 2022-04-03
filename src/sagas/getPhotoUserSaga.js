import {call, put, takeEvery} from 'redux-saga/effects';
// import {getPhotoUserSuccess, getPhotoUserFail} from '../store/actions/action';

// import {GET_PHOTO_REQUEST} from '@utils/consts';

const fetchGetPhotoUserAPI = () =>
  fetch('http://localhost:8081/bd/userPhoto.json');

function* getPhotoWorker() {
  // try {
  //   const data = yield call(fetchGetPhotoUserAPI);
  //   const json = yield call(
  //     () =>
  //       new Promise(res => {
  //         data.json().then(data => {
  //           photos = data.response.items;
  //           const payload = photos.map(photo => {
  //             return photo.sizes.pop().url;
  //           });
  //           res(payload);
  //         });
  //       }),
  //   );
  //   yield put(getPhotoUserSuccess(json));
  // } catch (e) {
  //   yield put(getPhotoUserFail(e));
  // }
}

export function* getPhotoWatcher() {
  // yield takeEvery(GET_PHOTO_REQUEST, getPhotoWorker);
}
