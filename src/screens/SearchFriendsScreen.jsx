import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {width, height} from '@utils/Responsive';
import {UiInput, UiIcon, UiText, UiDivider} from '@ui-kit';
import {People} from '../components';

const SearchFriends = ({navigation}) => {
  const ListTab = [{status: 'Все'}, {status: 'Люди'}, {status: 'Сообщества'}];
  const [status, setStatus] = useState('Все');

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <UiIcon
                iconName="arrowleft"
                iconColor="white"
                style={{marginRight: width(19)}}
              />
            </TouchableOpacity>
            <UiInput iconName="search" placeholder="Поиск" />
          </View>
          <View style={{marginTop: height(20)}}>
            <View style={styles.listTab}>
              {ListTab.map(tab => (
                <TouchableOpacity
                  onPress={() => setStatus(tab.status)}
                  key={tab.status}>
                  <UiText
                    style={{
                      marginBottom: height(10),
                    }}
                    color={tab.status === status ? 'white' : '#8672BB'}>
                    {tab.status}
                  </UiText>
                  {tab.status === status && (
                    <View
                      style={{
                        height: height(2),
                        backgroundColor: 'white',
                        borderRadius: height(2),
                      }}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <UiDivider />
          </View>

          <People />
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
  listTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SearchFriends;
