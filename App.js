import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

import Screens from './navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
