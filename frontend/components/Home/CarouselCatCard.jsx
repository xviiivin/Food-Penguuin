import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const { width, heigth } = Dimensions.get("window");

const CarouselCatCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <View style={styles.circle}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
      </View>
      <Text style={styles.font}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { height: 40, width: 40, borderRadius: 10 },
  font: { fontSize: 15, fontWeight: "normal", color: "#666666", marginTop: 5 },
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
    shadowRadius: 5,
  },
});

export default CarouselCatCard;
