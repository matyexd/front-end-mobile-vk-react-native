import React from 'react';
import {Search} from '@components/Search';
import {connect} from 'react-redux';

const SearchScreen = props => {
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

  const filterGroups = groupsData => {
    const {groups, isFetching, error} = groupsData;
    const allGroups = groups.response.items.map(item => {
      const obj = {
        groupName: item.name,
        groupAvatar: item.photo_200,
      };

      return obj;
    });
    return allGroups;
  };
  console.log(props.groupsData);

  return (
    <Search
      navigation={props.navigation}
      peopleData={filterPeople(props.friendsData)}
      groupsData={filterGroups(props.groupsData)}
    />
  );
};

const mapStateToProps = store => {
  return {
    friendsData: store.getFriendsReducer,
    groupsData: store.getGroupsUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
