import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {height, width} from '@utils';
import {UiText, UiIcon, UiListElement, UiDivider} from '@ui-kit';

const PopUpMoreDetails = ({setShowModalMoreDetails}) => {
  return (
    <View style={styles.viewMoreDetails}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleList}>
          <UiText color={'white'} size={18} width={700}>
            Подробнее
          </UiText>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            onPress={() => setShowModalMoreDetails(false)}>
            <UiIcon
              iconName={'backspace'}
              iconColor={'#8672BB'}
              iconSize={12}
            />
          </TouchableOpacity>
        </View>
        <View>
          <UiListElement style={styles.listItem} iconName={'chat'}>
            They never ask people to do things they wouldn’t do themselves.
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'cake'}>
            День рождения: 08 октября 1992
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'location'}>
            Город: Санкт-Петербург
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'briefcase'}>
            ВГУЮ в г. Санкт-Петербург
          </UiListElement>
        </View>
        <UiDivider style={{marginVertical: 10}} />
        <View style={styles.titleList}>
          <UiText color={'white'} size={18} width={700}>
            Контакты
          </UiText>
        </View>
        <View>
          <UiListElement style={styles.listItem} iconName={'arrow'}>
            http://t.me/durov
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'twitter'}>
            Durov
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'instagram'}>
            Pavel Durov
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'facebook'}>
            durov
          </UiListElement>
          <UiListElement style={styles.listItem} iconName={'telegram'}>
            durov
          </UiListElement>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewMoreDetails: {
    backgroundColor: '#2B2146',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 10,
    maxHeight: height(485),
    paddingHorizontal: width(15),
    paddingVertical: height(20),
  },
  listItem: {
    marginVertical: height(10),
  },
  titleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});

export default PopUpMoreDetails;
