import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { removeFromCart } from "../../ReduxControl/CartReducer";

const CategoryScreen = ({ navigation, route }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const groupedData = {};

    cart.forEach((item) => {
      const { restaurantName } = item;
      if (!groupedData[restaurantName]) {
        groupedData[restaurantName] = [];
      }
      groupedData[restaurantName].push(item);
    });

    const restaurantArray = Object.keys(groupedData).map((restaurantName) => ({
      restaurantName,
      list: groupedData[restaurantName],
    }));

    setData(restaurantArray);

    const totalAmount = cart.reduce((total, item) => {
      const totalPrice = item.price * item.amount;
      return total + totalPrice;
    }, 0);

    setTotalAmount(totalAmount);
  }, []);

  const dispatch = useDispatch();
  const removeItemFromcart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.container}>
        {data.map((item, i) => (
          <View key={i}>
            <Text className="font-notor text-[15px] ml-2 my-2 font-notom text-[16px]">
              {item.restaurantName}
            </Text>

            {item.list.map((item1, i1) => (
              <View style={styles.cartContainer}>
                <View key={i1} style={styles.gridItem1}>
                  <Image
                    style={styles.picCover1}
                    source={{
                      uri: item1.menu_pic,
                    }}
                  />
                  <View className="ml-3 space-y-1 mt-3">
                    <Text className="font-notoe text-[15px]">
                      {item1.name} x{item1.amount}
                    </Text>
                    <Text className="font-notom color-[#A3A3A3]">
                      {item1.description}
                    </Text>
                  </View>

                  <View className="top-0 right-0 mt-3 absolute mb-5 mr-3  h-full ">
                    <Text className="font-notom ">{item1.price}</Text>
                    <Pressable className="absolute bottom-5 ">
                      <Ionicons
                        name="trash-bin-outline"
                        size={18}
                        color="red"
                        onPress={() => removeItemFromcart(item)}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
            <View style={styles.line} />
          </View>
        ))}

        {cart.length > 0 ? (
          <>
            <View className="flex-row items-center w-full mt-10 justify-between">
              <Text className=" font-notoe text-[16px]">ราคา</Text>
              <Text className=" font-notoe text-[16px] ">
                {" "}
                {totalAmount} บาท
              </Text>
            </View>
            <View className="flex items-center justify-center ">
              <Button
                title="ยืนยัน"
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
                  fontWeight: 700,
                  color: "black",
                }}
              />
            </View>
          </>
        ) : (
          <View className="flex items-center justify-center content-center h-full pt-[50%]">
            <Text className="font-notor text-[20px] color-[#A3A3A3]">
              ยังไม่มีสินค้าในตะกร้า
            </Text>
            <Text className="font-notor text-[20px] color-[#A3A3A3]">
              เพิ่มเลย 🛒
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    height: "100%",
    marginHorizontal: 10,
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
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
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 8,
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
});

export default CategoryScreen;
