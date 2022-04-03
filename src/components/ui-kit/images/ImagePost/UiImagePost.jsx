import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, ViewPropTypes} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';

const UiImagePost = ({src, style}) => {
  const styleImagePost = StyleSheet.flatten([
    {borderRadius: height(16), height: height(180), width: '100%'},
    style,
  ]);

  return <Image source={{uri: src}} style={styleImagePost} />;
};

UiImagePost.propTypes = {
  src: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default UiImagePost;
