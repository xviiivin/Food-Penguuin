import { React, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../../components/Home/Carousel';
import CarouselCategory from '../../components/Home/CarouselCategory';
import SearchBar from '../../components/Home/SearchBar';
import AllRestaurant from '../../components/Home/AllRestaurant';
import dummyData from '../../data/Data';
import firebase from "./../../database/firebase";
import { getUser } from '../../database/user';
import { getResWithUID } from '../../database/history';
const HomeScreen = ({ navigation }) => {
  const greetings = ['สวัสดี,', 'สั่งอาหารโปรดของคุณที่นี่ !'];
  const [searchText, setSearchText] = useState('');

  const [test, setTest] = useState([])

  useEffect(() => {
    getAllData()
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getUser();
    const data1 = await getResWithUID(data.uid);

    data1.forEach((item) => {
      if (item.queue === 3) {
        Alert.alert(item.nameres, "คุณเหลือ 3 คิวก่อนหน้า");
      } else if (item.queue === 2) {
        Alert.alert(item.nameres, "คุณเหลือ 2 คิวก่อนหน้า");
      } else if (item.queue === 1) {
        Alert.alert(item.nameres, "คุณเหลือ 1 คิวก่อนหน้า");
      } else if (item.queue === 0) {
        Alert.alert(item.nameres, "ถึงคิวของคุณแล้ว");
      }
    });
  }

  const getAllData = async () => {
    try {
      const usersRef = firebase.firestore().collection('restaurant').where("status", '==', 1);
      const snapshot = await usersRef.get();
      const allUsers = [];

      snapshot.forEach((doc) => {
        allUsers.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setTest(allUsers);

    } catch (error) {
      console.error('Error getting documents: ', error);
      return [];
    }
  };

  return test && (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {greetings.map((greeting, index) => (
            <Text key={index} style={styles.textHeader} className="font-notob">
              {greeting}
            </Text>
          ))}
          <SearchBar searchText={searchText} setSearchText={setSearchText} />

          <View>
            <CarouselCategory />
            <Text className="font-notom" style={styles.textcat}>
              ร้านมาใหม่ 🔥
            </Text>
            <Carousel data={test} />
            <Text style={styles.textcat} className="font-notom my-3">
              ร้านอาหารทั้งหมด
            </Text>
            <AllRestaurant searchText={searchText} setSearchText={setSearchText} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  dis: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {
    alignSelf: 'center',
    marginLeft: 100,
  },
  icon: {
    marginRight: 10,
  },
  textHeader: {
    fontSize: 25,
    marginBottom: 5,
  },
  textcat: {
    fontSize: 16,
    fontWeight: '300',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    borderRadius: 10,
  },
});

export default HomeScreen;
