import React, {useEffect, useRef, useState, memo} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  UiText,
  UiIcon,
  UiProfileInfo,
  UiImagePost,
  UiListElement,
  UiDivider,
  UiComment,
  UiImageAvatar,
  UiInput,
  UiScrollButton,
  UiLoader,
} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import images from '@assets/images';
import {CommentItem, CommentAnswer} from './Comments';
import useButtonToBottom from '@hooks/useButtonToBottom';
import PostContent from './PostContent/PostContent';

const Post = ({
  navigation,
  postItem,
  comments,
  isLoading,
  handleLoadMore,
  infoLikePost,
}) => {
  const {showButtonBottom, scrollViewRef, EndButtonHandler, isShowButton} =
    useButtonToBottom();
  const headerContent = () => {
    return (
      <View>
        <View style={styles.topMenu}>
          <TouchableOpacity
            style={styles.flexElement}
            onPress={() => navigation.navigate('Home')}>
            <UiIcon iconName="arrowleft" iconColor="white" />
          </TouchableOpacity>
          <UiText color="white" size={18} width={700}>
            Запись
          </UiText>
          <View style={styles.flexElement}></View>
        </View>

        <PostContent postItem={postItem} infoLikePost={infoLikePost} />
      </View>
    );
  };

  const footerContent = () => {
    return (
      <View>
        <UiLoader />
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        {item.answerComments ? (
          <View key={item.idComment}>
            <CommentItem
              name={item.nameOwnerComment}
              ava={item.avaOwnerComment}
              text={item.textComment}
              date={item.dateComment}
              countLikes={item.countLikes}
              imageComment={item.imageComment}
            />
            {item.answerComments.map(itemAnswer => {
              return (
                <CommentAnswer
                  key={itemAnswer.idComment}
                  name={itemAnswer.nameOwnerComment}
                  ava={itemAnswer.avaOwnerComment}
                  text={itemAnswer.textComment}
                  date={itemAnswer.dateComment}
                  countLikes={itemAnswer.countLikes}
                  imageComment={itemAnswer.imageComment}
                />
              );
            })}
          </View>
        ) : (
          <CommentItem
            key={item.idComment}
            name={item.nameOwnerComment}
            ava={item.avaOwnerComment}
            text={item.textComment}
            date={item.dateComment}
            countLikes={item.countLikes}
            imageComment={item.imageComment}
          />
        )}
      </View>
    );
  };

  const keyExtractor = (item, index) => index.toString();

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={headerContent}
          data={comments}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={isLoading && footerContent}
          onEndReached={!isLoading && handleLoadMore}
        />

        {/* Опуститься вниз всех комментариев */}
        {showButtonBottom && (
          <UiScrollButton
            style={{bottom: height(100)}}
            onPress={EndButtonHandler}
          />
        )}

        {/* Ввод комментария */}
        <View
          style={{
            height: height(50),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <UiInput placeholder="Комментарий" />
          <TouchableOpacity style={{marginLeft: width(20)}}>
            <UiIcon iconName="paperairpline" iconColor="white" />
          </TouchableOpacity>
        </View>
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
    marginHorizontal: width(15),
    paddingVertical: height(20),
    flex: 1,
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  flexElement: {flex: 1},
});

export default memo(Post);
