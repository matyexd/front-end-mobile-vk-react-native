import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {UiIcon} from '@ui-kit/';
import {height} from '@utils/Responsive';

const UiScrollButton = ({onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, style]}>
      <UiIcon
        iconName="chevronup"
        iconColor="white"
        style={[
          {
            transform: [{rotate: '180deg'}],
          },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: height(15),
    backgroundColor: '#1F1736',
    borderRadius: height(50),
  },
});

export default UiScrollButton;
