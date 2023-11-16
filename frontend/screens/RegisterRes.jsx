import { StyleSheet, View, Text, Image, Button, Pressable, TouchableOpacity, Platform, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { SimpleLineIcons, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import SwitchSelector from 'react-native-switch-selector';
import firebase from '../database/firebase';
const RegisterRes = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [role, setRole] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);


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

    const handleRegister = async () => {
        try {

            if (password !== confirm) {
                Alert.alert('แจ้งเตือน', 'รหัสผ่านไม่ตรงกัน', [
                    { text: 'ตกลง', onPress: () => console.log('ตกลง') },
                ]);

            } else if (email.split("@")[1] === "kmitl.ac.th" && role === "user") {
                const test = await firebase.auth().createUserWithEmailAndPassword(email, password);

                // Add the user's profile data to Firestore
                firebase.firestore().collection('users').doc(test.user.uid).set({
                    firstname: firstName,
                    lastname: lastName,
                    role: role,
                    pic: "https://img.freepik.com/free-vector/big-win-surprise-banner-comic-style_1017-17792.jpg"
                });

                Alert.alert('แจ้งเตือน', 'สมัครผู้ใช้สำเร็จ', [
                    { text: 'ตกลง', onPress: () => console.log('ตกลง') },
                ]);
            } else if (role === "restarunt") {
                const test = await firebase.auth().createUserWithEmailAndPassword(email, password);

                firebase.firestore().collection('users').doc(test.user.uid).set({
                    firstname: firstName,
                    lastname: lastName,
                    role: role,
                });

                Alert.alert('แจ้งเตือน', 'สมัครร้านค้าสำเร็จ', [
                    { text: 'ตกลง', onPress: () => console.log('ตกลง') },
                ]);
            } else {
                console.log(email.split("@")[1]);
                Alert.alert('แจ้งเตือน', 'อีเมลต้องเป็น kmitl.ac.th', [
                    { text: 'ตกลง', onPress: () => console.log('ตกลง') },
                ]);
            }

        } catch (error) {

            Alert.alert('แจ้งเตือน', error.message, [
                { text: 'ตกลง', onPress: () => console.log('ตกลง') },
            ]);

        }
    };


    return (
        <ScrollView className="p-10 bg-white " style={styles.container}>
            <View className="flex items-center justify-center mt-16">
                <Image source={require('../assets/Logo.png')} className='w-3/4 h-[40px]' />
            </View>

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
                onPress={(value) => setRole(value)}
            />

            <View className='mt-12 mb-4'>
                <Text className='flex items-start justify-start float-left font-notoe'>บัญชีผู้ใช้</Text>
            </View>
            <TextInput
                className='border border-[#A1A1A1]  rounded-lg w-full h-12 items-center justify-center p-4' value={email} onChangeText={(e) => setEmail(e)} placeholder='อีเมล'
            />

            <View className='flex-row border border-[#A1A1A1] mt-4 rounded-lg w-full h-12  px-4 justify-between'>
                <TextInput
                    className=""
                    placeholder="รหัสผ่าน"
                    value={password}
                    secureTextEntry={!showPassword}
                    onChangeText={(e) => setPassword(e)}
                />

                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    className='justify-center'
                >
                    <Ionicons name={showPassword ? "eye-sharp" : "eye-off-sharp"} size={20} color="black" />
                </TouchableOpacity>
            </View>


            <View className='flex-row border border-[#A1A1A1] mt-4 rounded-lg w-full h-12  px-4 justify-between'>
                <TextInput
                    placeholder="ยืนยันรหัสผ่าน"
                    secureTextEntry={!showPassword1}
                    value={confirm} onChangeText={(e) => setConfirm(e)}
                />

                <TouchableOpacity
                    onPress={() => setShowPassword1(!showPassword1)}
                    className='justify-center'
                >
                    <Ionicons name={showPassword1 ? "eye-sharp" : "eye-off-sharp"} size={20} color="black" />
                </TouchableOpacity>
            </View>

            <View className='mt-8'>
                <Text className='flex items-start justify-start float-left font-notoe'>ข้อมูลส่วนตัว</Text>
            </View>
            <TextInput
                className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' value={firstName} onChangeText={(e) => setFirstname(e)} placeholder='ชื่อ' />
            <TextInput
                className='border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4' value={lastName} onChangeText={(e) => setLastname(e)} placeholder='นามสกุล' />

            <View className='flex items-center justify-center mb-32'>
                <TouchableOpacity onPress={() => {
                    handleRegister()
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
