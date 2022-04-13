import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  View,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  ViewPropTypes,
  Animated,
  FlatList,
} from 'react-native';
import {UiText} from '@ui-kit';
import {height, width} from '../../../../utils/Responsive';

const UiModalButton = ({children, onPress}) => {
  const Animate = Animated.createAnimatedComponent(FlatList);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <UiText color="white" width={700} size={18}>
          {children}
        </UiText>
      </TouchableOpacity>
    </View>
  );
};

UiModalButton.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: height(15),
    backgroundColor: '#2B2146',
    borderRadius: 15,
  },
});

export default UiModalButton;
