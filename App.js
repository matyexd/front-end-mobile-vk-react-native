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
import {UiButton, UiText} from './src/components/ui-kit';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <UiButton title={'Нажми меня'} />
        <UiText weight={400} size={14}>
          Привет
        </UiText>
        <UiText size={15}>Привет2</UiText>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
