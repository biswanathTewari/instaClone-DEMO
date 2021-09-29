import React, {useEffect} from 'react';
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

import {getFollowing} from '../actions';

import FollowersItem from '../components/FollowersItem';

const FollowingScreen = ({route, following, getFollowing}) => {
  useEffect(() => {
    getFollowing({profileId: route.params.profileId});
  }, []);

  return following.isLoading ? (
    <ActivityIndicator style={{flex: 1, justifyContent: 'center'}} />
  ) : (
    <FlatList
      data={following.userFollowing}
      keyExtractor={item => item.id}
      renderItem={({item}) => <FollowersItem item={item} />}
    />
  );
};

const mapStateToProps = ({following}) => {
  return {following: following};
};

export default connect(mapStateToProps, {getFollowing})(FollowingScreen);
