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
import firebase from "../../database/firebase";
import { getGetGet } from "../../database/history";

const CategoryScreen = ({ navigation, route }) => {
  const [data, setData] = useState([]);

  const onPressDetail = (index) => {
    navigation.navigate("RestaurantDetail", data[index]);
  };

  useEffect(() => {
    getAllUsers()
  }, []);


  const getAllUsers = async () => {
    try {
      const usersRef = firebase.firestore().collection('restaurant');
      const snapshot = await usersRef.get();
      const allUsers = [];

      const promises = snapshot.docs.map(async (doc) => {
        if (doc.data().type === route.params.type) {
          const datf = doc.data();
          const test = await getGetGet(datf.name)
          allUsers.push({
            id: doc.id,
            queue: test.length,
            ...doc.data(),
          });
        }
      });
      await Promise.all(promises);
      
      setData(allUsers);

    } catch (error) {
      console.error('Error getting documents: ', error);
      return [];
    }
  };



  return (
    <SafeAreaView className="bg-white w-full flex-1">
      <ScrollView>
        <View style={styles.container}>
          <Text className="font-notom" style={styles.textcat}>
            ร้าน{route.params.type}ทั้งหมด
          </Text>
          <View style={styles.gridContainer}>
            {data.map((item, index) => (
              <TouchableOpacity
                style={styles.gridItem}
                key={index}
                onPress={() => onPressDetail(index)}
              >
                <View style={styles.picCover}>
                  <Image style={styles.image} source={{ uri: item.pic }} />
                </View>
                <View>
                  <Text className="font-notob mb-2 text-[16px]">
                    {item.name}
                  </Text>
                  <Text className="font-notor">
                    {item.type} • {item.queue} คิว
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
