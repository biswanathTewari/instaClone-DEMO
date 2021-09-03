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
        <ProfileScreen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
