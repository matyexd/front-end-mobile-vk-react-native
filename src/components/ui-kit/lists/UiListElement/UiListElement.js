import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, ViewPropTypes} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';
import {UiText, UiIcon} from '@ui-kit';

const UiListElement = ({
  children,
  iconName,
  iconSize = 22,
  iconColor = 'white',
  textColor = '#C3B8E0',
  textSize = 16,
  textWidth = 500,
  style,
}) => {
  const UiListElement = StyleSheet.flatten([{flexDirection: 'row'}, style]);

  return (
    <View style={UiListElement}>
      <UiIcon
        iconColor={iconColor}
        iconSize={sp(iconSize)}
        iconName={iconName}
      />
      <UiText
        color={textColor}
        width={textWidth}
        size={sp(textSize)}
        style={{marginLeft: width(10)}}>
        {children}
      </UiText>
    </View>
  );
};

UiListElement.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.number,
  textWidth: PropTypes.number,

  style: ViewPropTypes.style,
};

export default UiListElement;
