import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const defaultImageLink = 'https://i.imgur.com/0zwMOG0.png';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Text style={{color: 'purple'}}>{item.caption}</Text>
      </View>
      <Image
        source={{
          uri: item.imageUrl ? item.imageUrl : defaultImageLink,
        }}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.footer}>
        <Text>Like</Text>
        <Text>comment</Text>
        <Text>share</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 350,
    width: '100%',
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 20,
  },
  user: {
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  image: {
    flex: 1,
  },
  footer: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
});

export default Card;
