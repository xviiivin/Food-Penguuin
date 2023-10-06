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

const RestaurantDetail = ({ navigation, route }) => {
  const [id, setId] = useState(route.params?.id || "");
  const [name, setName] = useState(route.params?.name || "");
  const [type, setType] = useState(route.params?.type || "");
  const [queue, setQueue] = useState(route.params?.queue || "");
  const [pic, setPic] = useState(route.params?.pic || "");
  const [food_court, setFood_court] = useState(route.params?.food_court || "");
  const [menu, setMenu] = useState(route.params?.menu || "");
  console.log(route.params);
  console.log(route.params?.menu || "");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageCon}>
          <Image style={styles.image} source={{ uri: route.params.pic }} />
        </View>
        <View className="my-10 mx-5">
          <Text className="font-notom">{route.params.id}</Text>
          <Text className="font-notom">{route.params.name}</Text>
          <Text className="font-notom">{route.params.type}</Text>
          <Text className="font-notom">{route.params.food_court}</Text>
          <Text className="font-notom">{route.params.queue}</Text>
        </View>

        <View style={styles.line} />

        <View className="mx-5 mt-3">
          <View style={styles.container}>
            <Text className="font-notom mb-3" style={styles.textcat}>
              เมนูขายดี 🔥
            </Text>

            <View style={styles.gridContainer}>
              {menu.map((gridItem, index) => (
                <TouchableOpacity
                  style={styles.gridItem}
                  key={index}
                  onPress={() => onPressDetail()}
                >
                  <View style={styles.picCover}>
                    <Image
                      style={styles.image}
                      source={{ uri: gridItem.menu_pic }}
                    />
                  </View>
                  <View className="ml-3 ">
                    <Text className="font-notom">{gridItem.name}</Text>
                    <Text className="font-notom">{gridItem.price}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.line} />

        <View className="mx-5">
          <Text className="font-notom my-3" style={styles.textcat}>
            เมนูทั้งหมด
          </Text>
          <View style={styles.gridContainer1}>
            {menu.map((gridItem, index) => (
              <TouchableOpacity
                style={styles.gridItem1}
                key={index}
                onPress={() => onPressDetail()}
              >
                <View style={styles.picCover1}>
                  <Image
                    style={styles.image1}
                    source={{ uri: gridItem.menu_pic }}
                  />
                </View>
                <View className="ml-3 space-y-1 mt-3">
                  <Text className="font-notom ">{gridItem.name}</Text>
                  <Text className="font-notom">{gridItem.description}</Text>
                  <Text className="font-notom mt-2">{gridItem.price} ฿</Text>
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
  gridItem: {
    width: "48%",
    marginVertical: 5,
    height: 230,
    borderRadius: 10,
    overflow: "hidden",
  },
  picCover: {
    width: "100%",
    height: 150,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  line: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },

  gridContainer1: {
    flexDirection: "column",
    flexWrap: "wrap",
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
