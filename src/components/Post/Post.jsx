import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
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
} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import images from '@assets/images';
import {CommentItem, CommentAnswer} from './Comments';
import useButtonToBottom from '@hooks/useButtonToBottom';

const Post = ({navigation, postItem, comments}) => {
  const {showButtonBottom, scrollViewRef, EndButtonHandler, isShowButton} =
    useButtonToBottom();

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <ScrollView
          ref={scrollViewRef}
          style={{marginBottom: height(10)}}
          showsVerticalScrollIndicator={false}
          onScroll={({nativeEvent}) => {
            isShowButton(nativeEvent);
          }}
          scrollEventThrottle={400}>
          <View style={styles.topMenu}>
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => navigation.navigate('Home')}>
              <UiIcon iconName="arrowleft" iconColor="white" />
            </TouchableOpacity>
            <UiText color="white" size={18} width={700}>
              Запись
            </UiText>
            <View style={{flex: 1}}></View>
          </View>

          <View>
            <View style={styles.postInfo}>
              <UiProfileInfo
                name={postItem.nameOwnerPost}
                addInfo={postItem.datePost}
                avatarSrc={postItem.avatar}
              />
            </View>

            <View style={styles.post}>
              {postItem.textPost.length > 0 && (
                <UiText color={'#C3B8E0'} style={{marginBottom: height(10)}}>
                  {postItem.textPost}
                </UiText>
              )}
              <View>
                {postItem.postPhotos.map((photo, index) => (
                  <UiImagePost
                    key={photo + 'id' + index}
                    src={photo}
                    style={{marginVertical: height(2)}}
                  />
                ))}
              </View>

              <View style={styles.bottomPostMenu}>
                <UiListElement
                  iconName={'likeicon'}
                  textColor={'white'}
                  textWidth={600}>
                  {postItem.countLike}
                </UiListElement>
                <UiIcon iconName="bookmark" iconColor="white" />
              </View>

              <View style={{marginTop: height(10)}}>
                <UiText width={700} color="white">
                  {postItem.countComments} комментариев
                </UiText>
              </View>

              <UiDivider style={{marginVertical: height(10)}} />
            </View>

            {comments.map(comment =>
              comment.answerComments ? (
                <View key={comment.idComment}>
                  <CommentItem
                    name={comment.nameOwnerComment}
                    ava={comment.avaOwnerComment}
                    text={comment.textComment}
                    date={comment.dateComment}
                    countLikes={comment.countLikes}
                    imageComment={comment.imageComment}
                  />
                  {comment.answerComments.map(item => {
                    return (
                      <CommentAnswer
                        key={item.idComment}
                        name={item.nameOwnerComment}
                        ava={item.avaOwnerComment}
                        text={item.textComment}
                        date={item.dateComment}
                        countLikes={item.countLikes}
                        imageComment={item.imageComment}
                      />
                    );
                  })}
                </View>
              ) : (
                <CommentItem
                  key={comment.idComment}
                  name={comment.nameOwnerComment}
                  ava={comment.avaOwnerComment}
                  text={comment.textComment}
                  date={comment.dateComment}
                  countLikes={comment.countLikes}
                  imageComment={comment.imageComment}
                />
              ),
            )}
          </View>
        </ScrollView>

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
  postInfo: {
    marginTop: height(20),
  },
  post: {
    marginTop: height(20),
  },
  bottomPostMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height(15),
  },
});

export default Post;
