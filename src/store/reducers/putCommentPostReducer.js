import {
  CLEAR_STORE_PUT_COMMENT,
  PUT_COMMENT_REQUEST,
  PUT_COMMENT_SUCCESS,
} from '@type/putComment';
// import jsonComments from './json/jsonComments.json';

const defaultState = {
  comment: {},
  commentId: 0,
};

export default function putCommentPostReducer(state = defaultState, action) {
  switch (action.type) {
    case PUT_COMMENT_SUCCESS:
      return {...state, comment: action.payload};
    case CLEAR_STORE_PUT_COMMENT:
      return {...state, comment: {}};
  }

  return state;
}
