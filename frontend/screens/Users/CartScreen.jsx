import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const CategoryScreen = ({ navigation, route }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <SafeAreaView className="w-full bg-white flex-1">
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            รายการที่สั่ง 🔥
          </Text>

          <View className="border-b-[1px] border-[#D9D9D9] mb-2">
            {cart.map((item) => (
              <TouchableOpacity key={item.id} style={styles.gridItem1}>
                <View style={styles.picCover1}>
                  <Image
                    className="w-full h-[150px]"
                    source={{
                      uri: item.menu_pic,
                    }}
                  />
                </View>
                <View className="">
                  <View className="ml-3 space-y-1 mt-3">
                    <Text className="font-notoe text-[15px]">
                      {item.name} x{item.amount}
                    </Text>
                    <Text className="font-notom color-[#A3A3A3]">
                      {item.description}
                    </Text>
                  </View>
                </View>
                <View className="top-0 right-0 mt-1 absolute mb-5 ">
                  <Text className="font-notom mt-2">{item.price}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  gridItem1: {
    width: "100%",
    marginVertical: 5,
    height: 110,
    overflow: "hidden",
    flexDirection: "row",
  },
  dis: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    alignSelf: "center",
    marginLeft: 100,
  },
  icon: {
    marginRight: 10,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 5,
  },
  textcat: {
    fontSize: 16,
    fontWeight: "300",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    borderRadius: 10,
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

export default CategoryScreen;
