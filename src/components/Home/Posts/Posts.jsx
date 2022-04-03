import React from 'react';
import {View} from 'react-native';
import {get} from 'react-native/Libraries/Utilities/PixelRatio';
import PostItem from './PostItem';

const Posts = ({navigation, newsData}) => {
  const news = newsData.news.response.items;
  const groups = newsData.news.response.groups;
  const profiles = newsData.news.response.profiles;

  const postImage = news.attachments;

  return (
    <View>
      {news.map(newPost => {
        const getDataOwnerPost = source_id => {
          if (source_id < 0) {
            const ownerPostObject = groups.find(
              group => group.id == Math.abs(source_id),
            );
            const nameOwnerPost = ownerPostObject.name;
            const avatar = ownerPostObject.photo_200;
            return {nameOwnerPost, avatar};
          } else {
            const ownerPostObject = profiles.find(
              profile => profile.id == source_id,
            );
            const nameOwnerPost =
              ownerPostObject.first_name + ' ' + ownerPostObject.last_name;
            const avatar = ownerPostObject.photo_100;
            return {nameOwnerPost, avatar};
          }
        };

        const getDatePost = datePost => {
          const date = new Date(datePost * 1000);
          return date.toLocaleString();
        };

        const getPostPhotos = newPost => {
          if (newPost.hasOwnProperty('copy_history')) {
            photos = newPost.copy_history[0].attachments.map(photo => {
              if (photo.type == 'photo') {
                return photo.photo.sizes.pop().url;
              } else {
                return '';
              }
            });
          } else {
            photos = newPost.attachments.map(photo => {
              if (photo.type == 'photo') {
                return photo.photo.sizes.pop().url;
              } else {
                return '';
              }
            });
          }

          return photos;
        };

        const {nameOwnerPost, avatar} = getDataOwnerPost(newPost.source_id);

        return (
          <PostItem
            key={newPost.post_id}
            navigation={navigation}
            nameOwnerPost={nameOwnerPost}
            datePost={getDatePost(newPost.date)}
            textPost={newPost.text}
            countComments={newPost.comments.count}
            countLike={newPost.likes.count}
            avatar={avatar}
            postPhotos={getPostPhotos(newPost)}
          />
        );
      })}
    </View>
  );
};

export default Posts;
