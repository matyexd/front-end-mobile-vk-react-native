import React, {useState} from 'react';
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

const PostItem = ({
  navigation,
  source_id,
  news_id,
  datePost,
  textPost,
  countComments,
  countLike,
  nameOwnerPost,
  avatar,
  postPhotos,
}) => {
  const [imgActive, onchange] = useSlider();

  return (
    <View style={styles.postItem}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <UiProfileInfo
          style={{flex: 1, flexWrap: 'nowrap', marginRight: width(15)}}
          name={nameOwnerPost}
          addInfo={datePost}
          avatarSrc={avatar}
        />
        <UiIcon
          iconName={'dotsvertical'}
          iconColor="#8672BB"
          style={{marginLeft: width(5)}}
        />
      </View>

      <View>
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
            onPress={() =>
              navigation.navigate('Post', {
                source_id: source_id,
                news_id: news_id,
                datePost: datePost,
                textPost: textPost,
                countComments: countComments,
                countLike: countLike,
                nameOwnerPost: nameOwnerPost,
                avatar: avatar,
                postPhotos: postPhotos,
              })
            }
            style={{marginTop: height(15)}}
          />
        )}
      </View>

      <View style={styles.postItem__bottomMenu}>
        <View style={{flexDirection: 'row'}}>
          <UiListElement
            iconName={'likeicon'}
            textColor={'white'}
            textWidth={600}>
            {countLike}
          </UiListElement>
          <UiListElement
            iconName={'chat'}
            textColor={'white'}
            style={{marginLeft: width(23)}}
            textWidth={600}>
            {countComments}
          </UiListElement>
        </View>
        <View>
          <UiIcon iconName={'bookmark'} iconColor="white" />
        </View>
      </View>
      <UiDivider style={{marginTop: height(16)}} />
    </View>
  );
};

export default PostItem;

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
});
