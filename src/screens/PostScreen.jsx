import React from 'react';
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
} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import images from '@assets/images';
import {CommentItem, CommentAnswer} from '../components';

const PostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <ScrollView
          style={{marginBottom: height(10)}}
          showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
            <View style={{marginTop: height(20)}}>
              <UiProfileInfo
                name={'Kat Williams'}
                addInfo={'1h ago'}
                avatarSrc={images.ava}
              />
            </View>

            <View style={{marginTop: height(20)}}>
              <UiImagePost
                src={images.rectangle1}
                style={{marginVertical: height(2)}}
              />
              <UiImagePost
                src={images.rectangle2}
                style={{marginVertical: height(2)}}
              />
              <UiImagePost
                src={images.rectangle3}
                style={{marginVertical: height(2)}}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: height(15),
                }}>
                <UiListElement
                  iconName={'likeicon'}
                  textColor={'white'}
                  textWidth={600}>
                  8,998
                </UiListElement>
                <UiIcon iconName="bookmark" iconColor="white" />
              </View>

              <View style={{marginTop: height(10)}}>
                <UiText width={700} color="white">
                  12 комментариев
                </UiText>
              </View>

              <UiDivider style={{marginVertical: height(10)}} />
            </View>

            <CommentItem />
            <CommentAnswer />
            <CommentItem />
          </View>
        </ScrollView>
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
});

export default PostScreen;
