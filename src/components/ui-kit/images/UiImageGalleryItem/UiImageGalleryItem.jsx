import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';

const UiImageGalleryItem = ({src, size, style}) => {
  const UiImageGalleryItem = StyleSheet.flatten([
    size !== undefined
      ? {width: width(size), height: width(size)}
      : {width: width(114), height: width(114)},
    {margin: 1, flexGrow: 0, flexBasis: size},
    style,
  ]);

  return <Image source={src} style={UiImageGalleryItem} />;
};

UiImageGalleryItem.propTypes = {};

export default UiImageGalleryItem;
