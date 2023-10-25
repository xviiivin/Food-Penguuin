import { React, useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity, Pressable
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../database/user';
import { getResWithUID } from '../../database/restaurant';
const Restarant = () => {
    const navigation = useNavigation();

    const [data1, setData1] = useState(null)

    useEffect(() => {
        getdata()

    }, [])

    const getdata = async () => {
        const data = await getUser()

        const test = await getResWithUID(data.uid)
        let da1 = test[0];
        console.log(da1);

        setData1(da1)
    }


    return data1 && (
        <View className='flex-1 bg-white w-full'>
            <View className="flex items-end  p-5">
                <Pressable onPress={() => {
                    navigation.navigate("EditRes");
                }} className='items-center justify-center flex flex-row  '>
                    <Text className='font-notom color-[#989696] underlinen mt-1'>เเก้ไขบัญชี</Text>
                    <AntDesign name="edit" size={20} color="#989696" />
                </Pressable>
            </View>
            <View>
                <Image className='w-full h-[150]' source={{ uri: data1.pic }} />
            </View>
            <View className="my-10 mx-5">
                <View className="flex flex-row mb-2">
                    <Ionicons name="location" size={20} color="#F6D544" />
                    <Text className="font-notom ml-2">{data1.food_court}</Text>
                </View>
                <View className="flex flex-row mb-2">
                    <Ionicons name="restaurant" className='ml-2' size={20} color="#F6D544" />
                    <Text className="font-notom ml-2">{data1.type}</Text>
                </View>
                <View className="flex flex-row mb-2">
                    <FontAwesome5 name="phone-alt" className='' size={19} color='#F6D544' />
                    <Text className="font-notom ml-2">{data1.phone}</Text>
                </View>
            </View>
        </View>
    )
}

export default Restarant

const styles = StyleSheet.create({

})