import React from 'react';
import Drawer from '@components/Drawer';
import {connect} from 'react-redux';

const CustomDrawer = props => {
  const filterUserInfo = userInfo => {
    const obj = {
      userName:
        userInfo.response[0].first_name + ' ' + userInfo.response[0].last_name,
      userNickname: userInfo.response[0].screen_name,
      userAvatar: userInfo.response[0].photo_400_orig,
    };
    return obj;
  };

  return (
    <Drawer
      navigation={props.navigation}
      userInfo={filterUserInfo(props.userData.userData)}
    />
  );
};

const mapStateToProps = store => {
  return {
    userData: store.getInfoUserReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
