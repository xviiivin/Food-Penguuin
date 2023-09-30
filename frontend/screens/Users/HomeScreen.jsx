import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import Carousel from '../../components/Home/Carousel';
import { Ionicons } from '@expo/vector-icons';
import { dummyData } from '../../data/Data'

const HomeScreen = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <View style={styles.dis}>
          <Image
            style={styles.Logo}
            source={require('../../assets/Logo.png')}
          />
          <Ionicons
            name={'cart'}
            size={24}
            color={'#202020'}
            style={styles.icon}
          />
        </View>
        <View>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>

        </View>
        <ScrollView>
          <Carousel data = {dummyData}/>
        </ScrollView>
        <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
          <Text style={styles.textHeader}>สวัสดี,</Text>
          <Text style={styles.textHeader}>สั่งอาหารโปรดของคุณที่นี่ !</Text>
    </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  dis: {
    flexDirection: 'row',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  Logo: {
    alignSelf: 'center',
    marginLeft: 106,
  },
  icon: {
    marginRight: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: '400',
  },
});
