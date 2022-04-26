import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  UiText,
  UiListElement,
  UiDivider,
  UiImagePost,
  UiProfileInfo,
  UiIcon,
} from '@ui-kit/';
import {height, width} from '@utils/Responsive';

const PostContent = ({postItem, addInfoPost, getAddInfoPost}) => {
  const handleLike = () => {
    if (!addInfoPost.userLike) {
      postItem.putNewsLikeI(postItem.sourceId, postItem.newsId);
    } else {
      postItem.deleteNewsLikeI(postItem.sourceId, postItem.newsId);
    }
    getAddInfoPost(postItem.sourceId, postItem.newsId);
  };

  return (
    <View>
      <View style={styles.postInfo}>
        <UiProfileInfo
          name={postItem.nameOwnerPost}
          addInfo={postItem.datePost}
          avatarSrc={postItem.avatar}
        />
      </View>

      <View style={styles.post}>
        {postItem.textPost.length > 0 && (
          <UiText color={'#C3B8E0'} style={{marginBottom: height(10)}}>
            {postItem.textPost}
          </UiText>
        )}
        <View>
          {postItem.postPhotos.map((photo, index) => (
            <UiImagePost
              key={photo + 'id' + index}
              src={photo}
              style={{marginVertical: height(2)}}
            />
          ))}
        </View>

        <View style={styles.bottomPostMenu}>
          <TouchableOpacity onPress={() => handleLike()}>
            <UiListElement
              iconName={'likeicon'}
              textColor={addInfoPost.userLike ? 'red' : 'white'}
              textWidth={600}
              iconStyle={addInfoPost.userLike && {color: 'red'}}>
              {addInfoPost.countLikes}
            </UiListElement>
          </TouchableOpacity>
          <UiIcon iconName="bookmark" iconColor="white" />
        </View>

        <View style={styles.countComments}>
          <UiText width={700} color="white">
            {addInfoPost.countComments} комментариев
          </UiText>
        </View>

        <UiDivider style={styles.dividerStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    marginTop: height(20),
  },
  bottomPostMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(15),
  },
  dividerStyle: {marginVertical: height(10)},
  countComments: {marginTop: height(10)},
  postInfo: {
    marginTop: height(20),
  },
});

export default PostContent;
