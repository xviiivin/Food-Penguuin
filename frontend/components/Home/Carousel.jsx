import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { SliderBox } from 'react-native-image-slider-box';

const Carousel = () => {
  const slide = [
    'https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/10/03172224/Maison-Bleue-f.jpg',
    'https://images.lifestyleasia.com/wp-content/uploads/sites/8/2022/10/03172224/Maison-Bleue-f.jpg',
  ];
  return (
    <View style={styles.container}>
      <SliderBox
        images={slide}
        dotColor={'#F6D33C'}
        inactiveDotColor={'#202020'}
        ImageCocomplnentStyle={{
          borderRaduis: 15,
          width: '95%',
          marginTop: 15,
        }}
      />
    </View>
  );
};

export default Carousel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
