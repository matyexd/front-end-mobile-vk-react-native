import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import {UiText, UiIcon, UiInput, UiScrollButton, UiLoader} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import {CommentItem, CommentAnswer} from './Comments';
import PostContent from './PostContent/PostContent';

const Post = ({
  navigation,
  postItem,
  addInfoPost,
  getAddInfoPost,
  comments,
  isLoading,
  handleLoadMore,
  buttonDown,
  setInputComment,
  sendMessage,
  inputComment,
}) => {
  const handleButtonDown = () => {
    buttonDown.EndButtonHandler();
  };

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

        <PostContent
          postItem={postItem}
          addInfoPost={addInfoPost}
          getAddInfoPost={getAddInfoPost}
        />
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
          ref={buttonDown.scrollViewRef}
          ListHeaderComponent={headerContent}
          data={comments}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={isLoading && footerContent}
          onEndReached={!isLoading && handleLoadMore}
        />

        {/* Опуститься вниз всех комментариев */}
        {
          <UiScrollButton
            style={{bottom: height(100)}}
            onPress={() => handleButtonDown()}
          />
        }

        {/* Ввод комментария */}
        <View
          style={{
            height: height(50),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <UiInput
            placeholder="Комментарий"
            onChangeText={setInputComment}
            value={inputComment}
          />
          <TouchableOpacity
            style={{marginLeft: width(20)}}
            onPress={() => sendMessage()}>
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

export default Post;
