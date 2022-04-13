import React from 'react';
import {Search} from '@components/Search';
import {connect} from 'react-redux';

const SearchScreen = props => {
  const obj = {
    name: '',
    ava: '',
    addInfo: '',
  };

  const filterPeople = peopleData => {
    const {friends, isFetching, error} = peopleData;
    const allFriends = friends.response.items.map(item => {
      const obj = {
        name: item.first_name + ' ' + item.last_name,
        addInfo: item.city ? item.city.title : '',
        ava: item.photo_200_orig,
      };

      return obj;
    });
    return allFriends;
  };

  const filterGroups = groupsData => {
    const {groups, isFetching, error} = groupsData;
    const allGroups = groups.response.items.map(item => {
      const obj = {
        name: item.name,
        ava: item.photo_200,
        ...obj,
      };

      return obj;
    });
    return allGroups;
  };

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
