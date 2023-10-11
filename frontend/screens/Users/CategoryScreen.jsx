import React, { useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import CategoryGrid from "../../components/Category/CategoryGrid";
import RestaurantData from "../../data/RestaurantData.json";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);

  const onPressDetail = (
    // id,
    // name,
    // pic,
    // type,
    // queue,
    // food_court,
    // menu,
    // phone
    data
  ) => {
    navigation.navigate("RestaurantDetail", {
      // id: id,
      // name: name,
      // pic: pic,
      // type: type,
      // queue: queue,
      // food_court: food_court,
      // menu: menu,
      // phone: phone,
      data: data,
    });
  };

  useEffect(() => {
    const result = RestaurantData.filter(
      (item) => route.params.type === item.type
    );
    setData(result);
  }, []);

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            {route.params.type}
          </Text>
          <View style={styles.gridContainer}>
            {data.map((item, type) => (
              <TouchableOpacity
                style={styles.gridItem}
                key={type}
                onPress={
                  () =>
                    onPressDetail(
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.type,
                      item.est_time,
                      item.menu_pic
                      // data
                    )
                  // item.id, item.name, item.pic, item.type, item.queue, item.food_court, item.menu, item.phone
                }
              >
                <View style={styles.picCover}>
                  <Image style={styles.image} source={{ uri: item.pic }} />
                </View>
                <View>
                  <Text className="font-notob mb-2 text-[16px]">
                    {item.name}
                  </Text>
                  <Text className="font-notor">
                    {item.type} • {item.queue}
                  </Text>
                </View>
              </TouchableOpacity>
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

export default CategoryScreen;
