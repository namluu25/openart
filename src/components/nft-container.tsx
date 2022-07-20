import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const Rectangle = () => {
  return (
    // <FlatList>
    <View style={styles.rectangle}>
      <Image
        style={styles.image}
        source={require('openart/src/assets/images/nft/1.png')}
      />
      <Text>Silent Wave</Text>
    </View>
    // </FlatList>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 342,
    height: 525.71,
    backgroundColor: '#333333',
    alignSelf: 'center',
    borderRadius: 32,
    paddingTop: 23.29,
  },
  image: {
    width: 320,
    height: 399.21,
    borderRadius: 24,
    alignSelf: 'center',
  },
});

export default Rectangle;
