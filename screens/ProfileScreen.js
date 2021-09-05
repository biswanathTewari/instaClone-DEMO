import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import ActivityCount from '../components/ActivityCount';

const ProfileScreen = () => {
  const [contents, setContent] = useState([]);

  const fetchImages = async () => {
    const myHeaders = {
      Authorization: 'Client-ID a7f79d75ef4ea17',
    };
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

    const res = await fetch(
      'https://api.imgur.com/3/gallery/top/viral/day/2',
      requestOptions,
    );
    const {data} = await res.json();
    setContent(data.filter(item => item.images[0].type == 'image/jpeg'));
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Image
          source={require('../config/images/defaultPic.jpg')}
          style={styles.image}
        />
        <View style={styles.activity}>
          <Text style={{fontSize: 20}}>iambizan</Text>
          <View style={styles.counts}>
            <ActivityCount count="10" title="posts" />
            <ActivityCount count="10" title="followers" />
            <ActivityCount count="10" title="following" />
          </View>
        </View>
      </View>

      <ScrollView style={styles.sv}>
        <View style={styles.content}>
          {contents.map(item => (
            <Image
              source={{uri: item.images[0].link}}
              style={{height: 110, width: 110, margin: 9}}
            />
          ))}
        </View>
      </ScrollView>
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
  sv: {
    marginTop: 15,
    width: '100%',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
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
