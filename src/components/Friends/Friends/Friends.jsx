import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {UiIcon, UiText, UiProfileInfo} from '@ui-kit';
import images from '@assets/images';
import {width, height} from '@utils/Responsive';

const Friends = props => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => props.navigation.navigate('Home')}>
              <UiIcon iconName="arrowleft" iconColor="white" />
            </TouchableOpacity>
            <UiText color="white" size={18} width={700}>
              Друзья
            </UiText>
            <View style={{flex: 1}}></View>
          </View>

          <View style={{marginTop: height(30)}}>
            <View style={{marginBottom: height(10)}}>
              <UiProfileInfo
                name={'Kat Williams'}
                avatarSrc={images.ava}
                addInfo="Санк-Петербург"
                avaSize={50}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2146',
    height: '100%',
  },
  container: {
    paddingHorizontal: width(15),
    paddingTop: height(20),
  },
});

export default Friends;
