import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = ({style, onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.button, style]}>
        <Text style={{color: 'white'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginTop: 15,
    alignItems: 'center',
  },
});

export default AppButton;
