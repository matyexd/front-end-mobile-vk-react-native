import React from 'react';
import PropTypes from 'prop-types';
import {UiText} from '../../text';
import {
  Button,
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ViewPropTypes,
} from 'react-native';
import {height, width, sp} from '../../../../utils/Responsive';
import UiImageGalleryItem from '../UiImageGalleryItem';

const UiImageGalley = ({children}) => {
  return <View style={styles.viewGallery}>{children}</View>;
};

UiImageGalley.propTypes = {};

export default UiImageGalley;

const styles = StyleSheet.create({
  viewGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
