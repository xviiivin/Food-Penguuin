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
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselCatCard from "./CarouselCatCard";
import RestaurantData from "../../data/RestaurantData.json";

const { width, height } = Dimensions.get("window");
const AllRestaurant = () => {
  //   const grid = [
  //     { id: "1", title: "Item 1" },
  //     { id: "2", title: "Item 2" },
  //     { id: "3", title: "Item 3" },
  //     { id: "4", title: "Item 4" },
  //     { id: "3", title: "Item 3" },
  //     { id: "4", title: "Item 4" },
  //   ];

  return (
    <View style={styles.gridContainer}>
      {RestaurantData.map((gridItem, index) => (
        <View key={index} style={styles.gridItem}>
          <View style={styles.picCover}>
            <Image style={styles.image} source={{ uri: gridItem.pic }} />
          </View>
          <Text style={styles.textTitle}>{gridItem.name}</Text>
          <Text>
            {gridItem.type} • {gridItem.queue}
          </Text>
        </View>
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
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "45%",
    marginVertical: 5,
    height: 250,
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
