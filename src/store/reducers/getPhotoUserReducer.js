import {
  GET_PHOTO_FAIL,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_REQUEST,
} from '../actions/action';

const defaultState = {
  photos: [],
  error: '',
  isFetching: false,
};

export default function getPhotoUserReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return {...state, isFetching: true};
    case GET_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        photos: action.payload,
      };
    case GET_PHOTO_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
