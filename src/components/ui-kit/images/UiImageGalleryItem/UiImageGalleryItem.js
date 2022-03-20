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

const UiImageGalleryItem = ({src, size}) => {
  const UiImageGalleyItem = StyleSheet.flatten([
    size !== undefined
      ? {width: width(size), height: width(size)}
      : {width: width(113), height: width(113)},
    {margin: 1, flexGrow: 0, flexBasis: size},
  ]);

  return <Image source={src} style={UiImageGalleyItem} />;
};

UiImageGalleryItem.propTypes = {};

export default UiImageGalleryItem;
