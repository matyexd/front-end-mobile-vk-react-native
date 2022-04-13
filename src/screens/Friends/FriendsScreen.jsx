import React from 'react';
import {Friends} from '@components/Friends';
import {connect} from 'react-redux';

const FriendsScreen = props => {
  const filterFriends = friendsData => {
    const {friends, isFetching, error} = friendsData;
    const allFriends = friends.response.items.map(item => {
      const obj = {
        friendName: item.first_name + ' ' + item.last_name,
        friendCity: item.city ? item.city.title : '',
        friendAvatar: item.photo_200_orig,
      };

      return obj;
    });
    return allFriends;
  };

  return (
    <Friends
      navigation={props.navigation}
      friendsData={filterFriends(props.friendsData)}
    />
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
