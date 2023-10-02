import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.cardView} className="font-notom">
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.textView} className="font-notom">
        <Text className="font-notom"> {item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 4,
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: width - 20,
    height: height / 3,
    borderRadius: 10,
  },
  textView: {
    position: "absolute",
    bottom: 2,
    margin: 10,
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 10,
  },

});

export default CarouselItem;
