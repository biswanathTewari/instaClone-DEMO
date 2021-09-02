import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

const HomeHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttons}>
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.userCircle} />
        <FontAwesome style={styles.iconStyle} icon={SolidIcons.signOutAlt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: 25,
    marginLeft: 15,
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export default HomeHeader;
