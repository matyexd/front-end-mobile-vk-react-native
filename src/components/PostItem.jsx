import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  UiProfileInfo,
  UiDivider,
  UiImagePost,
  UiIcon,
  UiListElement,
  UiDots,
} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const PostItem = () => {
  return (
    <View style={styles.postItem}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <UiProfileInfo
          name={'Kat Williams'}
          addInfo={'1h ago'}
          avatarSrc={images.ava}
        />
        <UiIcon
          iconName={'dotsvertical'}
          iconColor="#8672BB"
          style={{marginLeft: width(5)}}
        />
      </View>
      <View style={{marginTop: height(16)}}>
        <UiImagePost src={images.gallery5} />
        <View style={styles.postItem__dots}>
          <UiDots />
        </View>
      </View>
      <View style={styles.postItem__bottomMenu}>
        <View style={{flexDirection: 'row'}}>
          <UiListElement
            iconName={'likeicon'}
            textColor={'white'}
            textWidth={600}>
            8,998
          </UiListElement>
          <UiListElement
            iconName={'chat'}
            textColor={'white'}
            style={{marginLeft: width(23)}}
            textWidth={600}>
            145
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
