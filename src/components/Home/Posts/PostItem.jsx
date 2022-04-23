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
}) => {
  console.log(countLike);
  const [imgActive, onchange] = useSlider();
  const [isLikes, setIsLikes] = useState(userLike);
  const [countLikeAfterFetching, setCountLikeAfterFetching] =
    useState(countLike);

  useEffect(() => {
    setCountLikeAfterFetching(countLike);
  }, [countLike]);

  const handleLike = () => {
    if (!isLikes) {
      setIsLikes(true);
      putNewsLike(sourceId, newsId);
      setCountLikeAfterFetching(countLikeAfterFetching + 1);
    } else {
      setIsLikes(false);
      deleteNewsLike(sourceId, newsId);
      setCountLikeAfterFetching(countLikeAfterFetching - 1);
    }
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
          onPress={() =>
            navigation.navigate('Post', {
              sourceId: sourceId,
              newsId: newsId,
              datePost: datePost,
              textPost: textPost,
              countComments: countComments,
              countLike: countLike,
              nameOwnerPost: nameOwnerPost,
              avatar: avatar,
              postPhotos: postPhotos,
            })
          }>
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
              textColor={'white'}
              textWidth={600}
              iconStyle={isLikes && {backgroundColor: 'white'}}>
              {countLikeAfterFetching}
            </UiListElement>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('Post', {
                sourceId: sourceId,
                newsId: newsId,
                datePost: datePost,
                textPost: textPost,
                countComments: countComments,
                countLike: countLike,
                nameOwnerPost: nameOwnerPost,
                avatar: avatar,
                postPhotos: postPhotos,
              })
            }>
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
