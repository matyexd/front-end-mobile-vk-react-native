import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const UiLoader = ({style}) => {
  const loaderStyles = StyleSheet.flatten([
    {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    style,
  ]);

  return (
    <View style={loaderStyles}>
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default UiLoader;
