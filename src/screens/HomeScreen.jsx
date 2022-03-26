import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
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

import PostItem from '../components/PostItem';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          {/* <UiProfileInfo
            name={'Kat Williams'}
            addInfo={'1h ago'}
            avatarSrc={images.ava}
          />
          <UiImagePost src={images.gallery5} /> */}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <UiIcon iconName={'menu'} iconColor={'white'} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <UiIcon iconName={'search'} iconColor={'white'} />
              <UiIcon
                style={{marginLeft: width(20)}}
                iconName={'alert'}
                iconColor={'white'}
              />
            </View>
          </View>

          <PostItem />
          <PostItem />
          <PostItem />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2146',
    height: '100%',
  },
  container: {
    paddingHorizontal: width(15),
    paddingTop: height(20),
  },
});

export default HomeScreen;
