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
import UiImageGalleryItem from '../UiImageGalleryItem';

const UiImageGallery = ({children, style}) => {
  const UiImageGallery = StyleSheet.flatten([
    {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    style,
  ]);

  return <View style={UiImageGallery}>{children}</View>;
};

UiImageGallery.propTypes = {};

export default UiImageGallery;
