import { React, useState, useEffect } from "react";
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
import AllRestaurant from "../../components/Home/AllRestaurant";
import dummyData from "../../data/Data";

const HomeScreen = ({ navigation }) => {
  const greetings = ["สวัสดี,", "สั่งอาหารโปรดของคุณที่นี่ !"];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {greetings.map((greeting, index) => (
            <Text key={index} style={styles.textHeader} className="font-notob">
              {greeting}
            </Text>
          ))}
          <SearchBar />
          <CarouselCategory />

          <Text className="font-notom" style={styles.textcat}>
            ร้านมาใหม่ 🔥
          </Text>
          <Carousel data={dummyData} />
          <Text style={styles.textcat} className="font-notom">
            ร้านอาหารทั้งหมด
          </Text>
          <AllRestaurant />
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

export default HomeScreen;
