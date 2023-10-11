import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import RestaurantData from "../../data/RestaurantData.json";

const { width, heigth } = Dimensions.get("window");

const CarouselCatCard = ({ imgUrl, type }) => {
  const [item, setItems] = useState([]);
  const navigation = useNavigation();

  const onPressDetail = (type) => {
    navigation.navigate("CategoryScreen", { type: type });
  };

  return (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => onPressDetail(type)}
      key={type}
    >
      <View className="content-center text-center">
        <View style={styles.circle}>
          <Image source={{ uri: imgUrl }} style={styles.image} />
        </View>
        <View>
          <Text className="font-notom mt-2 color-[#666666] text-[10]">
            {type}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { height: 40, width: 40, borderRadius: 10 },
  circle: {
    width: 62,
    height: 62,
    marginRight: 25,
    borderRadius: 62 / 2,
    justifyContent: "center",
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 3,
    elevation: 6,
    overflow: "hidden",
  },
  touch: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});

export default CarouselCatCard;
