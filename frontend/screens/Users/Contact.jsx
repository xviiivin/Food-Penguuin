import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import contact from '../../data/Contact.json'
import { AntDesign } from '@expo/vector-icons';

const Contact = () => {
    return (
        <View className="p-10 bg-white flex-1 w-full gap-4">
            {contact.map((value, index) => (
                <View className="py-4 px-6 bg-[#F6F6F6] rounded-lg flex flex-row justify-between items-center">
                    <View>
                        <Text className="font-notom">ชื่อ: {value.name}</Text>
                        <Text className="font-notom">เบอร์: {value.phone}</Text>
                        <Text className="font-notom">อีเมล: {value.gmail}</Text>
                    </View>
                    <View>
                        <AntDesign name="infocirlceo" size={24} color="black" />
                    </View>
                </View>
            ))}

        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})