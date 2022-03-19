import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {sp} from '../../../../utils/Responsive';

const UiText = ({
  children,
  size = 14,
  color = 'black',
  style,
  weight,
  ...props
}) => {
  const chosenFont = weight => {
    if (weight == 600) {
      return 'hk_grotesk_semibold';
    }
    if (weight == 400) {
      return 'hk_grotesk_regular';
    }
    if (weight == 500) {
      return 'hk_grotesk_medium';
    }
    if (weight == 700) {
      return 'hk_grotesk_bold';
    }

    return 'hk_grotesk_medium';
  };

  const textStyle = StyleSheet.flatten([
    size !== undefined && {fontSize: sp(size)},
    color !== undefined && {color: color},
    {fontFamily: chosenFont(weight)},
    style,
  ]);

  return (
    <Text style={textStyle} {...props}>
      {children}
    </Text>
  );
};

export default UiText;
