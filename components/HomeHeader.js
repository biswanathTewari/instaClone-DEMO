import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import NavigationAction from '../navigation/NavigationAction';

const HomeHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => NavigationAction.navigate('Profile')}>
          <FontAwesome style={styles.iconStyle} icon={SolidIcons.userCircle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => NavigationAction.resetTo('LogIn')}>
          <FontAwesome style={styles.iconStyle} icon={SolidIcons.signOutAlt} />
        </TouchableOpacity>
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
