import {
  CLEAR_STORE_PUT_COMMENT,
  PUT_COMMENT_REQUEST,
  PUT_COMMENT_SUCCESS,
} from '@type/putComment';

export const putComment = (ownerId, postId, message, commentReplyId) => ({
  type: PUT_COMMENT_REQUEST,
  payload: {
    ownerId: ownerId,
    postId: postId,
    message: message,
    commentReplyId: commentReplyId,
  },
});
export const setPutComment = payload => ({
  type: PUT_COMMENT_SUCCESS,
  payload: payload,
});

export const clearStorePutComment = () => ({
  type: CLEAR_STORE_PUT_COMMENT,
});

export const fetchPutCommentPostAPI = ({
  ownerId,
  postId,
  message,
  commentReplyId = '',
}) => {
  return fetch(
    'https://api.vk.com/method/wall.createComment?owner_id=' +
      ownerId +
      '&post_id=' +
      postId +
      '&message=' +
      message +
      '&reply_to_comment=' +
      commentReplyId +
      '&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
};

export const fetchGetSentComment = ({ownerId, commentId}) => {
  return fetch(
    'https://api.vk.com/method/wall.getComment?owner_id=' +
      ownerId +
      '&comment_id=' +
      commentId +
      '&extended=1&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
};
