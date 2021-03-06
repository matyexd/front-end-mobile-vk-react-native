import getInfoUserReducer from './getInfoUserReducer';
import {combineReducers} from 'redux';
import getPhotoUserReducer from './getPhotoUserReducer';
import getFriendsReducer from './getFriendsReducer';
import getNewsReducer from './getNewsReducer';
import getCommentsReducer from './getCommentsReducer';
import getGroupsUser from './getGroupsUser';
import getCountLikeReducer from './getCountLikeReducer';
import putCommentPostReducer from './putCommentPostReducer';
import getPostReducer from './getPostReducer';

export const rootReducers = combineReducers({
  getInfoUserReducer,
  getPhotoUserReducer,
  getFriendsReducer,
  getNewsReducer,
  getCommentsReducer,
  getGroupsUser,
  getCountLikeReducer,
  putCommentPostReducer,
  getPostReducer,
});
