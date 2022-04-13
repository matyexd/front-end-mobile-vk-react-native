import {GET_INFO_FAIL, GET_INFO_SUCCESS, GET_INFO_REQUEST} from '@type/profile';

const defaultState = {
  // userInfo: {
  //   userName: '',
  //   userNickname: '',
  //   userLocation: '',
  //   userOccupation: '',
  //   countFollowers: 0,
  //   countFollowing: 0,
  //   userStatus: '',
  //   userBirthDay: '',
  //   userEducation: '',
  //   contacts: '',
  //   userAvatar: '',
  // },
  userData: {
    response: [
      {
        id: 139891543,
        first_name: 'Матвей',
        last_name: 'Мамочкин',
        can_access_closed: true,
        is_closed: false,
        screen_name: 'mmatvey',
        bdate: '19.6.2002',
        city: {id: 144, title: 'Томск'},
        country: {title: 'Россия', id: 1},
        photo_400_orig:
          'https://sun1-16.userapi.com/s/v1/ig2/7fJotgug8fSZibOWtzp4QaPKOXJkdlo1MekQFcYxzcEWBC2IyNiQB3kEH4PotLMzkGTtHJj-kWgvWOQB56YrFsse.jpg?size=400x400&quality=96&crop=50,0,495,495&ava=1',
        has_photo: 1,
        site: 'https://t.me/GredMatv',
        status: 'почему',
        followers_count: 63,
        occupation: {
          id: 852,
          name: 'ТУСУР (бывш. ТАСУР, ТИАСУР)',
          type: 'university',
        },
        career: [],
        universities: [
          {
            chair: 2050407,
            chair_name: 'Программная инженерия',
            city: 144,
            country: 1,
            faculty: 118835,
            faculty_name: 'Факультет систем управления',
            id: 852,
            name: 'ТУСУР (бывш. ТАСУР, ТИАСУР)',
          },
        ],
      },
    ],
  },
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
        userInfo: payload.action,
        isFetching: false,
      };
    case GET_INFO_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
