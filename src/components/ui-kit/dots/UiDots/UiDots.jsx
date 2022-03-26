import {height, width} from '@utils/Responsive';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const UiDots = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.dotsElement}></View>
      <View style={styles.dotsElement}></View>
      <View style={styles.dotsElement}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotsElement: {
    borderRadius: width(3),
    width: height(6),
    height: height(6),
    backgroundColor: '#8672BB',
    marginHorizontal: width(5),
  },
});

export default UiDots;
