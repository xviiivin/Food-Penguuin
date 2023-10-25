import { StyleSheet, View, Text, Image, Pressable, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { signInWithGoogleAsync } from '../database/google';

const Login = () => {
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
      <View className='flex flex-row  items-center mt-32'>
        <MaterialCommunityIcons name='penguin' size={24} color={"#A1A1A1"} />
        <Text className='font-notom color-[#A1A1A1]'>เข้าสู่ระบบด้วย อีเมลมหาลัยกันเลย !!!</Text>
      </View>
      <TouchableOpacity onPress={() => signInWithGoogleAsync()} className='border border-[#A1A1A1] rounded-lg w-3/4 h-12 mt-4 items-center justify-center'>
        <View className='flex flex-row  items-center'>
          <Image
            style={styles.stretch}
            source={require('../assets/google-icon-2048x2048-czn3g8x8.png')}
          />
          <Text className='font-notom color-[#A1A1A1]'> Continue with Google</Text>
        </View>
      </TouchableOpacity>

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
