import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {height, width} from '@utils';
import {
  UiText,
  UiIcon,
  UiListElement,
  UiDivider,
  UiModalButton,
  UiModalElementsButton,
} from '@ui-kit';

const PopUpMenu = ({setShowModalMenu}) => {
  return (
    <View style={styles.viewMenu}>
      <View style={styles.buttonElements}>
        <UiModalElementsButton iconName={'share'} style={styles.shareStyle}>
          Поделиться
        </UiModalElementsButton>
        <UiDivider style={styles.dividerStyle} />
        <UiModalElementsButton
          iconName={'documentdublicate'}
          style={styles.copyStyle}>
          Скопировать ссылку
        </UiModalElementsButton>
      </View>
      <UiModalButton onPress={() => setShowModalMenu(false)}>
        Отмена
      </UiModalButton>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonElements: {
    backgroundColor: '#2B2146',
    marginBottom: 10,
  },
  shareStyle: {paddingLeft: width(10)},
  dividerStyle: {marginHorizontal: width(10)},
  copyStyle: {paddingLeft: width(10)},
});

export default PopUpMenu;
