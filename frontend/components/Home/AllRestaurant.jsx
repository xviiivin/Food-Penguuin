import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import RestaurantData from "../../data/RestaurantData.json";

const { width, height } = Dimensions.get("window");
const AllRestaurant = ({ route }) => {
  const navigation = useNavigation();
  const onPressDetail = (id, name, pic, type, queue, food_court) => {
    navigation.navigate("RestaurantDetail", {
      id: id,
      name: name,
      type: type,
      queue: queue,
      pic: pic,
      food_court: food_court,
    });
  };
  return (
    <View style={styles.gridContainer}>
      {RestaurantData.map((gridItem, index) => (
        <TouchableOpacity
          style={styles.gridItem}
          key={index}
          onPress={() =>
            onPressDetail(
              gridItem.id,
              gridItem.name,
              gridItem.pic,
              gridItem.type,
              gridItem.food_court,
              gridItem.queue
            )
          }
        >
          <View style={styles.picCover}>
            <Image style={styles.image} source={{ uri: gridItem.pic }} />
          </View>
          <Text style={styles.textTitle}>{gridItem.name}</Text>
          <Text>
            {gridItem.type} • {gridItem.queue}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dis: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "45%",
    marginVertical: 5,
    height: 230,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  picCover: {
    width: "100%",
    height: 150,
    marginTop: 0,
    marginBottom: 15,
  },
});

export default AllRestaurant;
