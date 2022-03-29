import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  UiButton,
  UiText,
  UiImageAvatar,
  UiImageGalleryItem,
  UiIcon,
  UiDivider,
  UiBottomPopup,
} from '@ui-kit';
import Images from '@assets/images';
import {height, width} from '@utils';
import {PopUpMoreDetails, PopUpMenu} from './PopUps';
import {useModalState} from '@hooks';

const Profile = props => {
  const [showModalMoreDetails, setShowModalMoreDetails] = useModalState();
  const [showModalMenu, setShowModalMenu] = useModalState();

  const imageGallery = [
    {img: Images.gallery1},
    {img: Images.gallery2},
    {img: Images.gallery3},
    {img: Images.gallery4},
    {img: Images.gallery5},
    {img: Images.gallery5},
    {img: Images.gallery5},
  ];

  const renderItem = ({item}) => <UiImageGalleryItem src={item.img} />;

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.topIcon}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Home')}>
                  <UiIcon iconName="arrowleft" iconColor="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={setShowModalMenu}>
                  <UiIcon
                    iconName="dotsvertical"
                    iconColor="white"
                    style={[
                      {
                        transform: [{rotate: '90deg'}],
                      },
                    ]}
                  />
                </TouchableOpacity>

                <UiBottomPopup
                  visible={showModalMenu}
                  closeModal={setShowModalMenu}>
                  <PopUpMenu setShowModalMenu={setShowModalMenu} />
                </UiBottomPopup>
              </View>
              <View style={styles.infoProfile}>
                <View style={[styles.centerItem, {paddingBottom: height(17)}]}>
                  <UiImageAvatar src={Images.ava3} size={125} />
                </View>

                <View style={[styles.centerItem, {paddingBottom: height(6)}]}>
                  <UiText size={18} color="white" width={700}>
                    Cat William
                  </UiText>
                </View>

                <View style={[styles.centerItem, {paddingBottom: height(29)}]}>
                  <UiText size={14} color="#8672BB">
                    @Williams
                  </UiText>
                </View>

                <View style={[styles.centerItem, {paddingBottom: height(8)}]}>
                  <UiText color="#8672BB">Россия, Санкт-Петербург</UiText>
                </View>

                <View style={[styles.centerItem, {paddingBottom: height(24)}]}>
                  <UiText color="white">
                    Место работы: Artist by Passion!
                  </UiText>
                </View>

                <View style={styles.infoProfile__additionalInfo}>
                  <View style={styles.followers}>
                    <UiText color="white" width={700}>
                      2,467
                    </UiText>
                    <UiText color="#8672BB" width={700}>
                      Followers
                    </UiText>
                  </View>
                  <View style={styles.following}>
                    <UiText color="white" width={700}>
                      1,589
                    </UiText>
                    <UiText color="#8672BB" width={700}>
                      Following
                    </UiText>
                  </View>
                  <View style={styles.moreDetailsButton}>
                    <UiButton onPress={setShowModalMoreDetails}>
                      Подробнее
                    </UiButton>
                    {/* Открываем модальное окно с подробной информацией */}
                    <UiBottomPopup
                      visible={showModalMoreDetails}
                      closeModal={setShowModalMoreDetails}>
                      <PopUpMoreDetails
                        setShowModalMoreDetails={setShowModalMoreDetails}
                      />
                    </UiBottomPopup>
                  </View>
                </View>
              </View>

              <UiDivider style={{marginVertical: height(24)}} />

              <View style={styles.centerItem}>
                <UiText color="white">Фотография</UiText>
                <View style={{marginLeft: 8}}>
                  <UiText color="#8672BB">254</UiText>
                </View>
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          ListHeaderComponentStyle={{marginBottom: height(10)}}
          style={{marginTop: height(10)}}
          data={imageGallery}
          numColumns={3}
          renderItem={renderItem}
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
  centerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoProfile__additionalInfo: {
    flexDirection: 'row',
    paddingHorizontal: width(5),
  },
  followers: {
    flexGrow: 1,
    flexShrink: 1,
  },
  following: {
    flexGrow: 1,
    flexShrink: 1,
  },
  moreDetailsButton: {
    flexGrow: 2.5,
    flexShrink: 2,
  },
});

export default Profile;