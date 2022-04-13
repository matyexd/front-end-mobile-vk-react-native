import React from 'react';
import {Profile} from '@components/Profile';
import {connect} from 'react-redux';

const ProfileScreen = props => {
  const filterPhotos = photos => {
    const photosData = photos.map(photo => {
      return photo.sizes[photo.sizes.length - 1].url;
    });
    return photosData;
  };

  const filterUserInfo = userData => {
    const userInfo = userData.userData.response[0];
    const userFetch = userData.isFetching;
    const obj = {
      userName: userInfo.first_name + ' ' + userInfo.last_name,
      userNickname: userInfo.screen_name,
      userLocation: userInfo.city.title,
      userOccupation: userInfo.occupation.name,
      countFollowers: userInfo.followers_count,
      userStatus: userInfo.status,
      userBirthDay: userInfo.bdate,
      contacts: userInfo.site,
      userAvatar: userInfo.photo_400_orig,
      countFollowing: props.friendsData.friends.response.count,
      isFetching: userFetch,
    };

    return obj;
  };

  return (
    <Profile
      navigation={props.navigation}
      userData={filterUserInfo(props.userData)}
      photosData={filterPhotos(props.photosData.photos.response.items)}
    />
  );
};

const mapStateToProps = store => {
  return {
    userData: store.getInfoUserReducer,
    photosData: store.getPhotoUserReducer,
    friendsData: store.getFriendsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
