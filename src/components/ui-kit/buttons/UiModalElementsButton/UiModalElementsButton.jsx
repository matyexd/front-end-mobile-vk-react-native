import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {UiListElement} from '@ui-kit';
import {height, width} from '../../../../utils/Responsive';

const UiModalElementsButton = ({children, iconName, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <UiListElement
          iconName={iconName}
          textSize={18}
          textColor="white"
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
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    paddingVertical: height(15),
    paddingHorizontal: width(15),
    backgroundColor: '#2B2146',
  },
});

export default UiModalElementsButton;
