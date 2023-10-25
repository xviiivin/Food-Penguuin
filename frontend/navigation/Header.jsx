import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/Users/CartScreen";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getUser, getUserInfo } from "../database/user";

const Header = () => {
  const navigation = useNavigation();


  const [data1, setData1] = useState(null)

  useEffect(() => {
    getdata()

  }, [])

  const getdata = async () => {
    const data = await getUser()
    const test = await getUserInfo(data.uid)
    setData1(test)
  }



  return data1 && (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />
      {data1.role === "user" ? (
        <TouchableOpacity
          style={{}}
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        >
          <Ionicons
            name={"cart"}
            size={24}
            color={"#202020"}
            style={styles.icon}
          />
        </TouchableOpacity>
      ) : (
        <View>
        </View>
      )}

      {/* </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    // backgroundColor: "gray",
  },

  logo: {
    alignSelf: "center",
    marginLeft: 100,
  },
  icon: {
    marginRight: 30,
  },
  textHeader: {
    fontSize: 25,
    marginBottom: 5,
  },
  textcat: {
    fontSize: 16,
    fontWeight: "300",
  },
});

export default Header;
