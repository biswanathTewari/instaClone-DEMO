import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';

import Card from '../components/Card';

import {getFeeds} from '../actions';

const HomeScreen = ({feeds, isLoading, getFeeds}) => {
  useEffect(() => {
    getFeeds();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={() => getFeeds()}
        style={{width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

const mapStateToProps = ({feed}) => {
  return {feeds: feed.feeds, isLoading: feed.isLoading};
};

export default connect(mapStateToProps, {getFeeds})(HomeScreen);
