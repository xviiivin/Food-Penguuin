import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Users/HomeScreen";
import SettingsScreen from "../screens/Users/SettingsScreen";
import CreateRes from "../screens/Restarunt/CreateRes";
import ResHomeScreen from "../screens/Restarunt/HomeScreen";
import Login from "../screens/Login";
import HistoryScreen from "../screens/Users/HistoryScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
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
  return (
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

    // restarunt
    //   <Tab.Navigator screenOptions={screenOption}>
    //   <Tab.Screen
    //     name="ResHome"
    //     component={ResHomeScreen}
    //     options={{
    //       tabBarLabel: ({ focused }) => (
    //         <Text
    //           style={[
    //             tabLabelStyle,
    //             { color: focused ? "#F6D33C" : "#202020" },
    //           ]}
    //         >
    //           รายการอาหาร/คิว
    //         </Text>
    //       ),
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={"receipt"}
    //             size={24}
    //             color={focused ? "#F6D33C" : "#202020"}
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="History"
    //     component={CreateRes}
    //     options={{
    //       tabBarLabel: ({ focused }) => (
    //         <Text
    //           style={[
    //             tabLabelStyle,
    //             { color: focused ? "#F6D33C" : "#202020" },
    //           ]}
    //         >
    //           จัดการร้านค้า
    //         </Text>
    //       ),
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <MaterialIcons
    //             name={"storefront"}
    //             size={26}
    //             color={focused ? "#F6D33C" : "#202020"}
    //           />
    //         );
    //       },
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Settings"
    //     component={SettingsScreen}
    //     options={{
    //       tabBarLabel: ({ focused }) => (
    //         <Text
    //           style={[
    //             tabLabelStyle,
    //             { color: focused ? "#F6D33C" : "#202020" },
    //           ]}
    //         >
    //           ข้อมูลผู้ใช้
    //         </Text>
    //       ),
    //       tabBarIcon: ({ focused }) => {
    //         return (
    //           <Ionicons
    //             name={"person"}
    //             size={24}
    //             color={focused ? "#F6D33C" : "#202020"}
    //           />
    //         );
    //       },
    //     }}
    //     s
    //   />
    // </Tab.Navigator>
  );
};

export default BottomTab;
