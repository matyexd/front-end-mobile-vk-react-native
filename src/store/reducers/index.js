import getInfoUserReducer from './getInfoUserReducer';
import {combineReducers} from 'redux';
import getPhotoUserReducer from './getPhotoUserReducer';

export const rootReducers = combineReducers({
  getInfoUserReducer,
  getPhotoUserReducer,
});
