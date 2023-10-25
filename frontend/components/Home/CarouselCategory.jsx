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
import firebase from "./../../database/firebase";

const CarouselCategory = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async () => {
    try {
      const usersRef = firebase.firestore().collection('category');
      const snapshot = await usersRef.get();
      const allUsers = [];

      snapshot.forEach((doc) => {
        allUsers.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setData(allUsers);

    } catch (error) {
      console.error('Error getting documents: ', error);
      return [];
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {data.map((item, index) => (
        <CarouselCatCard key={index} imgUrl={item.image} type={item.name} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 5,
    paddingTop: 10,
    marginBottom: 30,
  },
});

export default CarouselCategory;
