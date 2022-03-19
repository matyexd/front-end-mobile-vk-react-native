import React from 'react';
import PropTypes from 'prop-types';
import {Button, View, StyleSheet, Pressable, Text} from 'react-native';

const UiButton = ({onPress, title, color}) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

UiButton.propTypes = {};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 30,
    borderColor: '#3B2D5F',
    backgroundColor: '#2B2146',
  },
  text: {
    fontSize: 14,
    fontFamily: 'hk_grotesk_bold',
    color: 'white',
  },
});

export default UiButton;
