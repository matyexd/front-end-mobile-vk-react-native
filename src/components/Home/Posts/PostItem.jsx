import React, {useState, memo, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  UiProfileInfo,
  UiDivider,
  UiIcon,
  UiListElement,
  UiText,
  UiSlider,
} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import useSlider from '@hooks/useSlider';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PostItem = ({
  navigation,
  sourceId,
  newsId,
  datePost,
  textPost,
  countComments,
  countLike,
  userLike,
  nameOwnerPost,
  avatar,
  postPhotos,
  putNewsLike,
  deleteNewsLike,
  setCountLike,
  setIsLike,
}) => {
  const [imgActive, onchange] = useSlider();
  const [countLikeAfterFetching, setCountLikeAfterFetching] =
    useState(countLike);

  useEffect(() => {
    setCountLikeAfterFetching(countLike);
  }, [countLike]);

  const handleLike = () => {
    if (!userLike) {
      putNewsLike(sourceId, newsId);
      setCountLikeAfterFetching(countLikeAfterFetching + 1);
    } else {
      deleteNewsLike(sourceId, newsId);
      setCountLikeAfterFetching(countLikeAfterFetching - 1);
    }
  };

  const pressOnPost = (countLike, isLike) => {
    setIsLike(isLike ? true : false);
    setCountLike(countLike);
    navigation.navigate('Post', {
      sourceId: sourceId,
      newsId: newsId,
      datePost: datePost,
      textPost: textPost,
      countComments: countComments,
      countLike: countLike,
      userLike: userLike,
      nameOwnerPost: nameOwnerPost,
      avatar: avatar,
      postPhotos: postPhotos,
      putNewsLikeI() {
        putNewsLike(this.sourceId, this.newsId);
      },
      deleteNewsLikeI() {
        deleteNewsLike(this.sourceId, this.newsId);
      },
    });
  };

  return (
    <View style={styles.postItem}>
      <View style={styles.postInfo}>
        <UiProfileInfo
          style={styles.profileInfo}
          name={nameOwnerPost}
          addInfo={datePost}
          avatarSrc={avatar}
        />
        <UiIcon
          iconName={'dotsvertical'}
          iconColor="#8672BB"
          style={styles.iconStyle}
        />
      </View>

      <View>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => pressOnPost(countLike, userLike)}>
          {textPost.length > 0 && (
            <UiText color={'#C3B8E0'} style={{marginTop: height(15)}}>
              {textPost}
            </UiText>
          )}

          {postPhotos.length > 0 && (
            <UiSlider
              photos={postPhotos}
              imgActive={imgActive}
              onchange={onchange}
              style={{marginTop: height(15)}}
            />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.postItem__bottomMenu}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => handleLike()}>
            <UiListElement
              iconName={'likeicon'}
              textColor={userLike ? 'red' : 'white'}
              textWidth={600}
              iconStyle={userLike && {color: 'red'}}>
              {countLikeAfterFetching}
            </UiListElement>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => pressOnPost(countLike)}>
            <UiListElement
              iconName={'chat'}
              textColor={'white'}
              style={styles.commentStyle}
              textWidth={600}>
              {countComments}
            </UiListElement>
          </TouchableOpacity>
        </View>
        <View>
          <UiIcon iconName={'bookmark'} iconColor="white" />
        </View>
      </View>
      <UiDivider style={styles.dividerStyle} />
    </View>
  );
};

export default memo(PostItem);

const styles = StyleSheet.create({
  postItem: {
    marginTop: height(20),
  },
  postItem__bottomMenu: {
    marginTop: height(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    flexWrap: 'nowrap',
    marginRight: width(15),
  },
  iconStyle: {marginLeft: width(5)},
  commentStyle: {marginLeft: width(23)},
  dividerStyle: {marginTop: height(16)},
});
