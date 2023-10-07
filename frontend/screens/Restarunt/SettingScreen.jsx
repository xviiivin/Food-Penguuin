import React from 'react';
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
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SafeAreaView>
        <View className="flex flex-row justify-center items-center gap-4">
          <Image style={styles.profileImage} className='' source={{ uri: 'https://img.freepik.com/free-vector/big-win-surprise-banner-comic-style_1017-17792.jpg' }} />
          <View className='gap-y-1 w-1/2'>
            <Text className='font-notob text-lg'>วิวรรธน์ เหลียงกอบกิจ</Text>
            <Text className='font-notom color-[#A6A6A6] text-md'>64070232@kmitl.ac.th</Text>
          </View>
        </View>
        <TouchableOpacity style={{ margin: 30 }} onPress={() => { }}>
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
  profileImage:
    { width: 100, height: 100, backgroundColor: "#ED8085", borderRadius: 50, marginBottom: 10, },
});

export default SettingScreen;
