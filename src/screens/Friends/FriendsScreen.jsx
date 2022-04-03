import React from 'react';
import {Friends} from '@components/Friends';
import {connect} from 'react-redux';

const FriendsScreen = props => {
  return (
    <Friends navigation={props.navigation} friendsData={props.friendsData} />
  );
};

const mapStateToProps = store => {
  return {
    friendsData: store.getFriendsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsScreen);
