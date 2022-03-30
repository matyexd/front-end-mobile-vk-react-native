import {
  GET_INFO_FAIL,
  GET_INFO_SUCCESS,
  GET_INFO_REQUEST,
} from '../actions/action';

const defaultState = {
  userInfo: {
    userName: '',
    userNickname: '',
    userLocation: '',
    userOccupation: '',
    countFollowers: 0,
    countFollowing: 0,
    userStatus: '',
    userBirthDay: '',
    userEducation: '',
    contacts: '',
    userAvatar: '',
  },
  error: '',
  isFetching: false,
};

export default function getInfoUserReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_INFO_REQUEST:
      return {...state, isFetching: true};
    case GET_INFO_SUCCESS:
      const response = action.payload.response[0];
      return {
        ...state,
        isFetching: false,
        userInfo: {
          ...state.userInfo,
          userName: response.first_name,
          userNickname: response.screen_name,
          userLocation: response.city.title,
          userOccupation: response.occupation.name,
          countFollowers: response.followers_count,
          countFollowing: 0,
          userStatus: response.status,
          userBirthDay: response.bdate,
          userEducation: response.universities[0].name,
          contacts: response.site,
          userAvatar: response.photo_400_orig,
        },
      };
    case GET_INFO_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
