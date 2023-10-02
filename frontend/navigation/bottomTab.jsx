import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Users/HomeScreen';
import SettingsScreen from '../screens/Users/SettingsScreen';

import Login from '../screens/Login'
import HistoryScreen from '../screens/Users/HistoryScreen';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const screenOption = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    height: 70,
    paddingBottom: 8
  },
  tabBarLabelStyle: {
    fontSize: 13,
  }
};
const tabLabelStyle = {
  fontFamily: ['NotoSansThai_500Medium'],
  fontSize: 13,
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={screenOption} >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[tabLabelStyle, { color: focused ? '#F6D33C' : '#202020' }]}>
              หน้าหลัก
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={'home'}
                size={24}
                color={focused ? '#F6D33C' : '#202020'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[tabLabelStyle, { color: focused ? '#F6D33C' : '#202020' }]}>
              ประวัติ
            </Text>
          ), tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={'history'}
                size={26}
                color={focused ? '#F6D33C' : '#202020'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={[tabLabelStyle, { color: focused ? '#F6D33C' : '#202020' }]}>
              ข้อมูลผู้ใช้
            </Text>
          ), tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={'person'}
                size={24}
                color={focused ? '#F6D33C' : '#202020'}
              />
            );
          },
        }}
        s />
    </Tab.Navigator>
  );
};

export default BottomTab;
