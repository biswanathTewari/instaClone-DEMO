import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';

import {getFollowers} from '../actions';

import FollowersItem from '../components/FollowersItem';

const FollowersScreen = ({route, followers, getFollowers}) => {
  useEffect(() => {
    getFollowers({profileId: route.params.profileId});
  }, []);

  return followers.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={followers.userFollowers}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FollowersItem item={item} />}
    />
  );
};

const mapStateToProps = ({followers}) => {
  return {followers: followers};
};

export default connect(mapStateToProps, {getFollowers})(FollowersScreen);
