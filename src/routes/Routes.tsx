import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

import { WrapperIcon } from './styles';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            right: 0,
            left: 20,
            height: 65,
            backgroundColor: '#232323',
            borderTopStartRadius: 20,
            padding: 0,
            borderTopWidth: 0
          }
        }}>
        <Tab.Screen
          name="Game"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => {
              if (focused) {
                return (
                  <WrapperIcon borderTopLeftRadius='14px'>
                    <Entypo name="game-controller" size={size} color="#ffffff" />
                  </WrapperIcon>
                )

              }
              return <Entypo name="game-controller" size={size} color="#ffffff" />
            }
          }}
        />
        <Tab.Screen
          name="Message"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <WrapperIcon >
                    <FontAwesome name="envelope" size={22} color="#fafafa" />
                  </WrapperIcon>
                )

              }
              return <FontAwesome name="envelope" size={22} color="#fafafa" />
            }
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => {
              if (focused) {
                return (
                  <WrapperIcon>
                    <Entypo name="home" size={size} color="#ffffff" />
                  </WrapperIcon>
                )

              }
              return <Entypo name="home" size={size} color="#ffffff" />
            }
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <WrapperIcon >
                    <FontAwesome5 name="user-alt" size={22} color="#fafafa" />
                  </WrapperIcon>
                )

              }
              return <FontAwesome5 name="user-alt" size={22} color="#fafafa" />
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}