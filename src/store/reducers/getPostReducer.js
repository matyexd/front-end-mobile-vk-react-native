import {
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  GET_POST_REQUEST,
  CLEAR_STORE,
} from '@type/post';

const defaultState = {
  countLikes: 0,
  userLike: 0,
  countComments: 0,
  error: '',
  isLoading: false,
};

export default function getPostReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {...state, isFetching: true};
    case GET_POST_SUCCESS:
      return {
        ...state,
        countLikes: action.payload.response[0].likes.count,
        userLike: action.payload.response[0].likes.user_likes,
        countComments: action.payload.response[0].comments.count,
        isFetching: false,
      };
    case GET_POST_FAIL:
      return {...state, isFetching: false, error: action.payload};
    case CLEAR_STORE:
      return {
        countLikes: 0,
        userLike: 0,
        countComments: 0,
        error: '',
        isLoading: false,
      };
  }

  return state;
}
