import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome, {SolidIcons} from 'react-native-fontawesome';

import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FollowersScreen from '../screens/FollowerScreen';
import FollowingScreen from '../screens/FollowingScreen';

import HomeHeader from '../components/HomeHeader';

import NavigationAction from './NavigationAction';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthCheck = ({navigation, route}) => {
  const userId = route.params.userId;

  useEffect(() => {
    NavigationAction.set(navigation);
    if (userId) {
      NavigationAction.resetTo('DashBoard');
    } else {
      NavigationAction.resetTo('LogIn');
    }
  }, [userId]);

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

const DashBoard = ({route}) => {
  const user = route.params.user;

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
        initialParams={{userId: user.userId}}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const index = ({user}) => {
  useEffect(() => {
    if (!user.userId) {
      NavigationAction.resetTo('LogIn');
    }
  }, [user.userId]);

  return (
    <Stack.Navigator initialRouteName="AuthCheck">
      <Stack.Screen
        name="AuthCheck"
        component={AuthCheck}
        initialParams={{userId: user.userId}}
        options={({route}) => ({
          headerShown: false,
        })}
      />
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
        initialParams={{user: user}}
      />
      <Stack.Screen
        name="Followers"
        component={FollowersScreen}
        options={({route}) => ({
          title: 'Followers',
        })}
      />
      <Stack.Screen
        name="Following"
        component={FollowingScreen}
        options={({route}) => ({
          title: 'Following',
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{userId: user.userId}}
      />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({user}) => {
  return {user: user};
};

export default connect(mapStateToProps)(index);
