import { StyleSheet, View, Text, Image } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';

const Login = () => {
  const options = [
    {
      label: 'สมาชิกทั่วไป',
      value: '1',
      testID: 'switch-one',
      accessibilityLabel: 'switch-one',
    },
    {
      label: 'ร้านค้า',
      value: '1.5',
      testID: 'switch-one-thirty',
      accessibilityLabel: 'switch-one-thirty',
    },
  ];

  return (
    <View className="p-10" style={styles.container}>
      <Image source={require('../assets/Logo.png')} />
      <SwitchSelector
        selectedTextStyle={{ fontFamily: 'NotoSansThai_500Medium' }}
        textStyle={{ fontFamily: 'NotoSansThai_500Medium' }}
        className="mt-5 font-notom"
        options={options}
        selectedColor="#202020"
        buttonColor="#F6D33C"
        borderColor="#202020"
        borderWidth={2}
        initial={0}
        onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'NotoSansThai_500Medium',
  },
});
