import React from 'react';
import {Home} from '@components/Home';
import {connect} from 'react-redux';

const HomeScreen = props => {
  return <Home navigation={props.navigation} newsData={props.newsData} />;
};

const mapStateToProps = store => {
  return {
    newsData: store.getNewsReducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
