import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Card from '../components/Card';

const HomeScreen = () => {
  const [feeds, setFeeds] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

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
    setFeeds(data.filter(item => item.images[0].type == 'image/jpeg'));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        renderItem={({item}) => <Card item={item} />}
        keyExtractor={item => item.account_id}
        refreshing={refreshing}
        onRefresh={() => fetchImages()}
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

export default HomeScreen;
