import React from 'react';
import {View} from 'react-native';
import {UiText, UiListElement, UiImageAvatar} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const CommentAnswer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: height(10),
        paddingLeft: width(42),
      }}>
      <UiImageAvatar
        src={'https://via.placeholder.com/150'}
        size={35}
        style={{marginRight: width(10)}}
      />
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <UiText width={700} color={'white'}>
          Kat Willams
        </UiText>
        <View style={{flexDirection: 'row'}}>
          <UiText
            size={14}
            color={'#C3B8E0'}
            style={{flex: 1, flexWrap: 'wrap', marginRight: width(10)}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate
            velit eligendi perferendis cupiditate voluptatibus accusantium
            corrupti voluptatem facere necessitatibus eum nam fuga, numquam
            similique! Inventore aliquam pariatur repudiandae voluptate.
          </UiText>
          <View>
            <UiListElement
              iconName={'likeicon'}
              textColor={'white'}
              textWidth={600}
              iconSize={15}>
              56
            </UiListElement>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: height(3)}}>
          <UiText size={12} color={'#8672BB'}>
            25 сен. в 22:12
          </UiText>
          <UiText size={12} color={'white'} style={{marginLeft: width(15)}}>
            Ответить
          </UiText>
        </View>
      </View>
    </View>
  );
};

export default CommentAnswer;
