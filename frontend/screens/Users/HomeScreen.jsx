import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Carousel from '../../components/Home/Carousel';
import { dummyData } from '../../data/Data';

const HomeScreen = () => {
  const greetings = ['สวัสดี,', 'สั่งอาหารโปรดของคุณที่นี่ !'];
  const grid = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.dis}>
            <Image
              style={styles.logo}
              source={require('../../assets/Logo.png')}
            />
            <Ionicons
              name={'cart'}
              size={24}
              color={'#202020'}
              style={styles.icon}
            />
          </View>
          {greetings.map((greeting, index) => (
            <Text key={index} style={styles.textHeader}>
              {greeting.id}
            </Text>
          ))}
          <Text style={styles.textcat}>ร้านมาใหม่ 🔥</Text>
          <Carousel data={dummyData} />

          <Text style={styles.textcat}>ร้านอาหารทั้งหมด</Text>
          <View style={styles.gridContainer}>
            {grid.map((gridItem, index) => (
              <View key={index} style={styles.gridItem}>
                <Text>{gridItem.title}</Text>
              </View>
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
    fontSize: 20,
    fontWeight: '400',
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
