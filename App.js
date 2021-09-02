import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import AuthScreen from './screens/AuthScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AuthScreen newuser={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
