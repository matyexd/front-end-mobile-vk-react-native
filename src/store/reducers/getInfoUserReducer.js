import {
  GET_INFO_FAIL,
  GET_INFO_SUCCESS,
  GET_INFO_REQUEST,
} from '../actions/action';

const defaultState = {
  userInfo: [],
  error: '',
  isFetching: false,
};

export default function getInfoUserReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {...state, isFetching: true};
    case GET_INFO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userInfo: action.payload,
      };
    case GET_INFO_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
