import getInfoUserReducer from './getInfoUserReducer';
import {combineReducers} from 'redux';
import getPhotoUserReducer from './getPhotoUserReducer';
import getFriendsReducer from './getFriendsReducer';
import getNewsReducer from './getNewsReducer';

export const rootReducers = combineReducers({
  getInfoUserReducer,
  getPhotoUserReducer,
  getFriendsReducer,
  getNewsReducer,
});
