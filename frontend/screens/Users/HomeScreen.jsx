import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import Carousel from '../../components/Home/Carousel';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dis}>
        <Text style={{flex:1,alignItems:"end"}}>sadad</Text>
        <Ionicons name={'cart'} size={24} color={'#202020'} />
      </View>
      <ScrollView>
        <Carousel />
      </ScrollView>
    </View>
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
    marginTop: 20,
  },
});
