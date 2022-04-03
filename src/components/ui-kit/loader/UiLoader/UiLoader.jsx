import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const UiLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default UiLoader;
