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
} from '@ui-kit';
import {width, height} from '@utils/Responsive';
import images from '@assets/images';
import {CommentItem, CommentAnswer} from '../components';

const PostScreen = ({navigation}) => {
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

            <View>
              <CommentItem />
              <CommentAnswer />
              <CommentItem />
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

export default PostScreen;
