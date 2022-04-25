import {SET_COUNT_LIKE, SET_LIKE, SET_IS_LIKE} from '@type/likes';
// import jsonComments from './json/jsonComments.json';

const defaultState = {
  countLikes: 0,
  isLike: false,
};

export default function getCountLikeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT_LIKE:
      return {...state, countLikes: action.payload.response.likes};
    case SET_LIKE:
      return {
        ...state,
        countLikes: action.payload,
      };
    case SET_IS_LIKE:
      return {
        ...state,
        isLike: action.payload,
      };
  }

  return state;
}
