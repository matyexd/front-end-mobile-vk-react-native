import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, ViewPropTypes} from 'react-native';
import {height, width, sp, screenWidth} from '../../../../utils/Responsive';

const UiImagePost = ({src, style, ...props}) => {
  const styleImagePost = StyleSheet.flatten([
    {
      borderRadius: height(16),
      height: height(200),
      width: screenWidth - width(40),
    },
    style,
  ]);

  return <Image source={{uri: src}} style={styleImagePost} {...props} />;
};

UiImagePost.propTypes = {
  src: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default UiImagePost;
