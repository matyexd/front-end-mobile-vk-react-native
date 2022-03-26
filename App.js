/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import {store} from './src/store';

import {ProfileScreen, HomeScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
