import { StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const EditScreen = () => {
    const navigation = useNavigation();

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    return (
        <View className='flex-1 p-10 bg-white'>
            <View className='flex justify-center items-center'>
                <Image style={styles.profileImage} className='' source={{ uri: 'https://img.freepik.com/free-vector/big-win-surprise-banner-comic-style_1017-17792.jpg' }} />
            </View>
            <View className='gap-6 mt-2'>
                <View>
                    <Text className='font-notoe color-[#8C8C8C]'>ชื่อ-นามสกุล</Text>
                    <TextInput
                        onChangeText={((text) => setName(text))}
                        className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
                        maxLength={30}
                    />
                </View>
                <View>
                    <Text className='font-notoe color-[#8C8C8C]'>เบอร์ติดต่อ</Text>
                    <TextInput
                        onChangeText={((text) => setPhone(text))}
                        inputMode='numeric'
                        className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
                        maxLength={30}
                    />
                </View>
                <View>
                    <Text className='font-notoe color-[#8C8C8C]'>อีเมล</Text>
                    <Text className='font-notob text-lg mt-2'>getค่ามา</Text>
                </View>
            </View>
            <View className='flex flex-row w-full items-center justify-center gap-4 mt-14'>
                <Pressable onPress={() => {
                    navigation.goBack();
                }} className='border border-[#F3F3F3] w-1/3 bg-[#F3F3F3] px-4 py-2 rounded-lg justify-center items-center '>
                    <Text className='font-notob'>ยกเลิก</Text>
                </Pressable>
                <Pressable className='border border-[#F6D544] w-1/3 bg-[#F6D544] px-4 py-2 rounded-lg justify-center items-center'>
                    <Text className='font-notob'>ยืนยัน</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default EditScreen

const styles = StyleSheet.create({
    profileImage:
        { width: 100, height: 100, backgroundColor: "#ED8085", borderRadius: 50, marginBottom: 10, },
})