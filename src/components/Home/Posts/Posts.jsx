import React from 'react';
import {View} from 'react-native';
import PostItem from './PostItem';

const Posts = ({navigation, newsData}) => {
  return (
    <View>
      {newsData.map(post => {
        return (
          <PostItem
            key={post.sourceId + '_' + post.newsId}
            navigation={navigation}
            sourceId={post.sourceId}
            newsId={post.newsId}
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
