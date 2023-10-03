import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import RestaurantData from "../../data/Data";
import { useState } from "react";

const CategoryGrid = ({ props }) => {
  return (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.onSelect();
      }}
    >
      <View
        style={{
          ...styles.container,
          ...{ backgroundColor: props.color },
        }}
      >
        {/* <Text>{itemData.item.title}</Text> */}
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>

    //     <SafeAreaView>
    //       <ScrollView>
    //         <View style={styles.container}>
    //           <Text className="font-notom" style={styles.textcat}>
    //             ร้านมาใหม่ 🔥
    //           </Text>
    //           <View style={styles.gridContainer}>
    //             {grid.map((gridItem, index) => (
    //               <View key={index} style={styles.gridItem}>
    //                 <Text>{gridItem.title}</Text>
    //               </View>
    //             ))}
    //           </View>
    //         </View>
    //       </ScrollView>
    //     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "right",
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     padding: 20,
  //   },
  //   dis: {
  //     flexDirection: "row",
  //     marginTop: 30,
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     marginBottom: 20,
  //   },
  //   logo: {
  //     alignSelf: "center",
  //     marginLeft: 100,
  //   },
  //   icon: {
  //     marginRight: 10,
  //   },
  //   textHeader: {
  //     fontSize: 25,
  //     fontWeight: "700",
  //     marginBottom: 5,
  //   },
  //   textcat: {
  //     fontSize: 16,
  //     fontWeight: "300",
  //   },
  //   gridContainer: {
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     justifyContent: "space-between",
  //   },
  //   gridItem: {
  //     width: "48%",
  //     marginVertical: 10,
  //     padding: 20,
  //     backgroundColor: "#f0f0f0",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     height: 150,
  //     borderRadius: 10,
  //   },
});

export default CategoryGrid;
