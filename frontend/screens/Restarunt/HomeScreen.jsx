// หน้าหลัก
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import Queue from "../../data/Queue.json";
import { getHistoryRes } from "../../database/history";
import { getUser, getUserInfo } from "../../database/user";
import { getResWithUID } from "../../database/restaurant";
import firebase from "../../database/firebase";
import { useFocusEffect } from "@react-navigation/native";
const HomeScreen = () => {
  const queue = [];
  const [data, setData] = useState();
  const [res, setRes] = useState();

  useFocusEffect(
    useCallback(() => {
      const intervalid = setInterval(function () {
        fetch();
      }, 2000);
      return () => clearInterval(intervalid);
    }, [])
  );

  const fetch = async () => {
    const data1 = await getUser();
    const test = await getResWithUID(data1.uid);

    const data = await getHistoryRes(test[0].name);
    setRes(test);
    setData(data);
  };

  const updateStatus = async (id) => {
    try {
      firebase.firestore().collection("history").doc(id).update({
        status: true,
      });
      fetch();

      Alert.alert("แจ้งเตือน", "เปลี่ยนสถานะสำเร็จ", [
        { text: "ตกลง", onPress: () => console.log("ตกลง") },
      ]);
    } catch (err) {
      Alert.alert("แจ้งเตือน", error.message, [
        { text: "ตกลง", onPress: () => console.log("ตกลง") },
      ]);
    }
  };

  return (
    data && (
      <ScrollView className="bg-white">
        <View className="px-10 pt-5 ">
          {res[0].status === 1 ? (
            <View>
              <Text className="font-notob text-xl">
                คงเหลือ {data.length} จำนวน{" "}
              </Text>
              {data.map((item, index) => (
                <View className="mt-5" key={index}>
                  <View className="bg-[#E2E2E2] w-full p-5 rounded-t-xl ">
                    <View className="gap-y-4">
                      {item.menu.map((menuItem, number) => (
                        <View
                          key={menuItem.id}
                          className="bg-[#E2E2E2] w-full "
                        >
                          <View className="flex flex-row justify-between">
                            <Text className="font-notoe">
                              {number + 1}.{menuItem.name}
                            </Text>
                            <Text>จำนวน {menuItem.amount} ที่</Text>
                          </View>
                        </View>
                      ))}
                    </View>

                    <View className="">
                      <Text className="font-notoe color-[#F63C3C] mt-7">
                        ผู้สั่ง
                      </Text>
                      <View className="flex gap-1 mt-2">
                        <Text className="font-notom">
                          ชื่อ:{" "}
                          {item["tt"]["firstname"] +
                            " " +
                            item["tt"]["lastname"]}
                        </Text>
                        <Text className="font-notom">
                          ราคา: {item.totalPrice.toLocaleString()}
                        </Text>
                  
                      </View>
                    </View>
                  </View>

                  <Pressable onPress={() => updateStatus(item.id)}>
                    <View className="bg-[#F6D33C] h-16 justify-center flex items-center rounded-b-xl mb-5">
                      <Text className="font-notoe text-lg">สำเร็จ</Text>
                    </View>
                  </Pressable>
                </View>
              ))}
            </View>
          ) : res[0].status === 2 ? (
            <View className="mt-48 flex items-center">
              <Image
                source={require("../../assets/Logo.png")}
                className="w-3/4 h-[40px]"
              />
              <Text className="text-[20px] mt-9 font-notom">ไม่อนุมัติ</Text>
            </View>
          ) : (
            <View className="mt-48 flex items-center">
              <Image
                source={require("../../assets/Logo.png")}
                className="w-3/4 h-[40px]"
              />
              <Text className="text-[20px] mt-9 font-notom">
                รอดำเนินการ...
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    )
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
