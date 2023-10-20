import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../../components/Home/Carousel";
import CarouselCategory from "../../components/Home/CarouselCategory";
import SearchBar from "../../components/Home/SearchBar";
import dummyData from "../../data/Data";

const CategoryScreen = ({ navigation }) => {
  const greetings = ["สวัสดี,", "สั่งอาหารโปรดของคุณที่นี่ !"];
  const grid = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];

  return (
    <SafeAreaView className="w-full bg-white flex-1">
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            ร้านมาใหม่ 🔥
          </Text>
          <View style={styles.gridContainer}>
            {grid.map((item, index) => (
              <View key={index} style={styles.gridItem}>
                <Text>{item.title}</Text>
              </View>
            ))}
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
});

export default CategoryScreen;
