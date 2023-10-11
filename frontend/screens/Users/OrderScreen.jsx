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
  Button,
} from "react-native";
// import { RadioButton } from "react-native-paper";
import RadioGroup from "react-native-radio-buttons-group";
import { useMemo, useState } from "react";
import CategoryGrid from "../../components/Category/CategoryGrid";
import RestaurantData from "../../data/RestaurantData.json";
import { useRoute } from "@react-navigation/native";
import RestaurantDetail from "./RestaurantDetail";

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

  // const [checked, setChecked] = React.useState("first");
  const [selectedId, setSelectedId] = useState();

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "ใส่จาน  ",
        value: "plate",
        style: styles.radio,
      },
      {
        id: "2",
        label: "ใส่กล่อง",
        value: "box",
        style: styles.radio,
      },
    ],
    []
  );
  return (
    <SafeAreaView>
      <ScrollView className="bg-[#FFFFFF] h-full">
        <View style={styles.imageCon}>
          <Image className="w-full h-[200px]" source={{ uri: menu_pic }} />
        </View>

        <View className="mx-5 mt-5 space-y-3">
          <View className="flex flex-row justify-between">
            <View className="space-y-2">
              <Text className="font-notom">{name}</Text>
              <Text className="font-notom ml-5 text-[#A3A3A3]">
                {description}
              </Text>
            </View>
            <View className="justify-end space-y-2">
              <Text className="font-notom">฿ {price + "   "} </Text>
              <Text className="font-notom text-[#A3A3A3] ">~ {est_time}</Text>
            </View>
          </View>

          <View style={styles.line} />

          <View className="space-y-3">
            <Text className="font-notom">
              ภาชนะใส่อาหาร{"   "}{" "}
              <Text className="text-[#A3A3A3]">(เลือก 1)</Text>
            </Text>
            <View className="mx-5 flex flex-row justify-between ">
              <View>
                {/* <Text className="font-notom">ใส่จาน</Text>
                <Text className="font-notom">ใส่กล่อง</Text> */}

                <RadioGroup
                  radioButtons={radioButtons}
                  onPress={setSelectedId}
                  selectedId={selectedId}
                />
              </View>
              <View>
                <Text className="font-notom text-[#A3A3A3]">+ 0 บาท</Text>
                <Text className="font-notom text-[#A3A3A3]">+ 5 บาท</Text>
              </View>
            </View>
            <Text className="font-notom">
              รายละเอียดเพิ่มเติม{"   "}
              <Text className="text-[#A3A3A3]">(optional)</Text>
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

          <View className="bg-[#F6D544]">
            <View></View>
            <Button
              // onPress={RestaurantDetail}
              title="เพิ่มลงตะกร้า"
              color="#F6D544"
              className="rounde text-[#000000]"
              // accessibilityLabel="Learn more about this purple button"
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
    marginHorizontal: 20,
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
