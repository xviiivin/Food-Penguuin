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
import { useState } from "react";
import CategoryGrid from "../../components/Category/CategoryGrid";
import RestaurantData from "../../data/RestaurantData.json";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = ({ navigation }) => {
  const grid = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
    { id: "3", title: "Item 3" },
    { id: "4", title: "Item 4" },
  ];
  //   const gridItem = (itemData) => {
  //     return (
  //       <CategoryGrid
  //         title={itemData.item.restaurant_name}
  //         color={itemData.item.restaurant_pic}

  //         onSelect={() => {
  //           navigation.navigate("CartScreen", {
  //             categoryId: itemData.item.id,
  //             categoryTitle: itemData.item.restaurant_name,
  //           });
  //         }}
  //       />
  //     );
  //   };

  //   const {
  //     params: { id, name, phone, type, pic, food_court },
  //   } = useRoute();

  return (
    //     <FlatList data={RestaurantData} renderItem={gridItem} numColumns={2} />
    //     <Text>{name}</Text>
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            ร้านมาใหม่ 🔥
          </Text>
          <View style={styles.gridContainer}>
            {grid.map((gridItem, index) => (
              <View key={index} style={styles.gridItem}>
                <Text>{gridItem.title}</Text>
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
  //   gridItem: {
  //     flex: 1,
  //     margin: 15,
  //     height: 150,
  //   },
  //   container: {
  //     flex: 1,
  //     borderRadius: 10,
  //     shadowColor: "black",
  //     shadowOpacity: 0.26,
  //     shadowOffset: { width: 0, height: 2 },
  //     shadowRadius: 10,
  //     elevation: 3,
  //     padding: 15,
  //     justifyContent: "flex-end",
  //     alignItems: "flex-end",
  //   },
  //   title: {
  //     fontSize: 22,
  //     fontWeight: "bold",
  //     textAlign: "right",
  //   },
});

export default CategoryScreen;
