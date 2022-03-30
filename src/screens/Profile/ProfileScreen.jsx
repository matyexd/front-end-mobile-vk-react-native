import React from 'react';
import {Profile} from '@components/Profile';
import {connect} from 'react-redux';
import {getInfoUserRequest} from '../../store/actions/action';

const ProfileScreen = props => {
  return (
    <Profile
      navigation={props.navigation}
      userInfo={props.userInfo}
      getInfoAboutUser={props.getInfoAboutUser}
    />
  );
};

const mapStateToProps = store => {
  return {
    userInfo: store.getInfoUserReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInfoAboutUser: () => dispatch(getInfoUserRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
