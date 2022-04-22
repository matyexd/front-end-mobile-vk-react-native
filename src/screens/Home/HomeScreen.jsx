import React, {useEffect, useState} from 'react';
import {Home} from '@components/Home';
import {connect} from 'react-redux';
import {getNews, putNewsLike} from '@action/newsAction';
import {deleteLike, putLike} from '@action/likeAction';

const HomeScreen = props => {
  const filterData = newsData => {
    if (newsData.isFetching) {
      return {newsData: [], isFetching: true, error: false, nextFrom: ''};
    }
    if (newsData.error) {
      return {
        newsData: [],
        isFetching: false,
        error: newsData.error,
        nextFrom: '',
      };
    }
    if (Object.keys(newsData.news).length == 0) {
      return {
        newsData: [],
        isFetching: false,
        error: 'Нету ничего',
        nextFrom: '',
      };
    }

    const items = newsData.news.response.items;
    const groups = newsData.news.response.groups;
    const profiles = newsData.news.response.profiles;
    const nextFrom = newsData.news.response.next_from;

    const filterData = items.map(item => {
      const obj = {
        sourceId: 0,
        newsId: 0,
        nameOwner: '',
        imageOwner: '',
        news: {
          text: '',
          imagesNews: [],
          countLikes: 0,
          userLike: 0,
          countComments: 0,
          date: '',
          dateUnixtime: 0,
        },
      };

      obj.sourceId = item.source_id;
      obj.newsId = item.post_id;
      obj.news.text = item.text;
      obj.news.countLikes = item.likes?.count;
      obj.news.userLike = item.likes?.user_likes;
      obj.news.countComments = item.comments?.count;
      obj.news.date = new Date(item.date * 1000).toLocaleString();
      obj.dateUnixtime = item.date;

      // получаем имя и аватарку владельца поста
      if (obj.sourceId < 0) {
        const ownerPostObject = groups.find(
          group => group.id == Math.abs(obj.sourceId),
        );
        obj.nameOwner = ownerPostObject.name;
        obj.imageOwner = ownerPostObject.photo_200;
      } else {
        const ownerPostObject = profiles.find(
          profile => profile.id == obj.sourceId,
        );
        obj.nameOwner =
          ownerPostObject.first_name + ' ' + ownerPostObject.last_name;
        obj.imageOwner = ownerPostObject.photo_100;
      }

      // получаем массив фото поста

      if (item.copy_history) {
        if (item.copy_history[0].attachments) {
          photos = item.copy_history[0].attachments.filter(photo => {
            return photo.type == 'photo';
          });

          obj.news.imagesNews = photos.map(
            photo => photo.photo.sizes[photo.photo.sizes.length - 1].url,
          );
        }
      } else {
        if (item.attachments) {
          photos = item.attachments.filter(photo => {
            return photo.type == 'photo';
          });

          obj.news.imagesNews = photos.map(
            item => item.photo.sizes[item.photo.sizes.length - 1].url,
          );
        }
      }

      return obj;
    });

    return {
      newsData: filterData,
      isFetching: false,
      error: false,
      nextFrom: nextFrom,
    };
  };

  // Подгрузка новых данных

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPostFrom, setNextPostFrom] = useState('');
  // const [postData, setPostData] = useState({sourceId: null, postId: null});
  // const [newCountLikes, setNewCountLikes] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    props.getNews();
  }, []);

  useEffect(() => {
    const filterPosts = filterData(props.newsData);
    if (!filterPosts.isFetching) {
      setData(data.concat(filterPosts.newsData));
      setIsLoading(false);
      setNextPostFrom(filterPosts.nextFrom);
    }
  }, [props.newsData]);

  const handleLoadMore = () => {
    setIsLoading(true);
    props.getNews(nextPostFrom);
  };

  // поставить лайк или удалить лайк

  // ПОДГРУЗКА ЛАЙКОВ С СЕРВЕРА (МЕДЛЕННО)
  // useEffect(() => {
  //   if (postData.sourceId && postData.postId) {
  //     const editObject = obj => ({
  //       ...obj,
  //       news: {...obj.news, countLikes: props.countLikePost.countLikes},
  //     });

  //     setData(() => {
  //       console.log('123');
  //       let indexEl = data.findIndex(item => item.newsId == postData.postId);
  //       const arr = [
  //         ...data.slice(0, indexEl),
  //         editObject(data[indexEl]),
  //         ...data.slice(indexEl + 1),
  //       ];
  //       console.log('d');
  //       console.log(arr);
  //       return arr;
  //     });
  //     console.log('df');
  //   }
  // }, [props.countLikePost]);

  const handleAddLike = (sourceId, newsId) => {
    props.putLike(sourceId, newsId, 'post');
    // setPostData({sourceId: sourceId, postId: newsId});
  };

  const handleDeleteLike = (sourceId, newsId) => {
    props.deleteLike(sourceId, newsId, 'post');
    // setPostData({sourceId: sourceId, postId: newsId});
  };

  return (
    <Home
      navigation={props.navigation}
      data={data}
      isLoading={isLoading}
      handleLoadMore={() => handleLoadMore()}
      putLike={handleAddLike}
      deleteLike={handleDeleteLike}
    />
  );
};

const mapStateToProps = store => {
  return {
    newsData: store.getNewsReducer,
    countLikePost: store.getCountLikeReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNews: startFrom => dispatch(getNews(startFrom)),
    putLike: (ownerId, itemId, type) =>
      dispatch(putLike(ownerId, itemId, type)),
    deleteLike: (ownerId, itemId, type) =>
      dispatch(deleteLike(ownerId, itemId, type)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
