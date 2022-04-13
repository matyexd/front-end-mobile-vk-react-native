import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {UiIcon, UiText} from '@ui-kit';
import {width, height} from '@utils/Responsive';

import Posts from './Posts/Posts';
import {UiLoader} from '@ui-kit/loader';

const Home = ({navigation, newsData, uploadingNews}) => {
  const scrollViewRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const [news, setNews] = useState(newsData.newsData);

  const isScrollDown = ({layoutMeasurement, contentOffset, contentSize}) => {
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 1) {
      setCurrentPage(currentPage + 1);
      console.log('Внизу');
    }
  };

  useEffect(() => {
    uploadingNews();
    setNews([...news, newsData.newsData]);
  }, [currentPage]);

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView
        ref={scrollViewRef}
        onScroll={({nativeEvent}) => isScrollDown(nativeEvent)}>
        <View style={styles.container}>
          <View style={styles.topMenu}>
            <View>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <UiIcon iconName={'menu'} iconColor={'white'} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <UiIcon iconName={'search'} iconColor={'white'} />
              <UiIcon
                style={styles.iconStyle}
                iconName={'alert'}
                iconColor={'white'}
              />
            </View>
          </View>

          {newsData.error ? (
            <UiText>Ошибка</UiText>
          ) : newsData.isFetching ? (
            <UiLoader style={styles.loaderStyle} />
          ) : (
            <Posts navigation={navigation} newsData={newsData.newsData} />
          )}
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
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    marginLeft: width(20),
  },
  loaderStyle: {
    marginTop: height(25),
  },
});

export default Home;
