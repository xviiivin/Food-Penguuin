import { View, Text } from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Users/HomeScreen";
import SettingsScreen from "../screens/Users/SettingsScreen";
import SettingsScreenRes from "../screens/Restarunt/SettingScreen";
import AdminHome from "../screens/Admin/HomeScreen";
import AdminSetting from "../screens/Admin/SettingScreen";

import CreateRes from "../screens/Restarunt/CreateRes";
import ResHomeScreen from "../screens/Restarunt/HomeScreen";
import Login from "../screens/Login";
import HistoryScreen from "../screens/Users/HistoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Restaurant from "../screens/Restarunt/Restaurant";
import EditRes from "../screens/Restarunt/EditRes";
import { getUser, getUserInfo } from "../database/user";
import { useFocusEffect } from "@react-navigation/native";
const Tab = createBottomTabNavigator();
const screenOption = {
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    height: 70,
    paddingBottom: 8,
  },
  tabBarLabelStyle: {
    fontSize: 13,
  },
};
const tabLabelStyle = {
  fontFamily: "NotoSansThai_500Medium",
  fontSize: 13,
};

const BottomTab = () => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);

  useFocusEffect(
    useCallback(() => {
      test();

      return () => console.log("unmou");
    }, [])
  );

  const test = async () => {
    const test = await getUser();
    const test1 = await getUserInfo(test.uid);
    setData(test);
    setInfo(test1);
  };

  return info && info.role === "user" ? (
    // user

    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="UserHome"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              หน้าหลัก
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"home"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserHistory"
        component={HistoryScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              ประวัติ
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={"history"}
                size={26}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserSettings"
        component={SettingsScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              ข้อมูลผู้ใช้
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"person"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
        s
      />
    </Tab.Navigator>
  ) : // restarunt

  // admin

  info && info.role === "restarunt" ? (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="ResHome"
        component={ResHomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              รายการอาหาร/คิว
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"receipt"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={Restaurant}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              จัดการร้านค้า
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialIcons
                name={"storefront"}
                size={26}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreenRes}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              ข้อมูลผู้ใช้
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"person"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator screenOptions={screenOption}>
      <Tab.Screen
        name="AdminHome"
        component={AdminHome}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              หน้าหลัก
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"home"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="UserSettings"
        component={AdminSetting}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={[
                tabLabelStyle,
                { color: focused ? "#F6D33C" : "#202020" },
              ]}
            >
              ข้อมูลผู้ใช้
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={"person"}
                size={24}
                color={focused ? "#F6D33C" : "#202020"}
              />
            );
          },
        }}
        s
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
