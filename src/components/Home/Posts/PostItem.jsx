import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {
  UiProfileInfo,
  UiDivider,
  UiImagePost,
  UiIcon,
  UiListElement,
  UiDots,
  UiText,
} from '@ui-kit';
import {width, height} from '@utils/Responsive';

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
  const [imgActive, setImgActive] = useState(0);

  onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
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
        {/* activeOpacity={0.9}
        onPress={() => navigation.navigate('Post')}> */}
        {textPost.length > 0 && (
          <UiText color={'#C3B8E0'} style={{marginTop: height(15)}}>
            {textPost}
          </UiText>
        )}
        {postPhotos.length > 0 && (
          <View style={{marginTop: height(15)}}>
            <ScrollView
              onScroll={({nativeEvent}) => onchange(nativeEvent)}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled>
              {postPhotos.map((photo, index) => (
                <TouchableOpacity
                  key={index + 'id'}
                  activeOpacity={0.9}
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
                  }>
                  <UiImagePost
                    style={{marginHorizontal: width(5)}}
                    src={photo}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.postItem__dots}>
              {postPhotos.map((e, index) => (
                <Text
                  key={e}
                  style={
                    imgActive == index
                      ? {color: 'white', margin: 3}
                      : {color: '#8672BB', margin: 3}
                  }>
                  ●
                </Text>
              ))}
            </View>
          </View>
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
  postItem__dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height(16),
  },
});
