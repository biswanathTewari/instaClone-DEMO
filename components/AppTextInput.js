import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const AppTextInput = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} autoCapitalize="none" {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 300,
    borderRadius: 20,
    marginTop: 20,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 18,
    color: 'white',
    backgroundColor: 'grey',
  },
});

export default AppTextInput;
