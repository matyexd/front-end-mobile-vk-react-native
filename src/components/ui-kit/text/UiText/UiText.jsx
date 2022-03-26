import React from 'react';
import {StyleSheet, Text, ViewPropTypes} from 'react-native';
import {sp} from '../../../../utils/Responsive';
import PropTypes from 'prop-types';

const UiText = ({
  children,
  size = 16,
  color = 'black',
  style,
  width,
  ...props
}) => {
  const chosenFont = width => {
    if (width == 600) {
      return 'hk_grotesk_semibold';
    }
    if (width == 400) {
      return 'hk_grotesk_regular';
    }
    if (width == 500) {
      return 'hk_grotesk_medium';
    }
    if (width == 700) {
      return 'hk_grotesk_bold';
    }

    return 'hk_grotesk_medium';
  };

  const textStyle = StyleSheet.flatten([
    size !== undefined && {fontSize: sp(size)},
    color !== undefined && {color: color},
    {fontFamily: chosenFont(width)},
    style,
  ]);

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

UiText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.number,
  style: ViewPropTypes.style,
};

export default UiText;
