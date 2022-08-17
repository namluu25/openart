/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

export default function DetailSold() {
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1,
        },
      ]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
          <View style={{ marginTop: 53, marginHorizontal: 16 }}>
            <Image
              style={{ alignSelf: 'center' }}
              source={require('openart/src/assets/images/nft/7.png')}
            />
            <View
              style={{
                flexDirection: 'column',
                marginHorizontal: 18,
                marginTop: 16,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={[styles.nftText, { paddingVertical: 20 }]}>
                  Silent Color
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  {/* button */}
                  <TouchableOpacity
                    style={{
                      borderRadius: 40,
                      backgroundColor: '#333333',
                      alignSelf: 'center',
                      marginHorizontal: 12,
                    }}>
                    <Image
                      style={{ margin: 11 }}
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 40,
                      backgroundColor: '#333333',
                      alignSelf: 'center',
                    }}>
                    <Image
                      style={{ margin: 11 }}
                      source={require('openart/src/assets/images/icon/export-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 52,
                  alignSelf: 'baseline',
                  flexDirection: 'row',
                }}>
                <Image
                  style={{
                    marginRight: 8,
                    marginVertical: 4,
                    marginLeft: 5,
                  }}
                  source={require('openart/src/assets/images/avatar/ava3.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '700',
                    color: '#F8F8F8',
                    alignSelf: 'center',
                    paddingRight: 16,
                    paddingVertical: 8,
                  }}>
                  @openart
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  marginVertical: 11,
                  fontFamily: 'Epilogue',
                  fontSize: 13,
                  fontWeight: '500',
                  color: '#F8F8F8',
                  lineHeight: 20,
                }}>
                Together with my design team, we designed this futuristic
                Cyberyacht concept artwork. We wanted to create something that
                has not been created yet, so we started to collect ideas of how
                we imagine the Cyberyacht could look like in the future.
              </Text>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    borderRadius: 27,
                    borderColor: '#888888',
                    borderWidth: 1,
                    alignSelf: 'center',
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#F8F8F8',
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    #color
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderRadius: 27,
                    borderColor: '#888888',
                    borderWidth: 1,
                    alignSelf: 'center',
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#F8F8F8',
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    #circle
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderRadius: 27,
                    borderColor: '#888888',
                    borderWidth: 1,
                    alignSelf: 'center',
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#F8F8F8',
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    #black
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    borderRadius: 27,
                    borderColor: '#888888',
                    borderWidth: 1,
                    alignSelf: 'center',
                    marginRight: 2,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontSize: 13,
                      fontWeight: '500',
                      color: '#F8F8F8',
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                    }}>
                    #art
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={{
                borderRadius: 16,
                marginTop: 11,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 18,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('openart/src/assets/images/icon/etherscan-logo.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '700',
                  lineHeight: 24,
                }}>
                View on Etherscan
              </Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 16,
                marginTop: 16,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 18,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('openart/src/assets/images/icon/star-icon.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '700',
                  lineHeight: 24,
                }}>
                View on IPFS
              </Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 16,
                marginTop: 16,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 18,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Image
                source={require('openart/src/assets/images/icon/chartPie-icon.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '700',
                  lineHeight: 24,
                }}>
                View IPFS Metadata
              </Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 24,
                marginTop: 36.24,
                backgroundColor: '#333333',
                paddingLeft: 17,
                flexDirection: 'column',
              }}>
              <View style={{ marginBottom: 24, paddingTop: 25 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginRight: 51,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Epilogue',
                      color: '#F8F8F8',
                      fontWeight: '400',
                      lineHeight: 28,
                    }}>
                    Sold for
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      color: '#F8F8F8',
                      fontWeight: '700',
                      lineHeight: 24,
                    }}>
                    $2,683.73
                  </Text>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    marginRight: 12,
                    marginTop: 11,
                  }}
                  source={require('openart/src/assets/images/icon/sparkle-icon.png')}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 35,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 28,
                    paddingRight: 6.69,
                  }}>
                  Owner by
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#555555',
                    borderRadius: 52,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      marginRight: 8,
                      marginVertical: 4,
                      marginLeft: 5,
                    }}
                    source={require('openart/src/assets/images/avatar/ava4.png')}
                  />
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontSize: 16,
                      fontWeight: '700',
                      color: '#F8F8F8',
                      alignSelf: 'center',
                      paddingRight: 16,
                      paddingVertical: 8,
                    }}>
                    @david
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                color: '#F8F8F8',
                fontWeight: '400',
                lineHeight: 28,
                paddingTop: 25.68,
              }}>
              Activity
            </Text>

            <TouchableOpacity
              style={{
                borderRadius: 24,
                marginTop: 23,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 13.53,
                flexDirection: 'row',
              }}>
              <Image
                style={{ marginRight: 12.98 }}
                source={require('openart/src/assets/images/avatar/ava4.png')}
              />
              <View style={{ marginRight: 100 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Epilogue',
                    color: '#FCFCFC',
                    fontWeight: '700',
                    lineHeight: 20,
                  }}>
                  Auction won by David
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Epilogue',
                    color: '#DCDCDC',
                    fontWeight: '500',
                    lineHeight: 20,
                  }}>
                  June 04, 2021 at 12:00am
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#DCDCDC',
                    fontWeight: '700',
                    lineHeight: 24,
                  }}>
                  Sold for 1.50 ETH
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 24,
                marginTop: 12,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 13.53,
                flexDirection: 'row',
              }}>
              <Image
                style={{ marginRight: 12.98, borderRadius: 24 }}
                source={require('openart/src/assets/images/avatar/ava2.png')}
              />
              <View style={{ marginRight: 98 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Epilogue',
                    color: '#FCFCFC',
                    fontWeight: '700',
                    lineHeight: 20,
                  }}>
                  Bid place by @pawel09
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Epilogue',
                    color: '#DCDCDC',
                    fontWeight: '500',
                    lineHeight: 20,
                  }}>
                  June 06, 2021 at 12:00am
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      color: '#DCDCDC',
                      fontWeight: '700',
                      lineHeight: 24,
                      paddingRight: 2.9,
                    }}>
                    1.50 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'Epilogue',
                      color: '#F0F0F0',
                      fontWeight: '500',
                      lineHeight: 20,
                      alignSelf: 'center',
                    }}>
                    $2,683.73
                  </Text>
                </View>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderRadius: 24,
                marginTop: 12,
                backgroundColor: '#333333',
                paddingVertical: 15,
                paddingHorizontal: 13.53,
                flexDirection: 'row',
              }}>
              <Image
                style={{ marginRight: 12.98, borderRadius: 24 }}
                source={require('openart/src/assets/images/avatar/ava2.png')}
              />
              <View style={{ marginRight: 104 }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Epilogue',
                    color: '#FCFCFC',
                    fontWeight: '700',
                    lineHeight: 20,
                  }}>
                  Listing by @han152
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Epilogue',
                    color: '#DCDCDC',
                    fontWeight: '500',
                    lineHeight: 20,
                  }}>
                  June 04, 2021 at 12:00am
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      color: '#DCDCDC',
                      fontWeight: '700',
                      lineHeight: 24,
                      paddingRight: 2.9,
                    }}>
                    1.00 ETH
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: 'Epilogue',
                      color: '#F0F0F0',
                      fontWeight: '500',
                      lineHeight: 20,
                      alignSelf: 'center',
                    }}>
                    $2,683.73
                  </Text>
                </View>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 58.38 }} />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});