import React from 'react';
import PropTypes from 'prop-types';
import {UiText} from '../../text';
import {
  Button,
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
} from 'react-native';
import {height, width} from '../../../../utils/Responsive';

const UiButton = ({children, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <UiText color={'white'} weight={700}>
          {children}
        </UiText>
      </TouchableOpacity>
    </View>
  );
};

UiText.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(6),
    paddingHorizontal: width(32),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3B2D5F',
    backgroundColor: '#2B2146',
  },
});

export default UiButton;
