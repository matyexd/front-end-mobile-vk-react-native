import React from 'react';
import PropTypes from 'prop-types';
import {UiText} from '../../text';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {height, width} from '../../../../utils/Responsive';

const UiButton = ({children, onPress, style}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <UiText color={'white'} weight={700}>
          {children}
        </UiText>
      </TouchableOpacity>
    </View>
  );
};

UiButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(9),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3B2D5F',
  },
});

export default UiButton;
