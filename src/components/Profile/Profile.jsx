import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  propTypes,
} from 'react-native';
import {
  UiText,
  UiImageGalleryItem,
  UiIcon,
  UiDivider,
  UiBottomPopup,
  UiLoader,
} from '@ui-kit';
import {height, width} from '@utils';
import {PopUpMenu} from './PopUps';
import {useModalState} from '@hooks';
import GeneryInfo from './GeneryInfo/GeneryInfo';
import PropTypes from 'prop-types';

const Profile = ({navigation, userData, photosData}) => {
  const [showModalMoreDetails, setShowModalMoreDetails] = useModalState();
  const [showModalMenu, setShowModalMenu] = useModalState();

  const renderItem = ({item}) => <UiImageGalleryItem src={item} />;

  return (
    <SafeAreaView style={styles.app}>
      <View style={styles.container}>
        {userData.isFetching ? (
          <UiLoader />
        ) : (
          <FlatList
            ListHeaderComponent={
              <>
                <View style={styles.topIcon}>
                  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <UiIcon iconName="arrowleft" iconColor="white" />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={setShowModalMenu}>
                    <UiIcon
                      iconName="dotsvertical"
                      iconColor="white"
                      style={styles.iconElement}
                    />
                  </TouchableOpacity>

                  <UiBottomPopup
                    visible={showModalMenu}
                    closeModal={setShowModalMenu}>
                    <PopUpMenu setShowModalMenu={setShowModalMenu} />
                  </UiBottomPopup>
                </View>

                <GeneryInfo
                  userInfo={userData}
                  showModalMoreDetails={showModalMoreDetails}
                  setShowModalMoreDetails={setShowModalMoreDetails}
                />

                <UiDivider style={styles.dividerStyle} />

                <View style={styles.centerItem}>
                  <UiText color="white">Фотография</UiText>
                  <View style={styles.countPhoto}>
                    <UiText color="#8672BB">254</UiText>
                  </View>
                </View>
              </>
            }
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={styles.generyInfoStyle}
            style={styles.photosBlock}
            data={photosData}
            numColumns={3}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
  userData: PropTypes.object,
  photosData: PropTypes.array,
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
  countPhoto: {
    marginLeft: 8,
  },
  generyInfoStyle: {marginBottom: height(10)},
  dividerStyle: {marginVertical: height(24)},
  photosBlock: {marginTop: height(10)},
  iconElement: {
    transform: [{rotate: '90deg'}],
  },
});

export default Profile;
