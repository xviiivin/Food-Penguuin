import { StyleSheet, View, Text, Image, Button, Pressable, TouchableOpacity, Platform, TextInput } from 'react-native';
import React from 'react';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

const RegisterRes = () => {
    const navigation = useNavigation();
    return (
        <ScrollView className="p-10 bg-white " style={styles.container}>
            <View className="flex items-center justify-center mt-16">
                <Image source={require('../assets/Logo.png')} className='w-3/4 h-[40px]' />
            </View>
            <View className='mt-12 mb-4'>
                <Text className='flex items-start justify-start float-left font-notoe'>บัญชีผู้ใช้</Text>
            </View>
            <TextInput
                className='border border-[#A1A1A1]  rounded-lg w-full h-12 items-center justify-center p-4' placeholder='อีเมล'
            />
            <TextInput
                className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='รหัสผ่าน'
            />
            <TextInput
                className=' mb-8 border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='ยืนยันรหัสผ่าน'
            />
            <View >
                <Text className='flex items-start justify-start float-left font-notoe'>ข้อมูลส่วนตัว</Text>
            </View>
            <TextInput
                className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='ชื่อ' />
            <TextInput
                className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' placeholder='นามสกุล' />
            <View className='flex items-center justify-center mb-32'>
                <TouchableOpacity onPress={() => {
                    navigation.navigate("Login");
                }} className=' bg-[#F6D33C] p-2 w-3/4 rounded-lg mt-12 flex justify-center items-center'>
                    <Text>สมัครสมาชิก</Text>
                </TouchableOpacity>
                <View className='flex flex-row  items-center mt-8'>
                    <MaterialCommunityIcons name='penguin' size={24} color={"#A1A1A1"} />
                    <Text className='font-notom color-[#A1A1A1]'>มีบัญชีแล้ว </Text>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Login");
                    }}>
                        <Text className='font-notom underline'>เข้าสู่ระบบ !!!</Text></TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    );
};

export default RegisterRes;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'NotoSansThai_500Medium',
    },
    stretch: {
        width: 25,
        height: 25,
        resizeMode: 'stretch',
    },

});
