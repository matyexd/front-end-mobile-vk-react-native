import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UiIcon, UiImageAvatar, UiText} from '@ui-kit';
import {width, height, sp} from '@utils';

const Drawer = ({navigation, userInfo, ...props}) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileInfo}>
        <UiImageAvatar src={userInfo.userAvatar} size={80} />
        <View style={styles.textInfo}>
          <UiText color={'white'} width={700}>
            {userInfo.userName}
          </UiText>
          <UiText color={'#8672BB'} size={12}>
            @{userInfo.userNickname}
          </UiText>
        </View>
      </View>

      <View>
        <DrawerItem
          label="Мой профиль"
          onPress={() => navigation.navigate('Profile')}
          icon={() => <UiIcon iconName="profileicon" iconColor="white" />}
          labelStyle={styles.drawerItem}
        />
        <DrawerItem
          label="Друзья"
          onPress={() => navigation.navigate('Friends')}
          icon={() => <UiIcon iconName="group" iconColor="white" />}
          labelStyle={styles.drawerItem}
        />
        <DrawerItem
          label="Поиск"
          onPress={() => navigation.navigate('Search')}
          icon={() => <UiIcon iconName="search" iconColor="white" />}
          labelStyle={styles.drawerItem}
        />
        <DrawerItem
          label="Настройки"
          onPress={() => navigation.navigate('Setting')}
          icon={() => <UiIcon iconName="settingscog" iconColor="white" />}
          labelStyle={styles.drawerItem}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(15),
    marginVertical: height(30),
  },

  drawerItem: {
    color: 'white',
    marginLeft: -width(20),
    fontSize: sp(16),
  },
  textInfo: {
    marginLeft: width(20),
  },
});

export default Drawer;
