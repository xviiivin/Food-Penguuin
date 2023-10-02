import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CarouselCatCard from "./CarouselCatCard";
import CatData from "../../data/CatData.json";

const CarouselCategory = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {CatData.map((item, index) => (
        <CarouselCatCard key={index} imgUrl={item.imgURL}  title={item.title} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: { paddingHorizontal: 5, paddingTop: 10, marginBottom: 30 },
});

export default CarouselCategory;
