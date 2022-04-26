import {
  GET_POST_REQUEST,
  GET_POST_FAIL,
  GET_POST_SUCCESS,
  CLEAR_STORE,
} from '@type/post';

export const getPost = (ownerId, postId) => ({
  type: GET_POST_REQUEST,
  payload: {
    ownerId: ownerId,
    postId: postId,
  },
});

export const failGetPost = payload => ({
  type: GET_POST_FAIL,
  payload: payload,
});

export const setPost = payload => ({
  type: GET_POST_SUCCESS,
  payload: payload,
});

export const clearPostStore = () => ({
  type: CLEAR_STORE,
});

export const fetchGetPostAPI = ({ownerId, postId}) => {
  return fetch(
    'https://api.vk.com/method/wall.getById?posts=' +
      ownerId +
      '_' +
      postId +
      '&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
};
