import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity, Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';


import firebase from '../../database/firebase';
import { getUser, getUserInfo, logout } from '../../database/user';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    test()
  }, []);

  const test = async () => {
    const test = await getUser()
    const test1 = await getUserInfo(test.uid);
    setData(test)
    setInfo(test1)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View className="flex flex-row justify-center items-center gap-4">
          <Image style={styles.profileImage} className='' source={{ uri: 'https://img.freepik.com/free-vector/big-win-surprise-banner-comic-style_1017-17792.jpg' }} />
          <View className='gap-y-1 w-1/2'>
            <Text className='font-notob text-lg'>{info && info.firstname + " " + info.lastname}</Text>
            <Text className='font-notom color-[#A6A6A6] text-md'>{data && data.email}</Text>
            <Pressable onPress={() => {
              navigation.navigate("EditScreen");
            }} className='border border-black items-center justify-center flex flex-row bg-[#F6D544] rounded-lg p-2 w-fit '>
              <Text className='font-notom'>เเก้ไขบัญชี</Text>
              <AntDesign name="edit" size={20} color="black" />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity style={{ margin: 30 }} onPress={() => { navigation.navigate("Contact") }}>
          <View style={styles.dis1}>
            <View style={styles.dis2}>
              <AntDesign name="customerservice" size={24} color="black" />
              <Text style={{ marginLeft: 10 }}>ติดต่อเจ้าหน้าที่</Text>
            </View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 30 }} onPress={() => { }}>
          <View style={styles.dis1}>
            <Pressable onPress={() => { logout(); navigation.navigate("Login")}}>

              <View style={styles.dis2}>
                <AntDesign name="logout" size={20} color="#B11E1E" />
                <Text style={{ marginLeft: 10 }}>ออกจากระบบ</Text>
              </View>
            </Pressable>
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
  profileImage:
    { width: 100, height: 100, backgroundColor: "#ED8085", borderRadius: 50, marginBottom: 10, },
});

export default SettingsScreen;
