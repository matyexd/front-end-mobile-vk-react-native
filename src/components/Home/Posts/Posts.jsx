import React from 'react';
import {View} from 'react-native';
import PostItem from './PostItem';

const Posts = ({navigation, newsData}) => {
  return (
    <View>
      {newsData.map(post => {
        return (
          <PostItem
            key={post.source_id + '_' + post.news_id}
            navigation={navigation}
            source_id={post.source_id}
            news_id={post.news_id}
            nameOwnerPost={post.nameOwner}
            datePost={post.news.date}
            textPost={post.news.text}
            countComments={post.news.countComments}
            countLike={post.news.countLikes}
            avatar={post.imageOwner}
            postPhotos={post.news.imagesNews}
          />
        );
      })}
    </View>
  );
};

export default Posts;
