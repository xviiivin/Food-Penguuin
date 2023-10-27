import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState, useCallback } from "react";
import { getUser, getUserInfo } from "../../database/user";
import { getResWithUID } from "../../database/history";
import { useFocusEffect } from "@react-navigation/native";

const Receive = () => {
  const [data, setData] = useState();

  useFocusEffect(
    useCallback(() => {
      fetchData();

      return () => console.log("unmou");
    }, [])
  );

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    // Pad minutes with leading zero if needed
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${day} ${month} ${year} ${formattedHours}.${formattedMinutes} ${ampm}`;
  }

  const fetchData = async () => {
    const data = await getUser();
    const data1 = await getResWithUID(data.uid);
    console.log(data1);
    setData(data1);
    data1.forEach((item) => {
      if (item.queue === 3) {
        Alert.alert(item.nameres, "คุณเหลือ 3 คิวก่อนหน้า");
      } else if (item.queue === 2) {
        Alert.alert(item.nameres, "คุณเหลือ 2 คิวก่อนหน้า");
      } else if (item.queue === 1) {
        Alert.alert(item.nameres, "คุณเหลือ 1 คิวก่อนหน้า");
      } else if (item.queue === 0) {
        Alert.alert(item.nameres, "ถึงคิวของคุณแล้ว");
      }
    });
  };

  return (
    data && (
      <ScrollView className="p-10 bg-white">
        <View className="flex gap-6">
          {data.map((item, i) => (
            <View>
              <View className="flex flex-row justify-between items-center">
                <View>
                  <Text className="font-notom text-[20px]">{item.nameres}</Text>
                  <Text className="font-notom">
                    {formatTimestamp(item.created_at.seconds)}
                  </Text>
                </View>
                <View>
                  <Text className="font-notoe bg-[#F6D544] p-2 rounded-xl">
                    ระยะเวลา ~{" "}
                    {item.menu.reduce((accumulator, currentValue) => {
                      return accumulator + ~~currentValue.est_time;
                    }, 0)}{" "}
                    นาที
                  </Text>
                </View>
              </View>

              <View className="flex flex-row justify-between items-center">
                <Text className="font-notom  text-[18px]">สถานะ</Text>
                <Text className="font-notom  text-[18px]">กำลังรอ</Text>
              </View>

              <View className="flex flex-row justify-between items-center">
                <Text className="font-notom  text-[18px]">
                  จำนวนคิวก่อนหน้า
                </Text>
                <Text className="font-notom  text-[18px]">
                  {item.queue} คิว
                </Text>
              </View>
              <View>
                <View>
                  <Text className="font-notom  text-[18px]">รายการที่สั่ง</Text>
                </View>

                {/* mapตรงนี้ */}
                {item.menu.map((item1, i1) => (
                  <View
                    className="border-b-[1px] border-[#D9D9D9] mb-2"
                    key={i1}
                  >
                    <TouchableOpacity style={styles.gridItem1}>
                      <View style={styles.picCover1}>
                        <Image
                          className="w-full h-[150px]"
                          source={{
                            uri: item1.menu_pic,
                          }}
                        />
                      </View>
                      <View className="">
                        <View className="ml-3 space-y-1 mt-3">
                          <Text className="font-notoe text-[15px]">
                            {item1.name} x {item1.amount}
                          </Text>
                          <Text className="font-notom color-[#A3A3A3]">
                            {item1.description}
                          </Text>
                        </View>
                      </View>
                      <View className="top-0 right-0 mt-1 absolute mb-5 ">
                        <Text className="font-notom mt-2">{item1.price} ฿</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          ))}

          <View className="flex flex-row justify-between">
            <Text className="font-notom text-[18px]">ราคารวม</Text>
            <Text className="font-notom text-[18px]">
              {data.reduce((accumulator, currentValue) => {
                return accumulator + ~~currentValue.totalPrice;
              }, 0)}{" "}
              ฿{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default Receive;

const styles = StyleSheet.create({
  gridItem1: {
    width: "100%",
    marginVertical: 5,
    height: 110,
    overflow: "hidden",
    flexDirection: "row",
  },
  picCover1: {
    width: 92,
    height: 92,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
});
