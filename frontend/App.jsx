import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigation/bottomTab";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CartScreen from "../frontend/screens/Users/CartScreen";
import CategoryScreen from "../frontend/screens/Users/CategoryScreen";
import RestaurantDetail from "../frontend/screens/Users/RestaurantDetail";
import Header from "../frontend/navigation/Header";
import EditRes from "./screens/Restarunt/EditRes";
import Restaurant from "./screens/Restarunt/Restaurant";
import EditScreen from "./screens/Users/EditScreen";
import OrderScreen from "./screens/Users/OrderScreen";
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
import Contact from "./screens/Users/Contact";
import Order from "./components/History/Order";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="BottomTabbb"
            component={BottomTab}
            options={{ headerShown: true, headerTitle: () => <Header /> }}
          />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen
            name="EditScreen"
            component={EditScreen}
            options={{
              headerTitle: () => (
                <Text
                  style={{
                    flex: 1,
                    textAlign: "center",
                    fontFamily: "NotoSansThai_500Medium",
                    fontSize: 20,
                  }}
                >
                  แก้ไขข้อมูล
                </Text>
              ),
            }}
          />
          <Stack.Screen name="EditRes" component={EditRes} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Contact" component={Contact} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
    // <Login/>
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
