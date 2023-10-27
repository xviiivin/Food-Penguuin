import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import SwitchSelector from "react-native-switch-selector";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import { signInWithGoogleAsync } from "../database/google";
import { useNavigation } from "@react-navigation/native";
import firebase from "../database/firebase";

import { getUser, getUserInfo } from "../database/user";

const Login = () => {
  const navigation = useNavigation();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("few@gmail.com");
  // const [email, setEmail] = useState("few@kmitl.ac.th");

  const [password, setPassword] = useState("11501150");

  const options = [
    {
      label: "สมาชิกทั่วไป",
      value: "user",
    },
    {
      label: "ร้านค้า",
      value: "restarunt",
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getUser();
    console.log(data);
  };

  const handleLogin = async () => {
    try {
      const test = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      const data = await getUserInfo(test.user.uid);

      if (data.role === "restarunt") {
        navigation.push("CreateRes");
      } else {
        navigation.push("BottomTabbb");
      }
    } catch (error) {
      Alert.alert("แจ้งเตือน", error.message, [
        { text: "ตกลง", onPress: () => console.log("ตกลง") },
      ]);
    }
  };

  return (
    <View className="p-10 bg-white" style={styles.container}>
      <Image
        source={require("../assets/Logo.png")}
        className="w-3/4 h-[40px]"
      />

      <TextInput
        className="border border-[#A1A1A1] mt-12 rounded-lg w-full h-12 items-center justify-center p-4"
        placeholder="email"
        value={email}
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        className="border border-[#A1A1A1] mt-4 rounded-lg w-full h-12 items-center justify-center p-4"
        placeholder="password"
        value={password}
        onChangeText={(e) => setPassword(e)}
      />

      <TouchableOpacity
        onPress={() => {
          handleLogin();
        }}
        className=" bg-[#F6D33C] p-2 w-3/4 rounded-lg mt-12 flex justify-center items-center"
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <View className="flex flex-row  items-center mt-8">
        <MaterialCommunityIcons name="penguin" size={24} color={"#A1A1A1"} />
        <Text className="font-notom color-[#A1A1A1]">ยังไม่มีบัญชี </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RegisterRes");
          }}
        >
          <Text className="font-notom underline">สมัครกันเลย !!!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "NotoSansThai_500Medium",
  },
  stretch: {
    width: 25,
    height: 25,
    resizeMode: "stretch",
  },
});
