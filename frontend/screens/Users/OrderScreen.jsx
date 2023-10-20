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
import { useRoute } from "@react-navigation/native";
import RestaurantDetail from "./RestaurantDetail";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

const OrderScreen = ({ navigation, route }) => {
  const [id, setId] = useState(route.params?.id || "");
  const [name, setName] = useState(route.params?.name || "");
  const [description, setDescription] = useState(
    route.params?.description || ""
  );
  const [price, setPrice] = useState(route.params?.price || "");
  const [type, setType] = useState(route.params?.type || "");
  const [est_time, setTime] = useState(route.params?.est_time || "");
  const [menu_pic, setPic] = useState(route.params?.menu_pic || "");
  const [amount, setAmount] = useState(0);

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  const dispatch = useDispatch();
  const addItemTocart = (item) => {
    dispatch(addItemTocart(item));
  };

  const handleIncrement = () => {
    setAmount(amount + 1);
    console.log(amount);
  };

  const handleDecrement = () => {
    setAmount(amount > 0 ? amount - 1 : 0);
    console.log(amount);
  };

  const [value, setValue] = React.useState("plate");
  const radioValue = useMemo(
    () => [
      { value: "plate", label: "ใส่จาน" },
      { value: "box", label: "ใส่กล่อง" },
    ],
    []
  );
  const onPressDetail = (
    id,
    name,
    description,
    price,
    type,
    est_time,
    menu_pic
  ) => {
    navigation.navigate("CartScreen", {
      id: id,
      name: name,
      description: description,
      price: price,
      type: type,
      est_time: est_time,
      menu_pic: menu_pic,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView className="bg-[#FFFFFF] h-full">
        <View style={styles.imageCon}>
          <Image className="w-full h-[200px]" source={{ uri: menu_pic }} />
        </View>

        <View className="mx-5 mt-5 space-y-3">
          <View className="flex flex-row justify-between">
            <View className="space-y-2">
              <Text className="font-notob text-[16px]">{name}</Text>
              <Text className="font-notoe ml-5 text-[#A3A3A3]">
                {description}
              </Text>
            </View>
            <View className="justify-end space-y-2">
              <Text className="font-notob text-[16px]">฿ {price + "   "} </Text>
              <Text className="font-notoe text-[#A3A3A3] ">~ {est_time}</Text>
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
            <View style={styles.bar}>
              <TextInput
                placeholder="เช่น ไม่ใส่ผัก"
                style={styles.font}
                maxLength={30}
                className="overflow-hidden font-notom text-ellipsis ml-5"
              />
            </View>
          </View>

          <View className="flex-row items-center justify-center space-x-4 ">
            <TouchableOpacity
              className="p-2 rounded-full bg-[#D9D9D9]"
              onPress={() => handleDecrement(id)}
            >
              <AntDesign name="minus" size={15} color="black" />
            </TouchableOpacity>
            <Text className="font-notoe text-[18px]">{amount}</Text>
            <TouchableOpacity
              className="p-2 rounded-full bg-[#F6D544]"
              onPress={() => handleIncrement(id)}
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
              onPress={
                () => addItemTocart(item)
                // onPressDetail(
                //   // id,
                //   // name,
                //   // description,
                //   // price,
                //   // type,
                //   // est_time,
                //   // menu_pic
                //   addItemTocart(item)

                // )
              }
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
    width: 340,
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
