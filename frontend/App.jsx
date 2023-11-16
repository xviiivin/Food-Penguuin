import { StyleSheet, Text, View } from "react-native";
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
import { Provider } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../frontend/navigation/CustomHeaderButton";
import { useNavigation } from "@react-navigation/native";
import Login from "./screens/Login";

const Stack = createNativeStackNavigator();
import {
  useFonts,
  NotoSansThai_500Medium,
  NotoSansThai_400Regular,
  NotoSansThai_600SemiBold,
  NotoSansThai_700Bold,
} from "@expo-google-fonts/noto-sans-thai";
import Contact from "./screens/Users/Contact";
import Store from "./ReduxControl/Store";
import RegisterRes from "./screens/RegisterRes";
import RegisterUser from "./screens/RegisterUser";
import CreateRes from "./screens/Restarunt/CreateRes";
export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSansThai_500Medium,
    NotoSansThai_400Regular,
    NotoSansThai_600SemiBold,
    NotoSansThai_700Bold,
  });

  if (!fontsLoaded) {
    return <></>;
  }

  return (
    <Provider store={Store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
                headerTitle: () => <Header />,
                headerTitleAlign: "center",
              }}
            />

            <Stack.Screen
              name="RegisterRes"
              component={RegisterRes}
              options={{
                headerShown: false,
                headerTitle: "สมัครสมาชิกของร้านอาหาร",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="RegisterUser"
              component={RegisterUser}
              options={{
                headerShown: false,
                headerTitle: "สมัครสมาชิก",
                headerTitleAlign: "center",
              }}
            />

            <Stack.Screen
              name="BottomTabbb"
              component={BottomTab}
              options={{
                headerLeft: null,
                headerBackVisible: false,
                headerTitle: () => <Header />,
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="CartScreen"
              component={CartScreen}
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      flex: 1,
                      fontFamily: "NotoSansThai_500Medium",
                      fontSize: 20,
                    }}
                  >
                    รายการสั่งซื้อ 🧑‍🍳
                  </Text>
                ),
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              options={({ route }) => ({
                headerTitleAlign: "center",
                headerTitle: route.params?.type,
                headerTitleStyle: {
                  fontFamily: "NotoSansThai_500Medium",
                  fontSize: 20,
                },
                headerTitleAlign: "center",
                headerRight: () => {
                  const navigation = useNavigation();
                  return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                      <Item
                        title="Categ"
                        iconName="cart"
                        onPress={() => {
                          navigation.navigate("CartScreen");
                        }}
                      />
                    </HeaderButtons>
                  );
                },
              })}
            />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
              options={({ route }) => ({
                headerTitleAlign: "center",
                headerTitle: route.params?.name,
                headerTitleStyle: {
                  fontFamily: "NotoSansThai_500Medium",
                  fontSize: 20,
                },
                headerTitleAlign: "center",
                headerRight: () => {
                  const navigation = useNavigation();
                  return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                      <Item
                        title="ResDe"
                        iconName="cart"
                        onPress={() => {
                          navigation.navigate("CartScreen");
                        }}
                      />
                    </HeaderButtons>
                  );
                },
              })}
            />
            <Stack.Screen
              name="EditScreen"
              component={EditScreen}
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      flex: 1,
                      fontFamily: "NotoSansThai_500Medium",
                      fontSize: 20,
                    }}
                  >
                    แก้ไขข้อมูล
                  </Text>
                ),
              }}
            />
            <Stack.Screen
              name="EditRes"
              options={{
                headerLeft: null,
                headerBackVisible: false,
                headerTitle: () => (
                  <Text
                    style={{
                      flex: 1,
                      fontFamily: "NotoSansThai_500Medium",
                      fontSize: 20,
                    }}
                  >
                    แก้ไขร้านค้า
                  </Text>
                ),
              }}
              component={EditRes}
            />
            <Stack.Screen name="CreateRes" component={CreateRes} options={{
              headerTitle: () => (
                <Text
                  style={{
                    flex: 1,
                    fontFamily: "NotoSansThai_500Medium",
                    fontSize: 20,
                  }}
                >
                  สร้างร้านอาหาร
                </Text>
              ),
            }} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen
              name="OrderScreen"
              component={OrderScreen}
              options={({ route }) => ({
                headerTitleAlign: "center",
                headerTitle: route.params?.name,
                headerTitleStyle: {
                  fontFamily: "NotoSansThai_500Medium",
                  fontSize: 20,
                },
                headerTitleAlign: "center",
                headerRight: () => {
                  const navigation = useNavigation();
                  return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                      <Item
                        iconName="cart"
                        onPress={() => {
                          navigation.navigate("CartScreen");
                        }}
                      />
                    </HeaderButtons>
                  );
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      {/* <Login /> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 1,
    fontFamily: "NotoSansThai_500Medium",
    fontSize: 20,
  },
});
