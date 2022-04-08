import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ViewPropTypes, Text, View, TextInput} from 'react-native';
import {height, sp, width} from '@utils/Responsive';
import {UiIcon} from '@ui-kit/';

const UiInput = ({onChangeText, placeholder, iconName}) => {
  return (
    <View style={styles.searchSection}>
      <UiIcon
        iconName={iconName}
        iconColor="#8672BB"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#8672BB"
      />
    </View>
  );
};

UiInput.propTypes = {
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1F1736',
    borderRadius: height(28),
  },
  searchIcon: {
    paddingLeft: width(15),
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1736',
    borderRadius: height(28),
    paddingLeft: width(8),
    color: 'white',
    fontSize: sp(16),
    paddingVertical: height(5),
  },
});

export default UiInput;
