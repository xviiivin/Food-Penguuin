import { React, useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { getUser } from '../../database/user';
import { getResWithUIDTrue } from '../../database/history';

const Order = () => {

  const [data, setData] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getUser()
    const data1 = await getResWithUIDTrue(data.uid)
    console.log(data1);
    setData(data1);
  }
  return data && (
    <ScrollView className="bg-white w-full flex-1 p-10">

      {data.map((item, i) => (
        <View key={item}>

          {item.menu.map((item1, i1) => (
            <View className="border-b-[1px] border-[#D9D9D9] mb-2" key={item1}>
              <TouchableOpacity style={styles.gridItem1}>
                <View style={styles.picCover1}>
                  <Image
                    className="w-full h-[150px]"
                    source={{
                      uri: item1.menu_pic,
                    }}
                  />
                </View>
                <View className="">
                  <View className="ml-3 space-y-1 mt-3">
                    <Text className="font-notoe text-[15px]">{item1.name} x {item1.amount}</Text>
                    <Text className="font-notom color-[#A3A3A3]">{item1.description}</Text>
                  </View>
                </View>
                <View className="top-0 right-0 mt-1 absolute mb-5 ">
                  <Text className="font-notom mt-2">{item1.amount * item1.price} ฿</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}

        </View>
      ))}


    </ScrollView>
  );
};

export default Order;

const styles = StyleSheet.create({
  gridItem1: {
    width: '100%',
    marginVertical: 5,
    height: 110,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  picCover1: {
    width: 92,
    height: 92,
    marginTop: 0,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image1: {
    width: '100%',
    height: 150,
  },
});
