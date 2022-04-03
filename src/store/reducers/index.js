import getInfoUserReducer from './getInfoUserReducer';
import {combineReducers} from 'redux';
import getPhotoUserReducer from './getPhotoUserReducer';
import getFriendsReducer from './getFriendsReducer';

export const rootReducers = combineReducers({
  getInfoUserReducer,
  getPhotoUserReducer,
  getFriendsReducer,
});
