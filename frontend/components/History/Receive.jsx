import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const Receive = () => {
  return (
    <ScrollView className="p-10 bg-white">
      <View className="flex gap-6">
        <View className="flex flex-row justify-between items-center">
          <View>
            <Text className="font-notom text-[20px]">ร้านพี่ช้าง</Text>
            <Text className="font-notom">16 Sep 2023 8.19 PM</Text>
          </View>
          <View>
            <Text className="font-notoe bg-[#F6D544] p-2 rounded-xl">
              ระยะเวลา ~ 60 นาที
            </Text>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center">
          <Text className="font-notom  text-[18px]">สถานะ</Text>
          <Text className="font-notom  text-[18px]">กำลังรอ</Text>
        </View>

        <View className="flex flex-row justify-between items-center">
          <Text className="font-notom  text-[18px]">จำนวนคิวก่อนหน้า</Text>
          <Text className="font-notom  text-[18px]">20 คิว</Text>
        </View>
        <View>
          <View>
            <Text className="font-notom  text-[18px]">รายการที่สั่ง</Text>
          </View>

          {/* mapตรงนี้ */}
          <View className="border-b-[1px] border-[#D9D9D9] mb-2">
            <TouchableOpacity style={styles.gridItem1}>
              <View style={styles.picCover1}>
                <Image
                  className="w-full h-[150px]"
                  source={{
                    uri: 'https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium',
                  }}
                />
              </View>
              <View className="">
                <View className="ml-3 space-y-1 mt-3">
                  <Text className="font-notoe text-[15px]">เบอร์เกอร์</Text>
                  <Text className="font-notom color-[#A3A3A3]">commend</Text>
                </View>
              </View>
              <View className="top-0 right-0 mt-1 absolute mb-5 ">
                <Text className="font-notom mt-2">2000 ฿</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex flex-row justify-between">
          <Text className="font-notom text-[18px]">ราคารวม</Text>
          <Text className="font-notom text-[18px]">getราคารวม ฿ </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Receive;

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
});
