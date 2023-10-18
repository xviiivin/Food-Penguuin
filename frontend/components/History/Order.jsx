import { React, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const Order = () => {
  return (
    <ScrollView className="bg-white w-full flex-1 p-10">
      <View className="border-b-[1px] border-[#D9D9D9] mb-2">
        <TouchableOpacity style={styles.gridItem1}>
          <View style={styles.picCover1}>
            <Image
              className="w-full h-[150px]"
              source={{
                uri: 'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
              }}
            />
          </View>
          <View className="">
            <View className="ml-3 space-y-1 mt-3">
              <Text className="font-notoe text-[15px]">เบอร์เกอร์</Text>
              <Text className="font-notom color-[#A3A3A3]">time</Text>
            </View>
          </View>
          <View className="top-0 right-0 mt-1 absolute mb-5 ">
            <Text className="font-notom mt-2">2000 ฿</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  gridItem1: {
    width: '100%',
    marginVertical: 5,
    height: 110,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  picCover1: {
    width: 92,
    height: 92,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image1: {
    width: '100%',
    height: 150,
  },
});
