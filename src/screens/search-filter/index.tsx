import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Slider from '@react-native-community/slider';

export default function SearchFilter() {
  const navigation = useNavigation();
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
          <View style={{ marginTop: 37.17, marginHorizontal: 16.57 }}>
            <View style={{ marginHorizontal: 24, marginBottom: 25.32 }}>
              <TextInput
                style={[styles.inputBox, { color: '#F8F8F8' }]}
                placeholderTextColor="#888888"
                placeholder="Search item"
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginLeft: 10,
                  marginRight: 12,
                  marginVertical: 12,
                }}>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    color: '#F8F8F8',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginRight: 10,
                  marginVertical: 12,
                  right: 0,
                }}>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={{
                    color: '#F8F8F8',
                  }}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                lineHeight: 28,
                fontWeight: '400',
                color: '#FCFCFC',
                marginBottom: 16,
              }}>
              Type
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 11,
              }}>
              <TouchableOpacity style={{ marginRight: 10 }}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      lineHeight: 22,
                      fontWeight: '400',
                      color: '#F8F8F8',
                      marginHorizontal: 20,
                      paddingTop: 12,
                      paddingBottom: 8,
                    }}>
                    All items
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Game
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#333333', borderRadius: 30 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Video
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 37.53 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Animation
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Photography
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                lineHeight: 28,
                fontWeight: '400',
                color: '#FCFCFC',
                marginBottom: 16,
              }}>
              Price range
            </Text>

            <Slider
              style={{ width: 250, height: 40, alignSelf: 'center' }}
              minimumValue={0.01}
              maximumValue={100}
              minimumTrackTintColor="#0038F5"
              maximumTrackTintColor="#F0F0F0"
              step={0.2}
              // value=
            />
            <View
              style={{
                marginHorizontal: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#F8F8F8',
                }}>
                0.01 ETH
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#F8F8F8',
                }}>
                100 ETH
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                lineHeight: 28,
                fontWeight: '400',
                color: '#FCFCFC',
                marginBottom: 16,
                marginTop: 43,
              }}>
              Chains
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 32.2,
              }}>
              <TouchableOpacity style={{ marginRight: 10 }}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 30,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      lineHeight: 22,
                      fontWeight: '400',
                      color: '#F8F8F8',
                      marginHorizontal: 20,
                      paddingTop: 12,
                      paddingBottom: 8,
                    }}>
                    Ethereum
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Matic
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#333333', borderRadius: 30 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  Klaytn
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                lineHeight: 28,
                fontWeight: '400',
                color: '#FCFCFC',
                marginBottom: 16,
              }}>
              Onsale in
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginBottom: 11,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  ETH
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  WETH
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#333333', borderRadius: 30 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  0xBTC
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 37.53 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  1337
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 30,
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    marginHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  1MT
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                lineHeight: 28,
                fontWeight: '400',
                color: '#FCFCFC',
                marginBottom: 16,
              }}>
              Creator
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: '#333333',
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 12.72,
                paddingBottom: 10.76,
                paddingRight: 16.58,
                paddingLeft: 15.77,
                marginBottom: 54.6,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 22,
                }}>
                Verified only
              </Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>
            <View
              // separator line
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 0.5,
                width: 327,
                alignSelf: 'center',
                marginBottom: 26,
              }}
            />
            <TouchableOpacity
              style={{
                borderRadius: 8,
                borderColor: '#F8F8F8',
                borderWidth: 1,
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 27.32,
                marginRight: 194,
              }}>
              <Image
                source={require('../../assets/images/icon/close-icon.png')}
                style={{
                  marginLeft: 11,
                  marginTop: 9,
                  marginBottom: 7,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  paddingTop: 10,
                  paddingBottom: 8,
                  paddingHorizontal: 8,
                  color: '#FCFCFC',
                  fontWeight: '400',
                }}>
                Reset all filter
              </Text>
            </TouchableOpacity>
            <View>
              <View style={[styles.product, { marginTop: 25.2 }]}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailSold' as never, {} as never);
                    }}>
                    <Image
                      style={styles.image}
                      source={require('../../assets/images/user-profile/art-1.png')}
                    />
                  </TouchableOpacity>

                  <Text style={[styles.nftText, { marginTop: 12.41 }]}>
                    Silent Color
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
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
                      <Text
                        style={[
                          styles.nftText,
                          { fontSize: 18, paddingLeft: 12 },
                        ]}>
                        Pawel Czerwinski
                      </Text>
                      <Text
                        style={[
                          styles.nftText,
                          { fontSize: 14, fontWeight: '500', paddingLeft: 12 },
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
              <TouchableOpacity
                style={{
                  borderRadius: 51,
                  marginTop: 12.14,
                  backgroundColor: '#333333',
                  paddingVertical: 18,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    color: '#FCFCFC',
                    fontWeight: '400',
                  }}>
                  Sold For
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      color: '#FCFCFC',
                      fontWeight: '700',
                    }}>
                    {' '}
                    2.00 ETH
                  </Text>
                </Text>
              </TouchableOpacity>

              <View>
                <View style={[styles.product, { marginTop: 40 }]}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('DetailSold' as never, {} as never);
                      }}>
                      <Image
                        style={styles.image}
                        source={require('../../assets/images/user-profile/art-2.png')}
                      />
                    </TouchableOpacity>

                    <Text style={[styles.nftText, { marginTop: 12.41 }]}>
                      George
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
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
                        <Text
                          style={[
                            styles.nftText,
                            { fontSize: 18, paddingLeft: 12 },
                          ]}>
                          Pawel Czerwinski
                        </Text>
                        <Text
                          style={[
                            styles.nftText,
                            {
                              fontSize: 14,
                              fontWeight: '500',
                              paddingLeft: 12,
                            },
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
                <TouchableOpacity
                  style={{
                    borderRadius: 51,
                    marginTop: 12.14,
                    backgroundColor: '#333333',
                    paddingVertical: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      color: '#FCFCFC',
                      fontWeight: '400',
                    }}>
                    Sold For
                    <Text
                      style={{
                        fontSize: 24,
                        fontFamily: 'Epilogue',
                        textAlign: 'center',
                        color: '#FCFCFC',
                        fontWeight: '700',
                      }}>
                      {' '}
                      2.00 ETH
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>

              <View>
                <View style={[styles.product, { marginTop: 40 }]}>
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('DetailSold' as never, {} as never);
                      }}>
                      <Image
                        style={styles.image}
                        source={require('../../assets/images/user-profile/art-3.png')}
                      />
                    </TouchableOpacity>

                    <Text style={[styles.nftText, { marginTop: 12.41 }]}>
                      Ocean
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
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
                        <Text
                          style={[
                            styles.nftText,
                            { fontSize: 18, paddingLeft: 12 },
                          ]}>
                          Pawel Czerwinski
                        </Text>
                        <Text
                          style={[
                            styles.nftText,
                            {
                              fontSize: 14,
                              fontWeight: '500',
                              paddingLeft: 12,
                            },
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
                <TouchableOpacity
                  style={{
                    borderRadius: 51,
                    marginTop: 12.14,
                    backgroundColor: '#333333',
                    paddingVertical: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      color: '#FCFCFC',
                      fontWeight: '400',
                    }}>
                    Sold For
                    <Text
                      style={{
                        fontSize: 24,
                        fontFamily: 'Epilogue',
                        textAlign: 'center',
                        color: '#FCFCFC',
                        fontWeight: '700',
                      }}>
                      {' '}
                      2.00 ETH
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              borderColor: '#0038F5',
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 16.57,
              marginTop: 49,
              marginBottom: 93.99,
            }}>
            <Image source={require('../../assets/images/icon/plus-icon.png')} />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                paddingVertical: 15,
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              Load more
            </Text>
          </TouchableOpacity>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
  product: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 32,
    marginTop: 40,
  },
  image: {
    borderRadius: 24,
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
  inputBox: {
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 36,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
});
