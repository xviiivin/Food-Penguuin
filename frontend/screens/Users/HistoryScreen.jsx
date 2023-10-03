import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Receive from '../../components/History/Receive';
import Order from '../../components/History/Order';

const Tab = createMaterialTopTabNavigator();

const HistoryScreen = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Receive" component={Receive} options={{
          tabBarLabel: () => (
            <Text style={[{ color: "#202020" }]}>
              ที่ต้องได้รับ
            </Text>
          ),

        }} />
        <Tab.Screen name="Order" component={Order} options={{
          tabBarLabel: () => (
            <Text style={[{ color: "#202020" }]}>
              สั่งซื้อสำเร็จ
            </Text>
          ),

        }} />
      </Tab.Navigator>
    </>
  )
}

export default HistoryScreen