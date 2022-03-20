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
  TextInput,
  Image,
  ViewPropTypes,
} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';

const UiImageAvatar = ({src, size = 150, style, ...props}) => {
  const imageAvatar = StyleSheet.flatten([
    {width: width(size), height: width(size)},
    {borderRadius: width(size) / 2},
    style,
  ]);

  return <Image source={src} style={imageAvatar} />;
};

UiImageAvatar.propTypes = {
  src: PropTypes.number.isRequired,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};

export default UiImageAvatar;
