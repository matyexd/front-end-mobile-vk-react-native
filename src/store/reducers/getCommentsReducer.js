import {
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_FAIL,
} from '@type/comments';
// import jsonComments from './json/jsonComments.json';

const defaultState = {
  comments: [],
  error: '',
  isFetching: true,
};

export default function getCommentsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
      return {...state, isFetching: true};
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        isFetching: false,
      };
    case GET_COMMENTS_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
