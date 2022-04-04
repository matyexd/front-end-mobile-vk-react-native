import React from 'react';
import {Home} from '@components/Home';
import {connect} from 'react-redux';

const HomeScreen = props => {
  const filterData = newsData => {
    const items = newsData.news.response.items;
    const groups = newsData.news.response.groups;
    const profiles = newsData.news.response.profiles;

    const filterData = items.map(item => {
      const obj = {
        source_id: 0,
        news_id: 0,
        nameOwner: '',
        imageOwner: '',
        news: {
          text: '',
          imagesNews: [],
          countLikes: 0,
          countComments: 0,
          date: '',
          dateUnixtime: 0,
        },
      };

      obj.source_id = item.source_id;
      obj.news_id = item.post_id;
      obj.news.text = item.text;
      obj.news.countLikes = item.likes.count;
      obj.news.countComments = item.comments.count;
      obj.news.date = new Date(item.date * 1000).toLocaleString();
      obj.dateUnixtime = item.date;

      // получаем имя и аватарку владельца поста
      if (obj.source_id < 0) {
        const ownerPostObject = groups.find(
          group => group.id == Math.abs(obj.source_id),
        );
        obj.nameOwner = ownerPostObject.name;
        obj.imageOwner = ownerPostObject.photo_200;
      } else {
        const ownerPostObject = profiles.find(
          profile => profile.id == obj.source_id,
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
            photo => photo.photo.sizes.pop().url,
          );
        }
      } else {
        if (item.attachments) {
          photos = item.attachments.filter(photo => {
            return photo.type == 'photo';
          });

          obj.news.imagesNews = photos.map(item => item.photo.sizes.pop().url);
        }
      }

      return obj;
    });

    return filterData;
  };

  return (
    <Home navigation={props.navigation} newsData={filterData(props.newsData)} />
  );
};

const mapStateToProps = store => {
  return {
    newsData: store.getNewsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
