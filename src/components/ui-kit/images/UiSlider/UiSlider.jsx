import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import {UiImagePost} from '@ui-kit';
import {height, width} from '@utils/Responsive';
import PropTypes from 'prop-types';

const UiSlider = ({photos, imgActive, onchange, style}) => {
  return (
    <View style={style}>
      <ScrollView
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {photos.map((photo, index) => (
          <View key={photo + '_' + index}>
            <UiImagePost
              style={{marginHorizontal: width(5)}}
              src={photo}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {photos.length > 1 && (
        <View style={styles.postItem__dots}>
          {photos.map((e, index) => {
            return (
              <Text
                key={e + '_' + index}
                style={
                  imgActive === index
                    ? {color: 'white', margin: 3}
                    : {color: '#8672BB', margin: 3}
                }>
                ●
              </Text>
            );
          })}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  postItem__dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height(10),
  },
});

UiSlider.propTypes = {
  photos: PropTypes.array.isRequired,
  imgActive: PropTypes.number.isRequired,
  onchange: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
};

export default UiSlider;
