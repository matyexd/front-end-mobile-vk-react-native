import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {UiIcon} from '@ui-kit';
import {width, height} from '@utils/Responsive';

import {PostItem} from '../components';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <UiIcon iconName={'menu'} iconColor={'white'} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <UiIcon iconName={'search'} iconColor={'white'} />
              <UiIcon
                style={{marginLeft: width(20)}}
                iconName={'alert'}
                iconColor={'white'}
              />
            </View>
          </View>

          <PostItem onPress={() => navigation.navigate('Post')} />
          <PostItem />
          <PostItem />
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

export default HomeScreen;
