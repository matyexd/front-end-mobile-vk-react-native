import React from 'react';
import {View} from 'react-native';
import {UiImageAvatar, UiText} from '@ui-kit';
import PropTypes from 'prop-types';
import {width} from '@utils/Responsive';

const UiProfileInfo = ({
  name,
  addInfo,
  avatarSrc,
  nameSize = 18,
  nameColor = 'white',
  nameWidth = 700,
  addSize = 14,
  addColor = '#8672BB',
  addWidth = 500,
  avaSize = 39,
}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <UiImageAvatar src={avatarSrc} size={avaSize} />
      <View style={{marginLeft: width(8)}}>
        <UiText size={nameSize} width={nameWidth} color={nameColor}>
          {name}
        </UiText>
        <UiText size={addSize} width={addWidth} color={addColor}>
          {addInfo}
        </UiText>
      </View>
    </View>
  );
};

UiProfileInfo.propTypes = {
  name: PropTypes.string.isRequired,
  addInfo: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  nameSize: PropTypes.number,
  nameWidth: PropTypes.number,
  nameColor: PropTypes.string,
  addSize: PropTypes.number,
  addWidth: PropTypes.number,
  addColor: PropTypes.string,
  avaSize: PropTypes.number,
};

export default UiProfileInfo;
