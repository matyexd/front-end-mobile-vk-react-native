import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAIL} from '@type/news';

export const getNews = startFrom => ({
  type: GET_NEWS_REQUEST,
  payload: startFrom,
});
export const setNews = payload => ({type: GET_NEWS_SUCCESS, payload: payload});
export const failGetNews = payload => ({type: GET_NEWS_FAIL, payload: payload});

export const fetchGetNewsAPI = (startFrom = '') =>
  fetch(
    'https://api.vk.com/method/newsfeed.get?filters=post&count=10&start_from=' +
      startFrom +
      '&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
