import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';

import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import HomeHeader from './components/HomeHeader';

import Screens from './navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

//client id: a7f79d75ef4ea17
//client secret: b72725ab4fc1577d9d34031c5b5c02340dd5c3e2
