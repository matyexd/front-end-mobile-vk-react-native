import React from 'react';
import {View} from 'react-native';
import {UiText, UiListElement, UiImageAvatar, UiImageComment} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const CommentAnswer = ({name, ava, text, date, countLikes, imageComment}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: height(10),
        paddingLeft: width(42),
      }}>
      <UiImageAvatar src={ava} size={35} style={{marginRight: width(10)}} />
      <View style={{flex: 1, flexWrap: 'wrap'}}>
        <UiText width={700} color={'white'}>
          {name}
        </UiText>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <UiText
              size={14}
              color={'#C3B8E0'}
              style={{flex: 1, flexWrap: 'wrap', marginRight: width(10)}}>
              {text}
            </UiText>
            <View style={{flex: 1, marginTop: height(5)}}>
              {imageComment &&
                imageComment.map((image, index) => (
                  <UiImageComment key={index + '_' + image} src={image} />
                ))}
            </View>
          </View>
          <View>
            <UiListElement
              iconName={'likeicon'}
              textColor={'white'}
              textWidth={600}
              iconSize={15}>
              {countLikes}
            </UiListElement>
          </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: height(3)}}>
          <UiText size={12} color={'#8672BB'}>
            {date}
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
