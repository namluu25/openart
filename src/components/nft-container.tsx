/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function FrontProduct() {
  const navigation = useNavigation();
  return (
    <View style={styles.product}>
      <View style={styles.nftInfo}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details_auction' as never, {} as never);
          }}>
          <Image
            style={styles.image}
            source={require('openart/src/assets/images/nft/1.png')}
          />
        </TouchableOpacity>
        <Text style={[styles.nftText, {padding: 12}]}>Silent Wave</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            alignItems: 'center',
          }}>
          <Image
            style={styles.avatar}
            source={require('openart/src/assets/images/avatar/ava1.png')}
          />
          <View
            style={{
              flex: 1,
              // flexWrap: 'wrap',
              flexShrink: 1,
            }}>
            <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
              Pawel Czerwinski
            </Text>
            <Text
              style={[
                styles.nftText,
                {fontSize: 14, fontWeight: '500', paddingLeft: 12},
              ]}>
              Creator
            </Text>
          </View>
          <Image
            source={require('openart/src/assets/images/icon/heart-icon.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 32,
    margin: 11,
  },
  image: {
    width: 320,
    height: 399.21,
    borderRadius: 24,
    marginVertical: 11,
  },
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  nftInfo: {
    paddingTop: 11,
  },
  avatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
  },
});

export default FrontProduct;
