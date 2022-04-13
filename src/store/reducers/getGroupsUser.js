import {
  GET_GROUPS_FAIL,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_REQUEST,
} from '@type/news';
import jsonGroups from './json/jsonGroup.json';

const defaultState = {
  groups: jsonGroups,
  error: '',
  isFetching: false,
};

export default function getGroupsUser(state = defaultState, action) {
  switch (action.type) {
    case GET_GROUPS_REQUEST:
      return {...state, isFetching: true};
    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        groups: action.payload,
        isFetching: false,
      };
    case GET_GROUPS_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
