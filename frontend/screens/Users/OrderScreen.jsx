import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useMemo, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../ReduxControl/CartReducer";

const OrderScreen = ({ navigation, route }) => {
  const [data, setData] = useState({
    id: route.params?.id || "",
    name: route.params?.name || "",
    description: route.params?.description || "",
    price: route.params?.price || "",
    type: route.params?.type || "",
    est_time: route.params?.est_time || "",
    menu_pic: route.params?.menu_pic || "",
    amount: 1,
  });

  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const addDataToCart = (data) => {
    dispatch(addToCart(data));
  };

  const handleIncrement = () => {
    setData({ ...data, amount: data.amount + 1 });
    console.log(data.amount);
  };

  const handleDecrement = () => {
    setData({ ...data, amount: data.amount > 0 ? data.amount - 1 : 0 });
    console.log(data.amount);
  };

  const [value, setValue] = React.useState("plate");
  const radioValue = useMemo(
    () => [
      { value: "plate", label: "ใส่จาน" },
      { value: "box", label: "ใส่กล่อง" },
    ],
    []
  );

  return (
    <SafeAreaView>
      <ScrollView className="bg-[#FFFFFF] h-full">
        <View style={styles.imageCon}>
          <Image className="w-full h-[200px]" source={{ uri: data.menu_pic }} />
        </View>

        <View className="mx-5 mt-5 space-y-3">
          <View className="flex flex-row justify-between">
            <View className="space-y-2">
              <Text className="font-notob text-[16px]">{data.name}</Text>
              <Text className="font-notoe ml-3 text-[#A3A3A3]">
                {data.description}
              </Text>
            </View>
            <View className="justify-end space-y-2">
              <Text className="font-notob text-[16px] ml-4">
                ฿ {data.price}
              </Text>
              <Text className="font-notoe text-[#A3A3A3] ">
                ~ {data.est_time}
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View className="space-y-2 mb-5 ">
            <Text className="font-notob text-[14px] mt-3">
              ภาชนะใส่อาหาร
              <Text className="text-[#A3A3A3]">(เลือก 1)</Text>
            </Text>
            <View className="mx-5 flex flex-row justify-between ">
              <View>
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <View>
                    {radioValue.map((item, index) => (
                      <View
                        key={index}
                        className="flex flex-row flex-wrap items-center bg-pink "
                      >
                        <RadioButton
                          value={item.label}
                          color="#F6D544"
                          uncheckedColor="#A3A3A3"
                        />
                        <Text className="font-notom text-[14px]">
                          {item.label}
                        </Text>
                      </View>
                    ))}
                  </View>
                </RadioButton.Group>
              </View>
              <View className="space-y-3">
                <Text className="font-notom text-[#A3A3A3] mt-3">+ 0 บาท</Text>
                <Text className="font-notom text-[#A3A3A3]">+ 5 บาท</Text>
              </View>
            </View>
            <Text className="font-notob text-[14px]">
              รายละเอียดเพิ่มเติม
              <Text className="text-[#A3A3A3]"> (optional)</Text>
            </Text>
            <View className="mx-4">
              <View style={styles.bar}>
                <TextInput
                  placeholder="เช่น ไม่ใส่ผัก"
                  style={styles.font}
                  maxLength={30}
                  className="overflow-hidden font-notom text-ellipsis ml-5 "
                />
              </View>
            </View>
          </View>
          <View className="flex-row items-center justify-center space-x-4 ">
            <TouchableOpacity
              className="p-2 rounded-full bg-[#D9D9D9]"
              onPress={() => handleDecrement(data.id)}
            >
              <AntDesign name="minus" size={15} color="black" />
            </TouchableOpacity>
            <Text className="font-notoe text-[18px]">{data.amount}</Text>
            <TouchableOpacity
              className="p-2 rounded-full bg-[#F6D544]"
              onPress={() => handleIncrement(data.id)}
            >
              <AntDesign name="plus" size={15} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex  items-center justify-center">
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
              onPress={() => addDataToCart(data)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
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
  line: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginHorizontal: 0,
  },
  bar: {
    height: 45,

    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "#D9D9D9",
    borderWidth: 1,
    shadowColor: "#000",
    flexDirection: "row",
  },
  radio: {
    height: 2,
    width: 2,
    borderColor: "#F6D544",
  },
});

export default OrderScreen;
