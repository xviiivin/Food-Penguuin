import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
const SettingsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <TouchableOpacity style={{ margin: 30 }} onPress={() => {}}>
          <View style={styles.dis1}>
            <View style={styles.dis2}>
              <AntDesign name="customerservice" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>ติดต่อเจ้าหน้าที่</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 30 }} onPress={() => {}}>
          <View style={styles.dis1}>
            <View style={styles.dis2}>
              <AntDesign name="logout" size={20} color="#B11E1E" />
              <Text style={{ marginLeft: 10 }}>ออกจากระบบ</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
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
  dis1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dis2: {
    flexDirection: 'row',
  },
  logo: {
    alignSelf: 'center',
    marginLeft: 100,
  },
  icon: {
    marginRight: 10,
  },
});

export default SettingsScreen;
