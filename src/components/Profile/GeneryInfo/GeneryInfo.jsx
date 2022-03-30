import React from 'react';
import {View, StyleSheet} from 'react-native';
import {UiText, UiImageAvatar, UiButton, UiBottomPopup} from '@ui-kit';
import {height, width} from '@utils/Responsive';
import {PopUpMoreDetails} from '../PopUps';

const GeneryInfo = ({
  userInfo,
  setShowModalMoreDetails,
  showModalMoreDetails,
}) => {
  const {
    userName,
    userNickname,
    userLocation,
    userOccupation,
    countFollowers,
    countFollowing,
    userStatus,
    userBirthDay,
    userEducation,
    contacts,
    userAvatar,
  } = userInfo;

  return (
    <View style={styles.infoProfile}>
      <View style={[styles.centerItem, {paddingBottom: height(17)}]}>
        <UiImageAvatar src={{uri: userAvatar}} size={125} />
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(6)}]}>
        <UiText size={18} color="white" width={700}>
          {userName}
        </UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(29)}]}>
        <UiText size={14} color="#8672BB">
          @{userNickname}
        </UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(8)}]}>
        <UiText color="#8672BB">{userLocation}</UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(24)}]}>
        <UiText color="white">{userOccupation}</UiText>
      </View>

      <View style={styles.infoProfile__additionalInfo}>
        <View style={styles.followers}>
          <UiText color="white" width={700}>
            {countFollowers}
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
        {/* Открываем модальное окно с подробной информацией */}
        <View style={styles.moreDetailsButton}>
          <UiButton onPress={setShowModalMoreDetails}>Подробнее</UiButton>
          <UiBottomPopup
            visible={showModalMoreDetails}
            closeModal={setShowModalMoreDetails}>
            <PopUpMoreDetails
              setShowModalMoreDetails={setShowModalMoreDetails}
              status={userStatus}
              birthday={userBirthDay}
              location={userLocation}
              education={userOccupation}
              contacts={contacts}
            />
          </UiBottomPopup>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerItem: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default GeneryInfo;
