// หน้าหลัก
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Queue from '../../data/Queue.json'
import { getHistoryRes } from '../../database/history'
import { getUser } from '../../database/user'
import { getResWithUID } from '../../database/restaurant'
const HomeScreen = () => {
  const queue = []
  const [data, setData] = useState()
  useEffect(() => {
    fetch()
  }, [])
  const fetch = async () => {
    const data1 = await getUser()
    const test = await getResWithUID(data1.uid)
    const data = await getHistoryRes(test[0].name)
    setData(data);
    console.log(data);
  }
  return data && (
    <ScrollView className='bg-white'>
      <View className='px-10 pt-5 '>
        <Text className='font-notob text-xl'>คงเหลือ {data.length} จำนวน </Text>
        {data.map((item, index) => (<View className='mt-5' key={index}>
          <View className='bg-[#E2E2E2] w-full p-5 rounded-t-xl '>
            <View className='gap-y-4'>
              {item.menu.map((menuItem, number) => (
                <View key={menuItem.id} className='bg-[#E2E2E2] w-full '>
                  <View className='flex flex-row justify-between'>
                    <Text className='font-notoe'>{number + 1}.{menuItem.name}</Text>
                    <Text>จำนวน {menuItem.amount} ที่</Text>
                  </View>
                </View>
              ))}

            </View>

            <View className=''>
              <Text className='font-notoe color-[#F63C3C] mt-7'>ผู้สั่ง</Text>
              <View className='flex gap-1 mt-2'>
                <Text className='font-notom'>ชื่อ: {item.Username}</Text>
                <Text className='font-notom'>อีเมล: {item.Email}</Text>
                <Text className='font-notom'>เบอร์: {item.phone}</Text>
                <Text className='font-notom'>ราคา: {item.totalPrice}</Text>
              </View>
            </View>
          </View>
          <View className='bg-[#F6D33C] h-16 justify-center flex items-center rounded-b-xl mb-5'>
            <Text className='font-notoe text-lg'>สำเร็จ</Text>
          </View>
        </View>))}




      </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})