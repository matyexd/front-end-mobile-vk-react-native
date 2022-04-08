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
  return (
    <View style={styles.infoProfile}>
      <View style={[styles.centerItem, {paddingBottom: height(17)}]}>
        <UiImageAvatar src={userInfo.userAvatar} size={125} />
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(6)}]}>
        <UiText size={18} color="white" width={700}>
          {userInfo.userName}
        </UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(29)}]}>
        <UiText size={14} color="#8672BB">
          @{userInfo.userNickname}
        </UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(8)}]}>
        <UiText color="#8672BB">{userInfo.userLocation}</UiText>
      </View>

      <View style={[styles.centerItem, {paddingBottom: height(24)}]}>
        <UiText color="white">{userInfo.userOccupation}</UiText>
      </View>

      <View style={styles.infoProfile__additionalInfo}>
        <View style={styles.followers}>
          <UiText color="white" width={700}>
            {userInfo.countFollowers}
          </UiText>
          <UiText color="#8672BB" width={700}>
            Followers
          </UiText>
        </View>
        <View style={styles.following}>
          <UiText color="white" width={700}>
            {userInfo.countFollowing}
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
              status={userInfo.userStatus}
              birthday={userInfo.userBirthDay}
              location={userInfo.userLocation}
              education={userInfo.userOccupation}
              contacts={userInfo.contacts}
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
