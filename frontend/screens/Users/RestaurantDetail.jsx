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
} from "react-native";

const RestaurantDetail = ({ navigation, route }) => {
  const [id, setId] = useState(route.params?.id || "")
  const [name, setName] = useState(route.params?.name || "")
  const [type, setType] = useState(route.params?.type || "")
  const [queue, setQueue] = useState(route.params?.queue || "")
  const [pic, setPic] = useState(route.params?.pic || "")
  const [food_court, setFood_court] = useState(route.params?.food_court || "")
  const [menu, setMenu] = useState(route.params?.menu || "")
  console.log(route.params)
  console.log(route.params?.menu || "")
  // id: id,
  // name: name,
  // type: type,
  // queue: queue,
  // pic: pic,
  // food_court: food_court,
  // menu: menu

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
            <Text className="font-notom" style={styles.textcat}>
              เมนูขายดี 🔥
            </Text>
            <View style={styles.gridContainer}>
              {menu.map((gridItem, index) => (
                <View key={index} style={styles.gridItem}>
                  <Text>{gridItem.name} {gridItem.price}</Text>
                </View>
              ))}
            </View>
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
  },
  textHeader: {
    fontSize: 25,
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
  imageCon: {
    backgroundColor: "pink",
    width: "100%",
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
  },
  line: {
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
});

export default RestaurantDetail;
