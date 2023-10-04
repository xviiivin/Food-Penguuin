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
  const grid = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];
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
              {grid.map((gridItem, index) => (
                <View key={index} style={styles.gridItem}>
                  <Text>{gridItem.title}</Text>
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
