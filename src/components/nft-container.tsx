/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

function FrontProduct() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.product}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details_auction' as never, {} as never);
            }}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/1.png')}
            />
          </TouchableOpacity>
          <Text style={[styles.nftText, {marginTop: 12.41}]}>Silent Wave</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              // paddingVertical: 12.53,
              marginTop: 2.68,
              marginBottom: 16.86,
              alignItems: 'center',
            }}>
            <Image
              style={styles.avatar}
              source={require('openart/src/assets/images/avatar/ava1.png')}
            />
            <View
              style={{
                flex: 1,
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

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginLeft: 16.57,
          marginTop: 12.85,
          marginBottom: 15.29,
        }}>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
            color: '#FCFCFC',
            marginRight: 5.98,
          }}>
          Reserve Price
        </Text>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 36,
            color: '#FCFCFC',
            marginRight: 7.51,
          }}>
          1.50 ETH
        </Text>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 24,
            color: '#888888',
          }}>
          $2,683.73
        </Text>
      </View>

      <View
        style={{
          marginVertical: 11,
          marginHorizontal: 16.57,
        }}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={{
              // flex: 1,
              // paddingLeft: 5,
              borderRadius: 8,
              marginBottom: 12,
              backgroundColor: '#2A2A2E',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                padding: 15,
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              Place a bid
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderColor: '#0038F5',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              padding: 15,
              color: '#FCFCFC',
              fontWeight: '700',
            }}>
            View Artwork
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 32,
    marginTop: 23.29,
    marginHorizontal: 16.57,
  },
  image: {
    borderRadius: 24,
    // marginBottom: 11,
    marginTop: 18,
  },
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  avatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
  },
});

export default FrontProduct;
