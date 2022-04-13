import {
  GET_FRIENDS_FAIL,
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
} from '@type/friends';

const defaultState = {
  friends: {
    response: {
      count: 162,
      items: [
        {
          id: 132739827,
          deactivated: 'banned',
          first_name: 'Саша',
          last_name: 'Зайков',
          photo_200_orig: 'https://vk.com/images/deactivated_200.png',
          track_code:
            'e97e145dWBnXC5-1tSz6YGHIopuCNn00LQvoQamqcFNgcTl9xUE1cos9puG2L6xlUxM4RQ1fDiA0B_8vzQ',
        },
        {
          id: 144895275,
          first_name: 'Глеб',
          last_name: 'Кузнецов',
          can_access_closed: true,
          is_closed: false,
          city: {id: 99, title: 'Новосибирск'},
          photo_200_orig:
            'https://sun1-54.userapi.com/s/v1/ig2/-W7ziiLan_-HjurH6RG-udZ92c8Eh5BodNAaXlyomcbhbjgVWzcXCZcl2rJ78ZglHqgSd4Ekwo5KVjLDd1hIreej.jpg?size=200x200&quality=95&crop=232,1147,1305,1305&ava=1',
          track_code:
            '18d0f89aV6q5aLaL68PSwrwqrSEpeRurwmryjWNP_OZAIk8cKTo6weZQiIu-kdvOmvsy_aYQaL_bZuXjBw',
        },
        {
          id: 144951935,
          first_name: 'Дмитрий',
          last_name: 'Ремизов',
          can_access_closed: true,
          is_closed: false,
          city: {id: 144, title: 'Томск'},
          photo_200_orig:
            'https://sun1-24.userapi.com/s/v1/ig2/8eNfZl0uZtmrO03vjKDl3vdej0A6KP2gHZ3lJhMdtiwv9vkDR2cDIZZdjFPynK88FiZl_Z2OPaM3RHj4ZouKCuxR.jpg?size=200x200&quality=96&crop=11,26,575,575&ava=1',
          track_code:
            '1384fa7fsNnR-KtXUP3neKJwUth6ofurkgogGEi7D-BJy4VsnR3dso3Oxl5V-Od-h6rJBPXIiL-LBjd2LA',
        },
        {
          id: 145118553,
          first_name: 'Валерия',
          last_name: 'Бакалкина',
          can_access_closed: true,
          is_closed: false,
          city: {id: 108, title: 'Орск'},
          photo_200_orig:
            'https://sun1-97.userapi.com/s/v1/ig2/Q4gozvYv9ni1GxXAcxnbfvfpFByzETNr1xRlmqxnKRTTqBGCRJOM3Oy3bnPJOsCj03MuEyisSp3b2bHgMtireQtP.jpg?size=200x200&quality=95&crop=631,300,852,852&ava=1',
          track_code:
            'bd7ebe00zRmhpRdm4BAuzRTAnCA8cefvPIzUd3HI8eBp4G6cA76gcvmUJza2ECaZORYB-rMYlPslgMMZFQ',
        },
        {
          id: 147458068,
          first_name: 'Юрий',
          last_name: 'Можаров',
          can_access_closed: true,
          is_closed: false,
          city: {id: 144, title: 'Томск'},
          photo_200_orig: 'https://vk.com/images/camera_200.png',
          track_code:
            'b0f2470dy_jUNf_VBqTmrGWOuERMBGNS6uuGM9aHNofQp63kH1Wmk4kHkoEFprT8S10mlcNtEEbz55Fdsg',
        },
        {
          id: 152321936,
          first_name: 'Илья',
          last_name: 'Кузнецов',
          can_access_closed: true,
          is_closed: false,
          city: {id: 64, title: 'Кемерово'},
          photo_200_orig:
            'https://sun1-24.userapi.com/s/v1/ig2/pW0YY4-4skWakDU9xHVEOmD5NXKEXIlaa1gFtWMmsG3Ph4Mqled3AMSJiri0Gc6ZzdVOUrw5QXzJk3jH_Nlpt7yo.jpg?size=200x200&quality=95&crop=0,328,1207,1207&ava=1',
          track_code:
            'e598cb6bcuw9tH493lkzXDM_qKzkBsXwSW_EbPBWd5nqL1EO7d0fhzfXEz-OWGFWFeUzc2tvtuRQY9MClA',
        },
        {
          id: 154642424,
          first_name: 'Иззуддин',
          last_name: 'Абдусалам',
          can_access_closed: true,
          is_closed: false,
          city: {id: 64, title: 'Кемерово'},
          photo_200_orig:
            'https://sun1-21.userapi.com/s/v1/ig2/oe7RiZnI_DRzKACydfFuKeXmvsVIkRf988KWc_-RhqhO3XMuv7ZLaB21KRfx3WVVmiC_NMS9SjCppcwmJkvzn2rc.jpg?size=200x200&quality=96&crop=11,427,648,648&ava=1',
          track_code:
            'fdab2b37fIui8yVLoW0Y9yAevuvW7-4kw4lvvB_rwMl8NB5ZGEkR4KjDHEmhaB33CskkNlmGnTDahXjSew',
        },
      ],
    },
  },
  error: '',
  isFetching: false,
};

export default function getFriendsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_FRIENDS_REQUEST:
      return {...state, isFetching: true};
    case GET_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload.response.items,
        isFetching: false,
      };
    case GET_FRIENDS_FAIL:
      return {...state, isFetching: false, error: action.payload};
  }

  return state;
}
