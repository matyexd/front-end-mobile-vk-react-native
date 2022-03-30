import React from 'react';
import {Profile} from '@components/Profile';
import {connect} from 'react-redux';
import {
  getInfoUserRequest,
  getPhotoUserRequest,
} from '../../store/actions/action';

const ProfileScreen = props => {
  return (
    <Profile
      navigation={props.navigation}
      userFetch={props.userFetch}
      getInfoAboutUser={props.getInfoAboutUser}
      photos={props.photos}
      getPhotoUser={props.getPhotoUser}
    />
  );
};

const mapStateToProps = store => {
  return {
    userFetch: store.getInfoUserReducer,
    photos: store.getPhotoUserReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInfoAboutUser: () => dispatch(getInfoUserRequest()),
    getPhotoUser: () => dispatch(getPhotoUserRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
