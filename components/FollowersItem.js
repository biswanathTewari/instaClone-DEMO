import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import NavigationAction from '../navigation/NavigationAction';

const FollowersItem = ({item}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        NavigationAction.push('Profile', {userId: item.id});
      }}>
      <View style={styles.userItem}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../config/images/defaultPic.jpg')}
            style={styles.image}
          />
          <Text style={{fontWeight: 'bold', fontSize: 15, marginLeft: 15}}>
            {item.displayName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userItem: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
});

export default FollowersItem;
