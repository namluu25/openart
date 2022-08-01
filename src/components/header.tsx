/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingBottom: 17,
        paddingTop: 3,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home' as never, {} as never);
        }}>
        <Image source={require('openart/src/assets/images/icon/Logo.png')} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Menu' as never, {} as never);
        }}>
        <Image source={require('openart/src/assets/images/icon/Menu.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
