import React from 'react';
import {connect} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';

import HomeHeader from '../components/HomeHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const DashBoard = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'user-circle';
          }
          return (
            <FontAwesome
              style={{color: color, fontSize: 25}}
              icon={SolidIcons[iconName]}
            />
          );
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: () => <HomeHeader title="instagram" />,
          headerStyle: {
            backgroundColor: '#fff',
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{userId: route.params.userId}}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const index = ({userId}) => {
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
        name="LogIn"
        component={AuthScreen}
        initialParams={{newuser: false}}
        options={({route}) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="DashBoard"
        component={DashBoard}
        options={{headerShown: false}}
        initialParams={{userId: userId}}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({user}) => {
  return {userId: user.userId};
};

export default connect(mapStateToProps)(index);
