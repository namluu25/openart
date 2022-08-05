/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export default function HotBid() {
  const naviRef = useRef(null);
  const screenWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        marginBottom: 58.28,
        marginTop: 80,
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
          }}>
          <Image
            source={require('openart/src/assets/images/icon/fire-icon.png')}
          />
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
          }}>
          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({x: 0, animated: true});
            }}>
            <Image
              source={require('openart/src/assets/images/icon/back-arrow.png')}
              style={{
                marginRight: 16.5,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({x: screenWidth, animated: true});
            }}>
            <Image
              source={require('openart/src/assets/images/icon/forward-arrow.png')}
              style={{
                marginLeft: 16.5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={naviRef}
        style={{marginLeft: 16, marginTop: 24}}>
        <View style={{marginRight: 12}}>
          {/* 1 item view */}
          <View>
            <Image
              // image
              source={require('openart/src/assets/images/hotbid/hotbid-1.png')}
              style={{
                borderRadius: 28,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                marginLeft: 9,
                marginBottom: 11,
              }}>
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                }}
                source={require('../assets/images/avatar/ava2.png')}
              />
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginLeft: 25,
                }}
                source={require('../assets/images/avatar/ava10.png')}
              />
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginLeft: 45,
                }}
                source={require('../assets/images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 6.49,
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 9.12,
            }}>
            <View
              //   tittle + 2nd row
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <Text
                // title
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#FCFCFC',
                  marginRight: 8.29,
                }}>
                Inside Kings Cross
              </Text>

              <TouchableOpacity
                // 2.3eth
                style={{
                  borderRadius: 34,
                  borderColor: '#DCDCDC',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    paddingTop: 5.51,
                    paddingBottom: 2.1,
                    color: '#F8F8F8',
                    fontWeight: '700',
                  }}>
                  2.3 ETH
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 13,
                fontWeight: '500',
                color: '#FCFCFC',
                marginTop: 4.46,
              }}>
              Highest bid
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#FCFCFC',
                }}>
                {' '}
                1.00ETH
              </Text>
            </Text>
          </View>
        </View>

        <View>
          {/* 1 item view */}
          <View>
            <Image
              // image
              source={require('openart/src/assets/images/hotbid/hotbid-1.png')}
              style={{
                borderRadius: 28,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                marginLeft: 9,
                marginBottom: 11,
              }}>
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                }}
                source={require('../assets/images/avatar/ava2.png')}
              />
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginLeft: 25,
                }}
                source={require('../assets/images/avatar/ava10.png')}
              />
              <Image
                style={{
                  borderWidth: 0.95,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginLeft: 45,
                }}
                source={require('../assets/images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 6.49,
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginLeft: 9.12,
            }}>
            <View
              //   tittle + 2nd row
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
              }}>
              <Text
                // title
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#FCFCFC',
                  marginRight: 8.29,
                }}>
                Inside Kings Cross
              </Text>

              <TouchableOpacity
                // 2.3eth
                style={{
                  borderRadius: 34,
                  borderColor: '#DCDCDC',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    paddingTop: 5.51,
                    paddingBottom: 2.1,
                    color: '#F8F8F8',
                    fontWeight: '700',
                  }}>
                  2.3 ETH
                </Text>
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 13,
                fontWeight: '500',
                color: '#FCFCFC',
                marginTop: 4.46,
              }}>
              Highest bid
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 14,
                  fontWeight: '700',
                  color: '#FCFCFC',
                }}>
                {' '}
                1.00ETH
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
