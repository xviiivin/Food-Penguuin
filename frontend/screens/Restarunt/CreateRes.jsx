// สร้างร้านอาหาร
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

import SelectDropdown from 'react-native-select-dropdown';

const CreateRes = () => {
  return (
    <View className="p-10 bg-white h-full">
      <View>
        <Text>ชื่อร้าน</Text>
        <TextInput
          className="w-full p-2 px-4 bg-[#F3F3F3] rounded-lg"
          maxLength={30}
        />
      </View>
      <SelectDropdown
        data={countries}
        className="w-full bg-[#f3f3f3] font-notom"
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
    </View>
  );
};

export default CreateRes;

const styles = StyleSheet.create({});
