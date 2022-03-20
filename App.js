/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {TOKEN} from '@env';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  UiButton,
  UiText,
  UiInput,
  UiImageAvatar,
  UiImageGalleryItem,
  UiImageGallery,
  UiIcon,
} from './src/components/ui-kit';
import Images from '@assets/images';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.button}>
          <UiButton>Текст</UiButton>
        </View>
        <UiText weight={400} size={14}>
          Привет
        </UiText>
        <UiText size={15} color={'white'}>
          Привет2
        </UiText>
        <UiImageAvatar src={Images.ava} size={100} />

        <UiIcon iconName="location-outline" iconSize={40} />
        <UiImageGallery>
          <UiImageGalleryItem src={Images.gallery1} />
          <UiImageGalleryItem src={Images.gallery5} />
          <UiImageGalleryItem src={Images.gallery2} />
          <UiImageGalleryItem src={Images.gallery3} />
          <UiImageGalleryItem src={Images.gallery4} />
        </UiImageGallery>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2146',
    height: 600,
  },
  button: {
    marginTop: 10,
    width: 200,
  },
});

export default App;
