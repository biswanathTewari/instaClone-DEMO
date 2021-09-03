import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

import ActivityCount from '../components/ActivityCount';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image
          source={require('../config/images/defaultPic.jpg')}
          style={styles.image}
        />
        <View style={styles.activity}>
          <Text style={{fontSize: 20}}>UserName</Text>
          <View style={styles.counts}>
            <ActivityCount count="10" title="posts" />
            <ActivityCount count="10" title="followers" />
            <ActivityCount count="10" title="following" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activity: {
    flex: 1,
    marginLeft: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  counts: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    height: '20%',
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  userInfo: {},
});

export default ProfileScreen;
