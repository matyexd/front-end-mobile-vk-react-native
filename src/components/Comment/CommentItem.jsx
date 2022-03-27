import React from 'react';
import {View} from 'react-native';
import {UiText, UiListElement, UiImageAvatar} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const CommentItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height(10),
      }}>
      <View style={{width: '75%', flexDirection: 'row'}}>
        <UiImageAvatar src={images.ava} size={35} />
        <View style={{marginLeft: width(8)}}>
          <UiText width={700} color={'white'}>
            Kat Willams
          </UiText>
          <UiText size={14} color={'#C3B8E0'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            ducimus dignissimos necessitatibus cum delectus quas harum aliquam
            fugiat corporis iure beatae excepturi neque, modi impedit quasi
            eveniet quod perspiciatis temporibus.
          </UiText>
          <View style={{flexDirection: 'row', marginTop: height(7)}}>
            <UiText size={12} color={'#8672BB'}>
              25 сен. в 22:12
            </UiText>
            <UiText size={12} color={'white'} style={{marginLeft: width(15)}}>
              Ответить
            </UiText>
          </View>
        </View>
      </View>

      <View style={{marginTop: height(25)}}>
        <UiListElement
          iconName={'likeicon'}
          textColor={'white'}
          textWidth={600}
          iconSize={15}>
          12
        </UiListElement>
      </View>
    </View>
  );
};

export default CommentItem;
