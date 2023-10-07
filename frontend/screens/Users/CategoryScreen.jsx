import React, { useEffect } from "react";
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

const CategoryScreen = ({ route }) => {

  const [data, setData] = useState([])

  useEffect(() => {
    const result = RestaurantData.filter((item) => route.params.type === item.type)
    setData(result)
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            {route.params.type}
          </Text>
          <View style={styles.gridContainer}>
            {data.map((item, type) => (
              <View key={type} style={styles.gridItem}>
                <Text>{item.name}</Text>
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
