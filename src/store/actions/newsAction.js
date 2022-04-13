import {GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAIL} from '@type/news';

export const getNews = () => ({type: GET_NEWS_REQUEST});
export const setNews = payload => ({type: GET_NEWS_SUCCESS, payload: payload});
export const failGetNews = payload => ({type: GET_NEWS_FAIL, payload: payload});

export const fetchGetNewsAPI = () =>
  fetch(
    'https://api.vk.com/method/newsfeed.get?filters=post&count=10&v=5.131&access_token=' +
      process.env['API_TOKEN'],
  );
