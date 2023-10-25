import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, Platform, TextInput } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { signInWithGoogleAsync } from '../database/google';
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const options = [
    {
      label: 'สมาชิกทั่วไป',
      value: 'user',
    },
    {
      label: 'ร้านค้า',
      value: 'restarunt',
    },
  ];

  return (
    <View className="p-10 bg-white" style={styles.container}>
      <Image source={require('../assets/Logo.png')} className='w-3/4 h-[40px]' />
      <SwitchSelector
        selectedTextStyle={{ fontFamily: 'NotoSansThai_500Medium' }}
        textStyle={{ fontFamily: 'NotoSansThai_500Medium' }}
        className="mt-10 font-notom"
        options={options}
        selectedColor="#202020"
        buttonColor="#F6D33C"
        borderColor="#202020"
        borderWidth={2}
        initial={0}
        onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      />
      <TextInput
        className='border border-[#A1A1A1] mt-12 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='email'
      />
      <TextInput
        className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='password'
      />

      <TouchableOpacity onPress={() => {
        navigation.navigate("BottomTabbb");
      }} className=' bg-[#F6D33C] p-2 w-3/4 rounded-lg mt-12 flex justify-center items-center'>
        <Text>Login</Text>
      </TouchableOpacity>
      <View className='flex flex-row  items-center mt-8'>
        <MaterialCommunityIcons name='penguin' size={24} color={"#A1A1A1"} />
        <Text className='font-notom color-[#A1A1A1]'>ยังไม่มีบัญชี </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("RegisterRes");
        }}>
          <Text className='font-notom underline'>สมัครกันเลย !!!</Text></TouchableOpacity>
      </View>

    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'NotoSansThai_500Medium',
  },
  stretch: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },

});
