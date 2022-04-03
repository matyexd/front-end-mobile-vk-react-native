import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  UiProfileInfo,
  UiDivider,
  UiImagePost,
  UiIcon,
  UiListElement,
  UiDots,
  UiText,
} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const PostItem = ({
  navigation,
  sourceId,
  datePost,
  textPost,
  countComments,
  countLike,
  nameOwnerPost,
  avatar,
  postPhotos,
}) => {
  console.log(postPhotos);
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

      {postPhotos ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Post')}>
          {textPost ? (
            <UiText color={'#C3B8E0'} style={{marginVertical: height(15)}}>
              {textPost}
            </UiText>
          ) : (
            <View style={{marginTop: height(10)}}></View>
          )}

          <View>
            {postPhotos.map((photo, index) => {
              return photo ? (
                <UiImagePost
                  key={index + 'id'}
                  src={photo}
                  style={{marginBottom: height(5)}}
                />
              ) : (
                <View key={index + 'id'}></View>
              );
            })}

            <View style={styles.postItem__dots}>
              <UiDots />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View></View>
      )}

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
  postItem__dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height(16),
  },
});
