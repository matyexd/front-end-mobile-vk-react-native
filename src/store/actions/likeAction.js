import {PUT_LIKE, DELETE_LIKE, SET_COUNT_LIKE} from '@type/likes';

export const putLike = (ownerId, itemId, type) => ({
  type: PUT_LIKE,
  payload: {ownerId: ownerId, itemId: itemId, type: type},
});

export const deleteLike = (ownerId, itemId, type) => ({
  type: DELETE_LIKE,
  payload: {ownerId: ownerId, itemId: itemId, type: type},
});

export const setLike = payload => ({
  type: SET_COUNT_LIKE,
  payload: payload,
});

export const fetchPutLikeAPI = ({ownerId, itemId, type}) => {
  return fetch(
    'https://api.vk.com/method/likes.add?type=' +
      type +
      '&owner_id=' +
      ownerId +
      '&item_id=' +
      Number(itemId) +
      '&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
};

export const fetchDeleteLikeAPI = ({ownerId, itemId, type}) => {
  return fetch(
    'https://api.vk.com/method/likes.delete?type=' +
      type +
      '&owner_id=' +
      ownerId +
      '&item_id=' +
      itemId +
      '&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
};
