import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {UiText} from '../../text';
import {
  Dimensions,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Modal,
} from 'react-native';
import {height} from '../../../../utils/Responsive';

const UiBottomPopup = ({children, closeModal, visible}) => {
  const renderOutsideTouchable = onTouch => {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) {
      return view;
    }
    return (
      <TouchableWithoutFeedback
        onPress={closeModal}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Modal animationType="fade" visible={visible} transparent={true}>
      <View style={styles.viewOutside}>
        {renderOutsideTouchable(visible)}
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  viewOutside: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000000AA',
  },
});

export default UiBottomPopup;
