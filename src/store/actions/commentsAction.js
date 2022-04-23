import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_FAIL,
  GET_COMMENTS_SUCCESS,
  CLEAR_STORE,
} from '@type/comments';

export const getComments = ({ownerId, postId, startCommentId}) => ({
  type: GET_COMMENTS_REQUEST,
  payload: {ownerId, postId, startCommentId},
});
export const setComments = payload => ({
  type: GET_COMMENTS_SUCCESS,
  payload: payload,
});
export const failGetComments = payload => ({
  type: GET_COMMENTS_FAIL,
  payload: payload,
});

export const clearStore = () => ({
  type: CLEAR_STORE,
});

export const fetchGetCommentsAPI = ({ownerId, postId, startCommentId = ''}) =>
  fetch(
    'https://api.vk.com/method/wall.getComments?owner_id=' +
      ownerId.toString() +
      '&post_id=' +
      postId +
      '&need_likes=1&start_comment_id=' +
      startCommentId.toString() +
      '&count=21&thread_items_count=10&extended=1&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
