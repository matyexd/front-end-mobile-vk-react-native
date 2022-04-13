import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import selection from './selection.json';
import {sp} from '@utils/Responsive';

const UiIcon = ({iconColor = 'black', iconName, iconSize = 20, style}) => {
  const Icon = createIconSetFromIcoMoon(selection);
  return (
    <Icon
      name={iconName}
      color={iconColor}
      size={sp(iconSize)}
      width={800}
      style={style}
    />
  );
};

export default UiIcon;
