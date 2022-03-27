import React from 'react';
import {View} from 'react-native';
import {UiImageAvatar, UiText} from '@ui-kit';
import PropTypes from 'prop-types';
import {width} from '@utils/Responsive';

const UiComment = ({
  name,
  commentContent,
  avatarSrc,
  nameSize = 18,
  nameColor = 'white',
  nameWidth = 700,
  commentContentSize = 14,
  commentContentColor = '#8672BB',
  commentContentWidth = 500,
  avaSize = 39,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <UiImageAvatar src={avatarSrc} size={avaSize} />
      <View style={{marginLeft: width(8)}}>
        <UiText size={nameSize} width={nameWidth} color={nameColor}>
          {name}
        </UiText>
        <UiText
          size={commentContentSize}
          width={commentContentWidth}
          color={commentContentColor}>
          {commentContent}
        </UiText>
      </View>
    </View>
  );
};

UiComment.propTypes = {
  name: PropTypes.string.isRequired,
  commentContent: PropTypes.string.isRequired,
  avatarSrc: PropTypes.number.isRequired,
  nameSize: PropTypes.number,
  nameWidth: PropTypes.number,
  nameColor: PropTypes.string,
  commentContentSize: PropTypes.number,
  commentContentWidth: PropTypes.number,
  commentContentColor: PropTypes.string,
  avaSize: PropTypes.number,
};

export default UiComment;
