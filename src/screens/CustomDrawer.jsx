import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UiIcon, UiImageAvatar, UiText} from '@ui-kit';
import {width, height} from '@utils';
import images from '@assets/images';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileInfo}>
        <UiImageAvatar src={images.ava3} size={80} />
        <View style={{marginLeft: width(20)}}>
          <UiText color={'white'} width={700}>
            Kat Williams
          </UiText>
          <UiText color={'#8672BB'} size={12}>
            @Williams
          </UiText>
        </View>
      </View>

      <View>
        <DrawerItem
          label="Мой профиль"
          onPress={() => props.navigation.navigate('Profile')}
          icon={() => <UiIcon iconName="profileicon" iconColor="white" />}
          labelStyle={{color: 'white', marginLeft: -width(20)}}
        />
        <DrawerItem
          label="Друзья"
          onPress={() => props.navigation.navigate('Friends')}
          icon={() => <UiIcon iconName="group" iconColor="white" />}
          labelStyle={{color: 'white', marginLeft: -width(20)}}
        />
        <DrawerItem
          label="Поиск"
          onPress={() => props.navigation.navigate('SearchFriends')}
          icon={() => <UiIcon iconName="search" iconColor="white" />}
          labelStyle={{color: 'white', marginLeft: -width(20)}}
        />
        <DrawerItem
          label="Настройки"
          onPress={() => props.navigation.navigate('Setting')}
          icon={() => <UiIcon iconName="settingscog" iconColor="white" />}
          labelStyle={{color: 'white', marginLeft: -width(20)}}
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
});

export default CustomDrawer;
