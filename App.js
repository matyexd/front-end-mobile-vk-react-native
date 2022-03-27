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

import {
  ProfileScreen,
  HomeScreen,
  SettingScreen,
  FriendsScreen,
  SearchFriendsScreen,
} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './src/components';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={props => <CustomDrawer {...props} />}
          screenOptions={{
            drawerStyle: styles.drawerStyle,
          }}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Friends"
            component={FriendsScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchFriends"
            component={SearchFriendsScreen}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#2B2146',
  },
});

export default App;
