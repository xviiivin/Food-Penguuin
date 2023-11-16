import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import RestaurantData from "../../data/RestaurantData.json";
import { getResStatusFalse, updateStatus } from "../../database/restaurant";
const HomeScreen = () => {
  const header = "คำขอเปิดร้านอาหาร";
  const navigation = useNavigation();

  const [data1, setData] = useState(null);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await getResStatusFalse();
    console.log(data);
    setData(data);
  };

  return (
    data1 && (
      <ScrollView className='w-full bg-white'>
        <View className="p-10  flex-1 gap-4">
          {data1 && data1.map((value, index) => (
            <View
              className="border border-[#F6D544] rounded-md p-4"
              key={index}
            >
              <View className="">
                <Text className="font-notob text-lg underline">
                  {value.name}
                </Text>
                <View>
                  <View className="mb-4">
                    <Text>ที่ตั้ง: {value.food_court}</Text>
                    <Text>หมวดหมู่: {value.type}</Text>
                    <Text>เบอร์: {value.phone}</Text>
                  </View>
                  <View className="flex flex-row w-full items-center justify-center gap-4">
                    <Pressable
                      onPress={() => {
                        updateStatus(value.id, 2);
                        getdata();
                      }}
                      className="border border-[#F3F3F3] w-1/3 bg-[#F3F3F3] px-4 py-2 rounded-lg justify-center items-center "
                    >
                      <Text className="font-notob">ยกเลิก</Text>
                    </Pressable>
                    <Pressable
                      onPress={() => {
                        updateStatus(value.id, 1);
                        getdata();
                      }}
                      className="border border-[#F6D544] w-1/3 bg-[#F6D544] px-4 py-2 rounded-lg justify-center items-center"
                    >
                      <Text className="font-notob">ยืนยัน</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    )
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
