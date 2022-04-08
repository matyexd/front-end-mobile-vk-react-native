import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {UiIcon, UiText, UiProfileInfo, UiLoader} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import PropTypes from 'prop-types';

const Friends = ({navigation, friendsData}) => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('Home')}>
              <UiIcon iconName="arrowleft" iconColor="white" />
            </TouchableOpacity>
            <UiText color="white" size={18} width={700}>
              Друзья
            </UiText>
            <View style={{flex: 1}}></View>
          </View>

          <View style={{marginTop: height(30)}}>
            {friendsData.map((item, index) => (
              <View style={{marginBottom: height(15)}} key={index + 'id'}>
                <UiProfileInfo
                  name={item.friendName}
                  avatarSrc={item.friendAvatar}
                  addInfo={item.friendCity}
                  avaSize={50}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Friends.propTypes = {
  navigation: PropTypes.object.isRequired,
  friendsData: PropTypes.array,
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
