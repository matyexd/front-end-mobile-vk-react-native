import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity, ViewPropTypes} from 'react-native';
import {UiListElement} from '@ui-kit';
import {height, width} from '../../../../utils/Responsive';

const UiModalElementsButton = ({
  children,
  iconName,
  onPress,
  iconColor,
  textColor,
  style,
}) => {
  stylesButton = StyleSheet.flatten([
    {
      justifyContent: 'center',
      paddingVertical: height(15),
      backgroundColor: '#2B2146',
    },
    style,
  ]);

  return (
    <View>
      <TouchableOpacity style={stylesButton}>
        <UiListElement
          iconName={iconName}
          iconColor={iconColor}
          textSize={18}
          textColor={textColor}
          textWidth={600}>
          {children}
        </UiListElement>
      </TouchableOpacity>
    </View>
  );
};

UiModalElementsButton.propTypes = {
  children: PropTypes.node.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  style: ViewPropTypes.style,
};

export default UiModalElementsButton;
