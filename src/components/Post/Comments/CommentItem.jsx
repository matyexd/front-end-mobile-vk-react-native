import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {UiText, UiListElement, UiImageAvatar, UiImageComment} from '@ui-kit';
import {width, height} from '@utils/Responsive';

const CommentItem = ({name, ava, text, date, countLikes, imageComment}) => {
  return (
    <View style={styles.commentItem}>
      <UiImageAvatar src={ava} size={35} style={styles.avaStyle} />
      <View style={styles.wrap}>
        <UiText width={700} color={'white'}>
          {name}
        </UiText>
        <View style={styles.textAndCountLikes}>
          <View style={styles.flexElement}>
            <UiText size={14} color={'#C3B8E0'} style={styles.textWrap}>
              {text}
            </UiText>
            <View style={styles.imageInComment}>
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

        <View style={styles.bottomElementComment}>
          <UiText size={12} color={'#8672BB'}>
            {date}
          </UiText>
          <TouchableOpacity>
            <UiText size={12} color={'white'} style={styles.answerTextElement}>
              Ответить
            </UiText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentItem: {
    flexDirection: 'row',
    marginTop: height(10),
  },
  wrap: {
    flex: 1,
    flexWrap: 'wrap',
  },

  textAndCountLikes: {
    flexDirection: 'row',
  },
  imageInComment: {
    flex: 1,
    marginTop: height(5),
  },
  avaStyle: {marginRight: width(10)},
  flexElement: {flex: 1},
  textWrap: {marginRight: width(10), flex: 1, flexWrap: 'wrap'},
  bottomElementComment: {flexDirection: 'row', marginTop: height(3)},
  answerTextElement: {marginLeft: width(15)},
});

export default memo(CommentItem);
