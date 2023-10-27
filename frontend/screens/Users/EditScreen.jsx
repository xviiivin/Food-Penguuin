import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getUser, getUserInfo } from "../../database/user";
import firebase from "../../database/firebase";
import * as ImagePicker from "expo-image-picker";
const EditScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState(null);
  const [info, setInfo] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const test = await getUser();
    const test1 = await getUserInfo(test.uid);
    setData(test);
    setInfo(test1);
    setFirstname(test1.firstname);
    setLastname(test1.lastname);
    setImage(test1.pic);
  };

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

  const changedata = async () => {
    try {
      const datexx = new Date().getTime().toString() + ".jpg";
      const response = await fetch(image);
      const blob = await response.blob();

      await firebase.storage().ref(`${datexx}`).put(blob);

      firebase
        .firestore()
        .collection("users")
        .doc(data.uid)
        .set({
          firstname: firstName,
          lastname: lastName,
          role: info.role,
          pic: `https://firebasestorage.googleapis.com/v0/b/fewlnwza007-92ae7.appspot.com/o/${datexx}?alt=media`,
        });

      Alert.alert("แจ้งเตือน", "แก้ไขข้อมูลสำเร็จ", [
        { text: "ตกลง", onPress: () => console.log("ตกลง") },
      ]);
    } catch (err) {
      Alert.alert("แจ้งเตือน", error.message, [
        { text: "ตกลง", onPress: () => console.log("ตกลง") },
      ]);
    }
  };

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  return (
    <View className="flex-1 p-10 bg-white">
      <View className="flex justify-center items-center">
        <Image
          style={styles.profileImage}
          className=""
          source={{
            uri: image,
          }}
        />
      </View>
      <View className="gap-6 mt-2">
        <View>
          <Text className="font-notoe color-[#8C8C8C]">ชื่อ</Text>
          <TextInput
            value={firstName}
            onChangeText={(text) => setFirstname(text)}
            className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
            maxLength={30}
          />
        </View>
        <View>
          <Text className="font-notoe color-[#8C8C8C]">นามสกุล</Text>
          <TextInput
            value={lastName}
            onChangeText={(text) => setLastname(text)}
            className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
            maxLength={30}
          />
        </View>
        <View>
          <Text className="font-notoe color-[#8C8C8C]">รูปภาพ</Text>
          <Button
            title="Pick an image from camera roll"
            color="#F6D544"
            onPress={pickImage}
          />
        </View>
        <View>
          <Text className="font-notoe color-[#8C8C8C]">อีเมล</Text>
          <Text className="font-notob text-lg mt-2">{data && data.email}</Text>
        </View>
      </View>
      <View className="flex flex-row w-full items-center justify-center gap-4 mt-14">
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          className="border border-[#F3F3F3] w-1/3 bg-[#F3F3F3] px-4 py-2 rounded-lg justify-center items-center "
        >
          <Text className="font-notob">ยกเลิก</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            changedata(), navigation.goBack();
          }}
          className="border border-[#F6D544] w-1/3 bg-[#F6D544] px-4 py-2 rounded-lg justify-center items-center"
        >
          <Text className="font-notob">ยืนยัน</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: "#ED8085",
    borderRadius: 50,
    marginBottom: 10,
  },
});
