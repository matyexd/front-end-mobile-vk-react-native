import React from 'react';
import {SearchFriends} from '@components/Friends';
import {connect} from 'react-redux';

const SearchFriendsScreen = props => {
  const filterPeople = peopleData => {
    const {friends, isFetching, error} = peopleData;
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
    <SearchFriends
      navigation={props.navigation}
      peopleData={filterPeople(props.friendsData)}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFriendsScreen);
