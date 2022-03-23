import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {UiBottomPopup, UiIcon} from './ui-kit';

const TopIcon = () => {
  return (
    <View style={styles.topIcon}>
      <UiIcon iconName="arrowleft" iconColor="white" />

      <TouchableOpacity onPress={() => setShowModalMenu(true)}>
        <UiIcon
          iconName="dotsvertical"
          iconColor="white"
          style={[
            {
              transform: [{rotate: '90deg'}],
            },
          ]}
        />
      </TouchableOpacity>

      <UiBottomPopup visible={showModalMenu} onTouchOutside={setShowModalMenu}>
        <PopUpMenu setShowModalMenu={setShowModalMenu} />
      </UiBottomPopup>
    </View>
  );
};

styles = StyleSheet.create({
  topIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TopIcon;
