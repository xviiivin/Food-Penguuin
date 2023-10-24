import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/Users/CartScreen";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TextHeader = (route) => {
  const navigation = useNavigation();
  const name = route.params?.name || "";
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {/* <Image style={styles.logo} source={require("../assets/Logo.png")} /> */}
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

export default TextHeader;
