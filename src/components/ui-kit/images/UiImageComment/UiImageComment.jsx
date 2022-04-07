import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, ViewPropTypes} from 'react-native';
import {height, width, sp, screenWidth} from '../../../../utils/Responsive';

const UiImageComment = ({src, style, ...props}) => {
  const styleImageComment = StyleSheet.flatten([
    {
      width: '50%',
      height: height(100),
    },
    style,
  ]);

  return <Image source={{uri: src}} style={styleImageComment} />;
};

UiImageComment.propTypes = {
  src: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
};

export default UiImageComment;
