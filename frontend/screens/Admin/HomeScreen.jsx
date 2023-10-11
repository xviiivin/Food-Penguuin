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
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import RestaurantData from '../../data/RestaurantData.json'
const HomeScreen = () => {
    const header = 'คำขอเปิดร้านอาหาร'
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View className="p-10 bg-white w-full flex-1 gap-4">
                {RestaurantData.map((value, index) => (
                    <View className="border border-[#F6D544] rounded-md p-4">
                        <View className=''>
                            <Text className='font-notob text-lg underline'>{value.name}</Text>
                            <View>
                                <View className='mb-4'>
                                    <Text>ที่ตั้ง: {value.food_court}</Text>
                                    <Text>หมวดหมู่: {value.type}</Text>
                                    <Text>เบอร์: {value.phone}</Text>
                                </View>
                                <View className='flex flex-row w-full items-center justify-center gap-4'>
                                    <Pressable onPress={() => {
                                        navigation.navigate("");
                                    }} className='border border-[#F3F3F3] w-1/3 bg-[#F3F3F3] px-4 py-2 rounded-lg justify-center items-center '>
                                        <Text className='font-notob'>ยกเลิก</Text>
                                    </Pressable>
                                    <Pressable className='border border-[#F6D544] w-1/3 bg-[#F6D544] px-4 py-2 rounded-lg justify-center items-center'>
                                        <Text className='font-notob'>ยืนยัน</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>


                    </View>
                ))}
            </View>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})