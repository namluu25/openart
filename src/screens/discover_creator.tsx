/* eslint-disable react-native/no-inline-styles */
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Discover_creator() {
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1, //???? ko hieu
        },
      ]}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />
        <ScrollView>
          <View style={{marginHorizontal: 16.57, marginTop: 33.17}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                lineHeight: 28,
                fontWeight: '700',
                color: '#FCFCFC',
              }}>
              Discover creator
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                lineHeight: 22,
                fontWeight: '400',
                color: '#F8F8F8',
                marginHorizontal: 55.53,
                marginTop: 15.54,
              }}>
              Follow at least five creators to build your feed…
            </Text>
            <View
              style={{
                marginTop: 39.43,
                marginBottom: 23.15,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 30,
                    backgroundColor: '#2A2A2E',
                    marginRight: 8,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      lineHeight: 22,
                      fontWeight: '400',
                      color: '#F8F8F8',
                      paddingHorizontal: 20,
                      paddingTop: 12,
                      paddingBottom: 8,
                    }}>
                    Feature Creatior
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 30,
                  backgroundColor: '#333333',
                  //   borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    lineHeight: 22,
                    fontWeight: '400',
                    color: '#F8F8F8',
                    paddingHorizontal: 20,
                    paddingTop: 12,
                    paddingBottom: 8,
                  }}>
                  All Creator
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginBottom: 40}}>
              <View
                style={{
                  borderRadius: 24,
                  backgroundColor: '#333333',
                }}>
                <Image
                  style={{marginBottom: 65.17, width: '100%'}}
                  source={require('../assets/images/discover-creator/cover-1.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 24,
                    lineHeight: 32,
                    color: '#FCFCFC',
                    textAlign: 'center',
                  }}>
                  Kennedy Yanko
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                    textAlign: 'center',
                    marginHorizontal: 15.3,
                    marginTop: 8,
                    marginBottom: 15.78,
                  }}>
                  Kennedy Yanko is an artist working in found metal and paint
                  skin. Her methods reflect a dual abstract expressionist-surr…
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16.25,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                      marginLeft: 20.4,
                    }}>
                    2024{' '}
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#F8F8F8',
                      }}>
                      Followers
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#222222',
                      borderRadius: 8,
                      marginRight: 17,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '700',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#FCFCFC',
                        paddingHorizontal: 30,
                        paddingTop: 9,
                        paddingBottom: 7,
                      }}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                style={{
                  alignSelf: 'center',
                  borderWidth: 3.81,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginTop: 93.23,
                }}
                source={require('../assets/images/avatar/ava-5.png')}
              />
            </View>

            <View style={{marginBottom: 40}}>
              <View
                style={{
                  borderRadius: 24,
                  backgroundColor: '#333333',
                }}>
                <Image
                  style={{marginBottom: 65.17, width: '100%'}}
                  source={require('../assets/images/discover-creator/cover-2.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 24,
                    lineHeight: 32,
                    color: '#FCFCFC',
                    textAlign: 'center',
                  }}>
                  Holly Herndon
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                    textAlign: 'center',
                    marginHorizontal: 15.3,
                    marginTop: 8,
                    marginBottom: 15.78,
                  }}>
                  A family of artists in Ethiopia making art in the style of
                  tizita- nostalgia and longing for the past. {'\n'} 📍 Addis
                  Ababa …
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16.25,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                      marginLeft: 20.4,
                    }}>
                    1024{' '}
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#F8F8F8',
                      }}>
                      Followers
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#222222',
                      borderRadius: 8,
                      marginRight: 17,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '700',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#FCFCFC',
                        paddingHorizontal: 30,
                        paddingTop: 9,
                        paddingBottom: 7,
                      }}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                style={{
                  alignSelf: 'center',
                  borderWidth: 3.81,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginTop: 93.23,
                }}
                source={require('../assets/images/avatar/ava-6.png')}
              />
            </View>

            <View style={{marginBottom: 40}}>
              <View
                style={{
                  borderRadius: 24,
                  backgroundColor: '#333333',
                }}>
                <Image
                  style={{marginBottom: 65.17, width: '100%'}}
                  source={require('../assets/images/discover-creator/cover-3.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 24,
                    lineHeight: 32,
                    color: '#FCFCFC',
                    textAlign: 'center',
                  }}>
                  Addie Wagenknecht
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                    textAlign: 'center',
                    marginHorizontal: 15.3,
                    marginTop: 8,
                    marginBottom: 15.78,
                  }}>
                  Addie Wagenknecht and Aiala Hernando. Documentation of the End
                  of the Worlds.
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16.25,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                      marginLeft: 20.4,
                    }}>
                    1099{' '}
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#F8F8F8',
                      }}>
                      Followers
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#222222',
                      borderRadius: 8,
                      marginRight: 17,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '700',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#FCFCFC',
                        paddingHorizontal: 30,
                        paddingTop: 9,
                        paddingBottom: 7,
                      }}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                style={{
                  alignSelf: 'center',
                  borderWidth: 3.81,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginTop: 93.23,
                }}
                source={require('../assets/images/avatar/ava-7.png')}
              />
            </View>

            <View style={{marginBottom: 40}}>
              <View
                style={{
                  borderRadius: 24,
                  backgroundColor: '#333333',
                }}>
                <Image
                  style={{marginBottom: 65.17, width: '100%'}}
                  source={require('../assets/images/discover-creator/cover-4.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 24,
                    lineHeight: 32,
                    color: '#FCFCFC',
                    textAlign: 'center',
                  }}>
                  Kinlaw
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                    textAlign: 'center',
                    marginHorizontal: 15.3,
                    marginTop: 8,
                    marginBottom: 15.78,
                  }}>
                  Audio Composer, {'\n'}Choreographer,Vocalist + Scientist{' '}
                  {'\n'}~Sigh of My Hand (1/3) is listed now ~ made in
                  partnersh…
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16.25,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                      marginLeft: 20.4,
                    }}>
                    1099{' '}
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#F8F8F8',
                      }}>
                      Followers
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#222222',
                      borderRadius: 8,
                      marginRight: 17,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '700',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#FCFCFC',
                        paddingHorizontal: 30,
                        paddingTop: 9,
                        paddingBottom: 7,
                      }}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                style={{
                  alignSelf: 'center',
                  borderWidth: 3.81,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginTop: 93.23,
                }}
                source={require('../assets/images/avatar/ava-8.png')}
              />
            </View>

            <View style={{marginBottom: 43.81}}>
              <View
                style={{
                  borderRadius: 24,
                  backgroundColor: '#333333',
                }}>
                <Image
                  style={{marginBottom: 65.17, width: '100%'}}
                  source={require('../assets/images/discover-creator/cover-5.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 24,
                    lineHeight: 32,
                    color: '#FCFCFC',
                    textAlign: 'center',
                  }}>
                  Jennifer Mehigan
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                    textAlign: 'center',
                    marginHorizontal: 15.3,
                    marginTop: 8,
                    marginBottom: 15.78,
                  }}>
                  LOW POLY GODDESS / Jennifer Mehigan is an interdisciplinary
                  artist whose work engages with abstract manifestations of de…
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 16.25,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                      marginLeft: 20.4,
                    }}>
                    1099{' '}
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#F8F8F8',
                      }}>
                      Followers
                    </Text>
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#222222',
                      borderRadius: 8,
                      marginRight: 17,
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '700',
                        fontSize: 16,
                        lineHeight: 24,
                        color: '#FCFCFC',
                        paddingHorizontal: 30,
                        paddingTop: 9,
                        paddingBottom: 7,
                      }}>
                      Follow
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Image
                style={{
                  alignSelf: 'center',
                  borderWidth: 3.81,
                  borderRadius: 100,
                  borderColor: '#FFFFFF',
                  position: 'absolute',
                  marginTop: 93.23,
                }}
                source={require('../assets/images/avatar/ava-9.png')}
              />
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
              marginHorizontal: 35,
            }}>
            <Image source={require('../assets/images/icon/plus_icon.png')} />
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
          <View style={{marginBottom: 107.99}} />
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
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
