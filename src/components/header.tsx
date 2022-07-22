/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 17,
        paddingTop: 3,
      }}>
      <Image source={require('openart/src/assets/images/Logo.png')} />
      <Image source={require('openart/src/assets/images/Menu.png')} />
    </View>
  );
};

export default Header;
