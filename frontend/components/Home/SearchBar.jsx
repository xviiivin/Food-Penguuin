import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Image
          source={require("../../assets/Search_alt.png")}
          style={styles.image}
        />
        <TextInput placeholder="ค้นหาในแอปฯ Food penguin" style={styles.font} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    height: 44,
    width: 340,
    borderRadius: 15,
    backgroundColor: "white",
    borderColor: "#FEE57B",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 3,
    elevation: 6,
    shadowRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  font: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8D8B8B",
    paddingLeft: 10,
    width: " 100",
    marginTop: 5,
  },
  container: { marginTop: 15, marginBottom: 15 },
  image: { marginTop: 7, marginLeft: 12 },
});

export default SearchBar;
