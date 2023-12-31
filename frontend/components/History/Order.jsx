import { React, useState, useEffect, useCallback } from "react";
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
} from "react-native";
import { getUser } from "../../database/user";
import { getResWithUIDTrue } from "../../database/history";
import { useFocusEffect } from "@react-navigation/native";
const Order = () => {
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
    const data1 = await getResWithUIDTrue(data.uid);
    setData(data1);
  };

  return (
    data && (
      <ScrollView className="p-10 bg-white w-full">
        <View className="flex gap-6 mb-20">
          {data.map((item, i) => (
            <View key={i}>
              <View className="flex flex-row justify-between items-center">
                <View>
                  <Text className="font-notom text-[20px]">{item.nameres}</Text>
                  <Text className="font-notom">
                    {formatTimestamp(item.created_at.seconds)}
                  </Text>
                </View>
              </View>

              <View className="flex flex-row justify-between items-center">
                <Text className="font-notom  text-[18px]">สถานะ</Text>
                <Text className="font-notom  text-[18px]">สำเร็จ</Text>
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

        </View>
      </ScrollView>
    )
  );
};
export default Order;

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
  image1: {
    width: "100%",
    height: 150,
  },
});
