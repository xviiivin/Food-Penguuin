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
  Alert
} from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { removeFromCart, removeAllFromCart } from "../../ReduxControl/CartReducer";

import firebase from "../../database/firebase";
import { getUser } from "../../database/user";
const CategoryScreen = ({ navigation, route }) => {
  const cart = useSelector((state) => state.cart.cart);
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountNoBox, setTotalAmountNoBox] = useState(0);
  const [totalAmountBox, setTotalAmountBox] = useState(0);
  const [data1, setData1] = useState(null)
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
      const totalPrice = (item.price * item.amount) + (item.container === "ใส่กล่อง" ? 5 * item.amount : 0);
      return total + totalPrice;
    }, 0);

    const totalAmountNoBox = cart.reduce((total, item) => {
      const totalPrice = (item.price * item.amount);
      return total + totalPrice;
    }, 0);

    const totalAmountBox = cart.reduce((total, item) => {
      const totalPrice = (item.container === "ใส่กล่อง" ? 5 * item.amount : 0);
      return total + totalPrice;
    }, 0);


    setTotalAmount(totalAmount);
    setTotalAmountNoBox(totalAmountNoBox);
    setTotalAmountBox(totalAmountBox);
    getdata()
  }, [cart]);

  const dispatch = useDispatch();
  const removeItemFromcart = (item) => {
    dispatch(removeFromCart(item));
  };

  const getdata = async () => {
    const data = await getUser()
    setData1(data)
  }

  const addres = async () => {

    data.forEach(async (item) => {

      const totalAmount = item.list.reduce((total, item) => {
        const totalPrice = (item.price * item.amount) + (item.container === "ใส่กล่อง" ? 5 * item.amount : 0);
        return total + totalPrice;
      }, 0);

      await firebase
        .firestore()
        .collection("history")
        .add({
          useruid: data1.uid,
          nameres: item.restaurantName,
          menu: item.list,
          totalPrice: totalAmount,
          status: false,
          created_at: new Date()
        });
    });

    Alert.alert('แจ้งเตือน', "ยืนยันสินค้าเรียบร้อย", [
      { text: 'ตกลง', onPress: () => console.log('ตกลง') },
    ]);
    dispatch(removeAllFromCart());

    navigation.navigate("UserHistory")


  }

  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.container}>
        {data.map((item, i) => (
          <View key={i}>
            <Text className="font-notor text-[15px] ml-2 my-2 font-notom text-[16px]">
              {item.restaurantName}
            </Text>

            {item.list.map((item1, i1) => (
              <View key={i1} style={styles.cartContainer}>
                <View style={styles.gridItem1}>
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
                        onPress={() => removeItemFromcart(item1)}
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
              <Text className=" font-notoe  text-[16px]">ราคาอาหาร</Text>
              <Text className=" font-notoe  text-[16px] ">
                {" "}
                {totalAmountNoBox} บาท
              </Text>
            </View>
            <View className="flex-row items-center w-full mt-4 justify-between">
              <Text className=" font-notoe text-[16px]">ราคากล่อง</Text>
              <Text className=" font-notoe text-[16px] ">
                {" "}
                {totalAmountBox} บาท
              </Text>
            </View>
            <View className="flex-row items-center w-full mt-4 justify-between">
              <Text className=" font-notoe text-[16px]">ราคารวม</Text>
              <Text className=" font-notoe text-[16px] ">
                {" "}
                {totalAmount} บาท
              </Text>
            </View>

            <View className="flex items-center justify-center ">
              <Button
                onPress={() => addres()}
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
