import {SET_COUNT_LIKE} from '@type/likes';
// import jsonComments from './json/jsonComments.json';

const defaultState = {
  countLikes: 0,
};

export default function getCountLikeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COUNT_LIKE:
      return {...state, countLikes: action.payload.response.likes};
  }

  return state;
}
