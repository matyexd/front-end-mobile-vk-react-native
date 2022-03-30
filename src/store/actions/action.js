export const GET_INFO_REQUEST = 'GET_INFO_REQUEST';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';
export const GET_INFO_FAIL = 'GET_INFO_FAIL';

export const getInfoUserRequest = () => ({
  type: GET_INFO_REQUEST,
});
export const getInfoUserSuccess = payload => ({
  type: GET_INFO_SUCCESS,
  payload,
});
export const getInfoUserFail = payload => ({type: GET_INFO_FAIL, payload});
