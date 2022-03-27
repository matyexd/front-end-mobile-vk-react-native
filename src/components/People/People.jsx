import React from 'react';
import {View} from 'react-native';
import {UiProfileInfo} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const People = () => {
  return (
    <View style={{marginTop: height(30)}}>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
      <View style={{marginBottom: height(10)}}>
        <UiProfileInfo
          name={'Kat Williams'}
          avatarSrc={images.ava3}
          addInfo="Санк-Петербург"
          avaSize={50}
        />
      </View>
    </View>
  );
};

export default People;
