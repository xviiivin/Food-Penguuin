// สร้างร้านอาหาร
import { StyleSheet, Text, View, TextInput, ScrollView, Pressable, Button, Image, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';

import SelectDropdown from 'react-native-select-dropdown';
import { SelectList } from 'react-native-dropdown-select-list'
import CatData from "../../data/CatData.json"
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getUser } from '../../database/user';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../../database/firebase';
import { getResWithUID } from '../../database/restaurant';
import { useNavigation } from "@react-navigation/native";
const CreateRes = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri);

    if (!result.canceled) {
      console.log(result.assets[0]);
      setImage(result.assets[0].uri);
    }
  };

  const [data1, setData] = useState(null)

  useEffect(() => {
    getdata()

  }, [])

  const getdata = async () => {
    const data = await getUser()
    setData(data)


    const test = await getResWithUID(data.uid)
    if (test.length === 1) {
      navigation.navigate("BottomTabbb");
    }
  }

  const addres = async () => {
    console.log(nameres);
    console.log(phoneres);
    console.log(selectedres);
    console.log(selectedcate);

    const datexx = new Date().getTime().toString() + ".jpg";
    const response = await fetch(image);
    const blob = await response.blob();

    await firebase.storage().ref(`${datexx}`).put(blob);

    const test = await firebase
      .firestore()
      .collection("restaurant")
      .add({
        useruid: data1.uid,
        name: nameres,
        phone: phoneres,
        food_court: selectedres,
        type: selectedcate,
        menu: [],
        status: false,
        pic: `https://firebasestorage.googleapis.com/v0/b/fewlnwza007-92ae7.appspot.com/o/${datexx}?alt=media`
      });

    console.log(test);

    Alert.alert('แจ้งเตือน', "เพิ่มร้านค้าเรียบร้อย", [
      { text: 'ตกลง', onPress: () => console.log('ตกลง') },
    ]);

    navigation.navigate("BottomTabbb");
  }

  const [nameres, setNameres] = useState("");
  const [phoneres, setPhoneres] = useState("");
  const [selectedres, setSelectedres] = React.useState("");
  const [selectedcate, setSelectedcate] = React.useState("");

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
      <View className="p-10  h-full gap-y-10">
        <View>
          <Text className='font-notoe color-[#8C8C8C]'>ชื่อร้าน</Text>
          <TextInput
            onChangeText={((text) => setNameres(text))}
            className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
            maxLength={30}
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
          <Text className='font-notoe color-[#8C8C8C]'>ประเภทของอาหาร</Text>
          <SelectList
            placeholder=' '
            setSelected={(val) => setSelectedcate(val)}
            data={cat}
            save="value"
            boxStyles={{ backgroundColor: '#F3F3F3', borderColor: '#F3F3F3' }}
          />
        </View>
        <View>
          <Text className='font-notoe color-[#8C8C8C]'>เบอร์ติดต่อ</Text>
          <TextInput
            onChangeText={((text) => setPhoneres(text))}
            inputMode='numeric'
            className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
            maxLength={30}
          />
        </View>
        <View>
          <Text className='font-notoe color-[#8C8C8C]'>เลือกรูปร้านค้า</Text>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          <View className="mx-auto mt-12">

            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
          </View>
        </View>
        <View>
          <Text className='font-notoe color-[#8C8C8C]'>อีเมล</Text>
          <Text className='font-notob text-lg mt-2'>{data1 && (data1.email)}</Text>
          <Text className='font-notob text-xl  color-[#FA1717] mt-12'>!! โปรดอ่าน !!</Text>
          <Text className='font-notob text-md mt-2'>หลังจากทำการกดยืนยันตันทางเจ้าของร้านอาหาร</Text>
          <Text className='font-notob text-md'>ต้องมายื่นเอกสารรายละเอียดทั้งหมด</Text>
          <Text className='font-notob text-md'> ณ ห้องอาคารและสถานที่ </Text>
          <Text className='font-notob text-md'> คณะเทคโนโลยีสารสนเทศ (ไอทีลาดกระบัง)</Text>
        </View>
        <View className='flex flex-row w-full items-center justify-center gap-4'>
          <Pressable className='border border-[#F3F3F3] w-1/3 bg-[#F3F3F3] px-4 py-2 rounded-lg justify-center items-center '>
            <Text className='font-notob'>ยกเลิก</Text>
          </Pressable>
          <Pressable onPress={() => addres()} className='border border-[#F6D544] w-1/3 bg-[#F6D544] px-4 py-2 rounded-lg justify-center items-center'>
            <Text className='font-notob'>ยืนยัน</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateRes;

const styles = StyleSheet.create({});
