import { React, useState, useEffect } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const RestaurantDetail = ({ navigation, route }) => {
  const [id, setId] = useState(route.params?.id || "");
  const [name, setName] = useState(route.params?.name || "");
  const [type, setType] = useState(route.params?.type || "");
  const [queue, setQueue] = useState(route.params?.queue || "");
  const [pic, setPic] = useState(route.params?.pic || "");
  const [food_court, setFood_court] = useState(route.params?.food_court || "");
  const [menu, setMenu] = useState(route.params?.menu || "");
  const [phone, setPhone] = useState(route.params?.phone || "");

  const onPressDetail = (
    id,
    name,
    description,
    price,
    type,
    est_time,
    menu_pic
  ) => {
    navigation.navigate("OrderScreen", {
      id: id,
      name: name,
      description: description,
      price: price,
      type: type,
      est_time: est_time,
      menu_pic: menu_pic,
    });
  };
  console.log(route.params);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageCon}>
          <Image style={styles.image} source={{ uri: route.params.pic }} />
        </View>
        <View className="my-5 mx-5">
          <View className="flex flex-row mb-2">
            <Ionicons name="location" size={20} color="#F6D544" />
            <Text className="font-notoe ml-2">{route.params.food_court}</Text>
          </View>
          <View className="flex flex-row mb-2">
            <Ionicons
              name="restaurant"
              className="ml-2"
              size={20}
              color="#F6D544"
            />
            <Text className="font-notoe ml-2">{route.params.type}</Text>
          </View>
          <View className="flex flex-row justify-between">
            <View className="flex flex-row mb-2">
              <FontAwesome5
                name="phone-alt"
                className=""
                size={19}
                color="#F6D544"
              />
              <Text className="font-notoe ml-2">{route.params.phone}</Text>
            </View>
            <View className="px-4 justify-center rounded-lg  bg-[#F6D544]">
              <Text className="font-notoe ">{route.params.queue}</Text>
            </View>
          </View>
        </View>

        <View style={styles.line} />

        <View className="mx-5 mt-3">
          <View style={styles.container}>
            <Text className="font-notoe text-[16px] mb-3 ">เมนูขายดี 🔥</Text>
            <View style={styles.gridContainer}>
              {/* menu && */}
              {menu.slice(0, 2).map((item, index) => (
                <TouchableOpacity
                  style={styles.gridItemCon}
                  key={index}
                  onPress={() =>
                    onPressDetail(
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.type,
                      item.est_time,
                      item.menu_pic
                    )
                  }
                >
                  <View style={styles.picCover}>
                    <Image
                      style={styles.image}
                      source={{ uri: item.menu_pic }}
                    />
                  </View>
                  <View className="flex flex-row justify-between">
                    <View className="ml-3">
                      <Text className="font-notoe text-[15px]">
                        {item.name}
                      </Text>
                      <Text className="font-notoe color-[#A3A3A3]">
                        ฿ {item.price}
                      </Text>
                    </View>
                    <View className="justify-end">
                      <AntDesign
                        name="pluscircle"
                        className=""
                        size={25}
                        color="#F6D544"
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.line} />

        <View className="mx-5">
          <Text className="font-notoe text-[16px] my-3">เมนูทั้งหมด</Text>
          <View style={styles.gridContainer1}>
            {/* menu && */}
            {menu.map((item, index) => (
              <TouchableOpacity
                style={styles.gridItem1}
                key={index}
                onPress={() =>
                  onPressDetail(
                    item.id,
                    item.name,
                    item.description,
                    item.price,
                    item.type,
                    item.est_time,
                    item.menu_pic
                  )
                }
              >
                <View style={styles.picCover1}>
                  <Image
                    style={styles.image1}
                    source={{ uri: item.menu_pic }}
                  />
                </View>
                <View>
                  <View className="ml-3 space-y-1 mt-3">
                    <Text className="font-notoe text-[15px]">{item.name}</Text>
                    <Text className="font-notom color-[#A3A3A3]">
                      {item.description}
                    </Text>
                    <Text className="font-notom mt-2">{item.price} ฿</Text>
                  </View>
                </View>
                <View className="bottom-0 right-0  absolute mb-5 ">
                  <AntDesign
                    name="pluscircle"
                    className=""
                    size={23}
                    color="#F6D544"
                  />
                </View>
              </TouchableOpacity>
            ))}
            <View style={styles.line} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItemCon: {
    width: "48%",
    marginVertical: 5,
    height: 230,
    borderRadius: 10,
    overflow: "hidden",
  },
  picCover: {
    width: "100%",
    height: 162,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 162,
  },
  line: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },

  gridContainer1: {
    flexDirection: "column",
    flexWrap: "",
    justifyContent: "space-between",
  },
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

export default RestaurantDetail;
