/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const HotBid = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginTop: 80,
          }}>
          <Image source={require('openart/src/assets/images/fire-icon.png')} />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Epilogue',
              fontWeight: '700',
              color: '#FCFCFC',
            }}>
            {' '}
            Hot bid
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginTop: 80,
          }}>
          <Image
            source={require('openart/src/assets/images/back-arrow.png')}
            style={{
              marginRight: 16.5,
            }}
          />
          <Image
            source={require('openart/src/assets/images/forward-arrow.png')}
            style={{
              marginLeft: 16.5,
            }}
          />
        </View>
      </View>
      <ScrollView>
        <Image
          source={require('openart/src/assets/images/hotbid/hotbid-1.png')}
          style={{
            marginTop: 24,
            borderRadius: 28,
            marginLeft: 13,
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginLeft: 13,
            marginTop: 12,
          }}>
          <Text
            style={{
              fontFamily: 'Epilogue',
              fontSize: 16,
              fontWeight: '700',
              color: '#FCFCFC',
            }}>
            Inside Kings Cross
          </Text>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 5,
            }}>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 13,
                fontWeight: '500',
                color: '#FCFCFC',
              }}>
              Highest bid
            </Text>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 14,
                fontWeight: '500',
                color: '#FCFCFC',
              }}>
              {' '}
              1.00ETH
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HotBid;
