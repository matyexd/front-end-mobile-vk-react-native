import {GET_NEWS_FAIL, GET_NEWS_SUCCESS, GET_NEWS_REQUEST} from '@type/news';

const defaultState = {
  news: {},
  error: '',
  isFetching: true,
};

export default function getNewsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {...state, isFetching: true};
    case GET_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        isFetching: false,
      };
    case GET_NEWS_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
