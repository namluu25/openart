/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

const HotBid = () => {
  return (
    <View
      style={{
        marginBottom: 24.5,
      }}>
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

      <ScrollView horizontal>
        <View>
          {/* 1 item view */}
          <Image
            // image
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
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              //   tittle + 2nd row
              style={{
                // flex: 1,
                flexDirection: 'column',
                marginLeft: 13,
                marginTop: 12,
              }}>
              <Text
                // title
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#FCFCFC',
                }}>
                Inside Kings Cross
              </Text>

              <View
                // second row
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
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

            <TouchableOpacity
              // 2.3eth
              style={{
                borderRadius: 34,
                borderColor: '#DCDCDC',
                borderWidth: 1,
                alignSelf: 'center',
                // marginRight: 18,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 10,
                  color: '#F8F8F8',
                  fontWeight: '700',
                }}>
                2.3 ETH
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/* 1 item view */}
          <Image
            // image
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
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              //   tittle + 2nd row
              style={{
                // flex: 1,
                flexDirection: 'column',
                marginLeft: 13,
                marginTop: 12,
              }}>
              <Text
                // title
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#FCFCFC',
                }}>
                Inside Kings Cross 2
              </Text>

              <View
                // second row
                style={{
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
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

            <TouchableOpacity
              // 2.3eth
              style={{
                borderRadius: 34,
                borderColor: '#DCDCDC',
                borderWidth: 1,
                alignSelf: 'center',
                // marginRight: 18,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 10,
                  color: '#F8F8F8',
                  fontWeight: '700',
                }}>
                2.3 ETH
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HotBid;
