import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';

import HomeHeader from '../components/HomeHeader';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="SignUp"
        component={AuthScreen}
        initialParams={{newuser: true}}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => <HomeHeader title="instagram" />,
          headerStyle: {
            backgroundColor: '#fff',
          },
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default index;
