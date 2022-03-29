import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';

const UiImageGalleryItem = ({src, size, style}) => {
  const UiImageGalleryItem = StyleSheet.flatten([
    size !== undefined
      ? {width: height(size), height: height(size)}
      : {width: height(131), height: height(131)},
    {margin: 1, flexGrow: 0, flexBasis: size},
    style,
  ]);

  return <Image source={src} style={UiImageGalleryItem} />;
};

UiImageGalleryItem.propTypes = {};

export default UiImageGalleryItem;
