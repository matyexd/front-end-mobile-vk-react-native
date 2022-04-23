import React, {useCallback} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {UiIcon, UiText} from '@ui-kit';
import {width, height} from '@utils/Responsive';

import Posts from './Posts/Posts';
import {UiLoader} from '@ui-kit/loader';
import PostItem from './Posts/PostItem';

const Home = ({
  navigation,
  data,
  isLoading,
  handleLoadMore,
  putLike,
  deleteLike,
  newCountLike,
}) => {
  const renderHeader = () => {
    return (
      <>
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
      </>
    );
  };

  const renderItem = useCallback(({item}) => {
    return (
      <PostItem
        navigation={navigation}
        key={item.sourceId + '_' + item.newsId}
        sourceId={item.sourceId}
        newsId={item.newsId}
        nameOwnerPost={item.nameOwner}
        datePost={item.news.date}
        textPost={item.news.text}
        countComments={item.news.countComments}
        countLike={item.news.countLikes}
        userLike={item.news.userLike}
        avatar={item.imageOwner}
        postPhotos={item.news.imagesNews}
        putNewsLike={putLike}
        deleteNewsLike={deleteLike}
      />
    );
  }, []);

  const renderFooter = () => {
    return isLoading && <UiLoader />;
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={renderHeader}
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.3}
        />
      </View>
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
