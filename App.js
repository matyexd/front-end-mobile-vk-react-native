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
  TouchableWithoutFeedback,
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
  UiModalElementsButton,
  UiModalButton,
  UiText,
  UiInput,
  UiImageAvatar,
  UiImageGalleryItem,
  UiImageGallery,
  UiIcon,
  UiListElement,
  UiDivider,
} from '@ui-kit';
import Images from '@assets/images';
import {height, width} from './src/utils/Responsive';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
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

          <UiImageGallery>
            <UiImageGalleryItem src={Images.gallery1} />
            <UiImageGalleryItem src={Images.gallery5} />
            <UiImageGalleryItem src={Images.gallery2} />
            <UiImageGalleryItem src={Images.gallery3} />
            <UiImageGalleryItem src={Images.gallery4} />
          </UiImageGallery>

          <UiListElement iconName="chat" style={{marginBottom: height(15)}}>
            They never ask people to do things they wouldn’t do themselves.
          </UiListElement>
          <UiListElement iconName="cake" style={{marginBottom: height(15)}}>
            День рождения: 08 октября 1992
          </UiListElement>
        </View>

        <UiDivider style={{marginHorizontal: width(15)}} />
        <UiModalElementsButton iconName="duplicate">
          Поделиться
        </UiModalElementsButton>
        <UiDivider style={{marginHorizontal: width(15)}} />
        <UiModalButton>Отмена</UiModalButton>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: width(15),
  },
  app: {
    backgroundColor: '#2B2146',
    height: '100%',
  },
  button: {
    marginTop: 10,
    width: 200,
  },
});

export default App;
