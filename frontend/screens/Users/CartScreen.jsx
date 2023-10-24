import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  Pressable,
} from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import {
  PanGestureHandler,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { removeFromCart } from "../../ReduxControl/CartReducer";

const CategoryScreen = ({ navigation, route }) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const dispatch = useDispatch();
  const removeItemFromcart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text className="font-notom text-[16px] mb-3">รายการที่สั่ง 🧑‍🍳</Text>

        {cart.map((item) => (
          <View key={item.id}>
            <Text className="font-notor text-[15px]">
              {item.restaurantName}
            </Text>

            <View style={styles.cartContainer}>
              <View key={item.id} style={styles.gridItem1}>
                <Image
                  style={styles.picCover1}
                  source={{
                    uri: item.menu_pic,
                  }}
                />
                <View className="ml-3 space-y-1 mt-3">
                  <Text className="font-notoe text-[15px]">
                    {item.name} x{item.amount}
                  </Text>
                  <Text className="font-notom color-[#A3A3A3]">
                    {item.description}
                  </Text>
                </View>

                <View className="top-0 right-0 mt-3 absolute mb-5 mr-3  h-full ">
                  <Text className="font-notom ">{item.price}</Text>
                  <Pressable className="absolute bottom-5 ">
                    <Ionicons
                      name="trash-bin-outline"
                      size={18}
                      color="red"
                      onPress={() => removeItemFromcart(item)}
                    />
                  </Pressable>
                </View>
                <View style={styles.line} />
              </View>
            </View>
          </View>
        ))}

        <View className="flex-row items-center w-full mt-10 justify-center space-x-[280px] ">
          <Text className="font-notom ">ราคา</Text>
          <Text className="font-notom ">บาท</Text>
        </View>
        <View className="flex items-center justify-center">
          <Button
            title="เพิ่มลงตะกร้า"
            buttonStyle={{
              backgroundColor: "#F6D544",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{
              fontWeight: "bold",
              color: "black",
            }}
            // onPress={() => }
          />
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
  cartContainer: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  gridItem1: {
    width: "96%",
    marginTop: 5,
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  picCover1: {
    width: 92,
    height: 92,
    borderRadius: 10,
    overflow: "hidden",
  },
  line: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginHorizontal: 0,
  },
});

export default CategoryScreen;
