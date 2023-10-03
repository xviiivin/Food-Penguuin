import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigation/bottomTab";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CartScreen from "../frontend/screens/Users/CartScreen";
import Header from "../frontend/navigation/Header";
import Login from "./screens/Login";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
import {
  useFonts,
  NotoSansThai_100Thin,
  NotoSansThai_200ExtraLight,
  NotoSansThai_300Light,
  NotoSansThai_400Regular,
  NotoSansThai_500Medium,
  NotoSansThai_600SemiBold,
  NotoSansThai_700Bold,
  NotoSansThai_800ExtraBold,
  NotoSansThai_900Black,
} from "@expo-google-fonts/noto-sans-thai";
export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansThai_500Medium, // <- equivalent to Inter_900Black: Inter_900Black
    NotoSansThai_400Regular, // <- equivalent to Inter_900Black: Inter_900Black
    NotoSansThai_600SemiBold, // <- equivalent to Inter_900Black: Inter_900Black
    NotoSansThai_700Bold, // <- equivalent to Inter_900Black: Inter_900Black
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen
    //         name="BottomTabbb"
    //         component={BottomTab}
    //         options={{ headerShown: true, headerTitle: () => <Header /> }}
    //       />
    //       <Stack.Screen name="CartScreen" component={CartScreen} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </GestureHandlerRootView>
    <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
