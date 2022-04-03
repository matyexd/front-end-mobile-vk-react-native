import React from 'react';
import {Profile} from '@components/Profile';
import {connect} from 'react-redux';

const ProfileScreen = props => {
  const photos = props.photosData.photos.response.items;
  const photosData = photos.map(photo => {
    return photo.sizes.pop().url;
  });

  return (
    <Profile
      navigation={props.navigation}
      userData={props.userData}
      photosData={photosData}
    />
  );
};

const mapStateToProps = store => {
  return {
    userData: store.getInfoUserReducer,
    photosData: store.getPhotoUserReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
