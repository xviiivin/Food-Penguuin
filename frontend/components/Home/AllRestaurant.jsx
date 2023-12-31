import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import RestaurantData from '../../data/RestaurantData.json';
import firebase from '../../database/firebase';
import { getGetGet } from '../../database/history';
const AllRestaurant = ({ route, searchText }) => {
  const navigation = useNavigation();
  const onPressDetail = (
    id,
    name,
    pic,
    type,
    queue,
    food_court,
    menu,
    phone,
  ) => {
    navigation.navigate('RestaurantDetail', {
      id: id,
      name: name,
      pic: pic,
      type: type,
      queue: queue,
      food_court: food_court,
      menu: menu,
      phone: phone,
    });
  };

  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = () => {

  };

  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = async () => {
    try {
      const usersRef = firebase.firestore().collection('restaurant').where("status", '==', 1);
      const snapshot = await usersRef.get();
      const allUsers = [];

      const promises = snapshot.docs.map(async (doc) => {
        const datf = doc.data();
        const test = await getGetGet(datf.name)
        allUsers.push({
          id: doc.id,
          queue: test.length,
          ...doc.data(),
        });
      });
      await Promise.all(promises);

      setData(allUsers);
      setFilteredData(allUsers);
    } catch (error) {
      console.error('Error getting documents: ', error);
      return [];
    }
  };


  const caltime = (item) => {
    const totalAmount = item.menu.reduce((total, item1) => {
      return total + ~~item1.est_time.split(" ")[0];
    }, 0);

   return (totalAmount / item.menu.length) * item.queue
  }

  useEffect(() => {
    const filteredItems = data.filter(item => item.name.includes(searchText));
    setFilteredData(filteredItems);
  }, [searchText])

  return data && (
    <View style={styles.gridContainer}>
      {filteredData.map((item, index) => (
        <TouchableOpacity
          style={styles.gridItem}
          key={index}
          onPress={() =>
            onPressDetail(
              item.id,
              item.name,
              item.pic,
              item.type,
              item.queue,
              item.food_court,
              item.menu,
              item.phone,
            )
          }
        >
          <View style={styles.picCover}>
            <Image style={styles.image} source={{ uri: item.pic }} />
          </View>
          <Text className="font-notob  text-[16px]">{item.name}</Text>
          <Text className="font-notor color-[#A3A3A3]">
            {item.type} • {item.queue} คิว
          </Text>
          {item.queue > 0 && (
            <Text className="font-notor  color-[#A3A3A3]">
              
              ระยะเวลา: {caltime(item)} นาที
            </Text>
          )
          }
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dis: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '45%',
    marginVertical: 5,
    height: 230,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  picCover: {
    width: '100%',
    height: 150,
    marginTop: 0,
    marginBottom: 15,
  },
});

export default AllRestaurant;
