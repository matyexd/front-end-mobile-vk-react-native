import React, {useEffect} from 'react';
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
import GeneryInfo from './GeneryInfo/GeneryInfo';

const Profile = props => {
  const [showModalMoreDetails, setShowModalMoreDetails] = useModalState();
  const [showModalMenu, setShowModalMenu] = useModalState();

  const renderItem = ({item}) => <UiImageGalleryItem src={item} />;

  useEffect(() => {
    props.getInfoAboutUser();
    props.getPhotoUser();
  }, []);

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

              <GeneryInfo
                userInfo={props.userFetch.userInfo}
                showModalMoreDetails={showModalMoreDetails}
                setShowModalMoreDetails={setShowModalMoreDetails}
              />

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
          data={props.photos.photos}
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
  topIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Profile;
