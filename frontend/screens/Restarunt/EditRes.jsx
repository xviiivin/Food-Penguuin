import { StyleSheet, Text, View, TextInput, Image, ScrollView, Pressable, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list'
import CatData from "../../data/CatData.json"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { getUser } from '../../database/user';
import { getResWithUID } from '../../database/restaurant';
const EditRes = () => {
  const navigation = useNavigation();
  const [nameres, setNameres] = useState("");
  const [phoneres, setPhoneres] = useState("");
  const [selectedres, setSelectedres] = React.useState("");
  const [selectedcate, setSelectedcate] = React.useState("");
  const [image, setImage] = useState(null);
  const [data1, setData1] = useState(null)

  useEffect(() => {
    getdata()

  }, [])

  const getdata = async () => {
    const data = await getUser()
    setData1(data)

    const test = await getResWithUID(data.uid)
    let da1 = test[0];

    console.log(da1);

    setNameres(da1["name"])
    setPhoneres(da1["phone"])
    setSelectedres(da1["food_court"])
    setSelectedcate(da1["type"])
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const res = [
    { key: '1', value: 'โรงอาหาร A ส่วนที่ 2 (บริเวณด้านบนฝั่งตึก A)' },
    { key: '2', value: 'โรงอาหาร C ชั้น 1' },
    { key: '3', value: 'โรงอาหาร C ชั้น 2' },
    { key: '4', value: 'โรงอาหารถิ่นชงโค (J)	' },
    { key: '5', value: 'โรงอาหาร คณะเทคโนโลยีสารสนเทศ' },
  ]
  const cat = [
    { key: '1', value: 'อาหารไทย' },
    { key: '2', value: 'ก๋วยเตี๋ยว' },
    { key: '3', value: 'ฟาสต์ฟู้ด' },
    { key: '4', value: 'เครื่องดื่ม' },
    { key: '5', value: 'อาหารญี่ปุ่น' },
    { key: '6', value: 'ของทานเล่น' },
    { key: '7', value: 'ขนมหวาน' },
    { key: '8', value: 'ผลไม้' },
  ]
  return (
    <ScrollView className="bg-white">
      <View className='flex-1 w-full'>
        <View className="flex items-start pt-5 pl-10 ">
          <Pressable className='items-center justify-center flex flex-row'>
            <Text className='font-notom color-[#989696] underlinen mt-1'>รูปพื้นหลังร้าน</Text>
          </Pressable>
        </View>
        <View>
          <Image className='w-full h-[150]' source={{ uri: 'https://img.freepik.com/free-vector/big-win-surprise-banner-comic-style_1017-17792.jpg' }} />
        </View>
        <View className='p-10 gap-4'>
          <View>
            <Text className='font-notoe color-[#8C8C8C]'>ชื่อร้าน</Text>
            <TextInput
              onChangeText={((text) => setNameres(text))}
              className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
              maxLength={30}
              value={nameres}
            />
          </View>
          <View>
            <Text className='font-notoe color-[#8C8C8C]'>โรงอาหาร</Text>
            <SelectList
              placeholder=' '
              setSelected={(val) => setSelectedres(val)}
              data={res}
              save="value"
              boxStyles={{ backgroundColor: '#F3F3F3', borderColor: '#F3F3F3' }}
            />
          </View>
          <View>
            <View>
              <Text className='font-notoe color-[#8C8C8C]'>ประเภทของอาหาร</Text>
              <SelectList
                placeholder=' '
                setSelected={(val) => setSelectedcate(val)}
                data={cat}
                defaultValue='อาหารไทย'

                save="value"
                boxStyles={{ backgroundColor: '#F3F3F3', borderColor: '#F3F3F3' }}
              />
            </View>
          </View>
          <View>
            <Text className='font-notoe color-[#8C8C8C]'>เบอร์ติดต่อ</Text>
            <TextInput
              onChangeText={((text) => setPhoneres(text))}
              inputMode='numeric'
              value={phoneres}
              className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
              maxLength={30}
            />
          </View>
          <View>
            <Text className='font-notoe color-[#8C8C8C]'>รูปภาพ</Text>
            <Button title="Pick an image from camera roll" onPress={pickImage} />
          </View>

          <View className='flex flex-row w-full items-center justify-center gap-4'>
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
      </View >
    </ScrollView>
  )
};

const styles = StyleSheet.create({

});

export default EditRes;
