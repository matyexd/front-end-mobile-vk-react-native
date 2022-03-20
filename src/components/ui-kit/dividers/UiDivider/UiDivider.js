import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewPropTypes} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';
import {UiText, UiIcon} from '@ui-kit';

const UiDivider = ({width = 1, color = '#3B2D5F', style}) => {
  const UiDivider = StyleSheet.flatten([
    {
      borderBottomColor: color,
      borderBottomWidth: width,
    },
    style,
  ]);

  return <View style={UiDivider} />;
};

UiDivider.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  style: ViewPropTypes.style,
};

export default UiDivider;
