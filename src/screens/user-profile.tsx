/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';
import globalStyle from '../theme/globalStyle';

interface Items {
  id: number;
  name: string;
  following: string;
  followers: string;
  description: string;
  avatar: string;
  coverImage: string;
  hash: string;
}

interface CreatedArt {
  id: number;
  image: string;
  name: string;
  avatar: string;
  creatorName: string;
}

export default function UserProfile() {
  const navigation = useNavigation();
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      following: ' ',
      followers: ' ',
      name: ' ',
      description: ' ',
      avatar: ' ',
      coverImage: ' ',
      hash: ' ',
    },
  ]);
  const [artData, setArtData] = useState<Array<CreatedArt>>([
    {
      id: 0,
      image: ' ',
      name: ' ',
      avatar: ' ',
      creatorName: ' ',
    },
  ]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
        setArtData(res.data[0].createdArt);
      })
      .catch(error => console.log(error));
  }, []);
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
          <View style={{ marginHorizontal: 16 }}>
            <Image
              style={{ width: '100%', height: 160 }}
              source={{ uri: `${apiData[0]?.coverImage}` }}
            />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                alignSelf: 'flex-end',
                marginTop: 9.71,
              }}>
              {/* button */}
              <TouchableOpacity
                style={{
                  borderRadius: 40,
                  backgroundColor: '#333333',
                  marginHorizontal: 8,
                }}>
                <Image
                  style={{ margin: 10 }}
                  source={require('openart/src/assets/images/icon/more-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 40,
                  backgroundColor: '#333333',
                  marginRight: 16,
                }}>
                <Image
                  style={{ margin: 10 }}
                  source={require('openart/src/assets/images/icon/export-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 96.7,
                height: 130,
                width: 130,
              }}
              source={{ uri: apiData[0]?.avatar }}
            />

            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Epilogue',
                fontWeight: '700',
                fontSize: 18,
                lineHeight: 28,
                marginTop: 74.33,
                color: '#FCFCFC',
              }}>
              {apiData[0].name}
            </Text>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  marginRight: 4,
                  color: '#F8F8F8',
                }}>
                {apiData[0].hash}
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/icon/copy-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 26.66 }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 28.95,
                }}>
                <View style={{}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                    }}>
                    {apiData[0].following}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#F8F8F8',
                    }}>
                    Following
                  </Text>
                </View>

                <View style={{}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 32,
                      lineHeight: 36,
                      color: '#FCFCFC',
                    }}>
                    {apiData[0].followers}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#F8F8F8',
                    }}>
                    Followers
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    backgroundColor: '#333333',
                    borderRadius: 8,
                    alignSelf: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#FCFCFC',
                      paddingHorizontal: 30,
                      paddingVertical: 9,
                    }}>
                    Follow
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 9.73,
                }}>
                Followed by
              </Text>
              <View>
                <Image
                  style={{
                    borderWidth: 0.95,
                    borderRadius: 100,
                    borderColor: '#FFFFFF',
                  }}
                  source={require('../assets/images/user-profile/ava-2.png')}
                />
                <Image
                  style={{
                    borderWidth: 0.95,
                    borderRadius: 100,
                    borderColor: '#FFFFFF',
                    position: 'absolute',
                    marginLeft: 25,
                  }}
                  source={require('../assets/images/user-profile/ava-3.png')}
                />
                <Image
                  style={{
                    borderWidth: 0.95,
                    borderRadius: 100,
                    borderColor: '#FFFFFF',
                    position: 'absolute',
                    marginLeft: 45,
                  }}
                  source={require('../assets/images/user-profile/ava-4.png')}
                />
                <Image
                  style={{
                    borderWidth: 0.95,
                    borderRadius: 100,
                    borderColor: '#FFFFFF',
                    position: 'absolute',
                    marginLeft: 65,
                  }}
                  source={require('../assets/images/user-profile/ava-5.png')}
                />
                <Image
                  style={{
                    borderWidth: 0.95,
                    borderRadius: 100,
                    borderColor: '#FFFFFF',
                    position: 'absolute',
                    marginLeft: 85,
                  }}
                  source={require('../assets/images/user-profile/ava-3.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#F8F8F8',
                  marginTop: 28.11,
                }}>
                {apiData[0].description}
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#F8F8F8',
                  marginVertical: 15.8,
                }}>
                Member since 2021
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#333333',
                    flexDirection: 'row',
                    borderRadius: 33,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{ marginLeft: 11.82 }}
                    source={require('../assets/images/icon/twitter-icon.png')}
                  />
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 13,
                      lineHeight: 20,
                      paddingRight: 13,
                      paddingTop: 9.93,
                      paddingBottom: 6.07,
                      marginLeft: 3.98,
                      color: '#F8F8F8',
                    }}>
                    @openart
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#333333',
                    flexDirection: 'row',
                    borderRadius: 33,
                    alignSelf: 'center',
                    alignItems: 'center',
                    marginLeft: 10.71,
                  }}>
                  <Image
                    style={{ marginLeft: 14.95 }}
                    source={require('../assets/images/icon/instagram-icon.png')}
                  />
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 13,
                      lineHeight: 20,
                      paddingRight: 17.94,
                      paddingTop: 9.93,
                      paddingBottom: 6.07,
                      marginLeft: 4.97,
                      color: '#F8F8F8',
                    }}>
                    @openart.design
                  </Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  marginTop: 9.24,
                  backgroundColor: '#333333',
                  flexDirection: 'row',
                  borderRadius: 33,
                  alignSelf: 'flex-start',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ marginLeft: 17 }}
                  source={require('../assets/images/icon/link-icon.png')}
                />
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 13,
                    lineHeight: 20,
                    paddingRight: 20.91,
                    paddingTop: 8.74,
                    paddingBottom: 7.26,
                    marginLeft: 9,
                    color: '#F8F8F8',
                  }}>
                  Openart.design
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', marginTop: 39.84 }}>
                <TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 24,
                      lineHeight: 32,
                      color: '#FCFCFC',
                    }}>
                    Created
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 35 }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 24,
                      lineHeight: 32,
                      color: '#555555',
                    }}>
                    Collected
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <>
              {artData.map((art: CreatedArt) => {
                return (
                  <View key={art.id} style={{ marginBottom: 40 }}>
                    <View style={[globalStyle.container, { marginTop: 25 }]}>
                      <View>
                        <TouchableOpacity
                          onPress={() => {
                            navigation.navigate(
                              'DetailSold' as never,
                              {} as never,
                            );
                          }}>
                          <Image
                            style={globalStyle.containerImage}
                            source={{ uri: art.image }}
                          />
                        </TouchableOpacity>

                        <Text
                          style={[
                            globalStyle.containerTitle,
                            { marginTop: 12.41 },
                          ]}>
                          {art.name}
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
                            style={globalStyle.avatar}
                            source={{ uri: art.avatar }}
                          />
                          <View
                            style={{
                              flex: 1,
                              marginLeft: 12,
                            }}>
                            <Text style={globalStyle.containerCreatorName}>
                              {art.creatorName}
                            </Text>
                            <Text style={globalStyle.containerCreatorInfo}>
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
                );
              })}
            </>

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
              <Image source={require('../assets/images/icon/plus-icon.png')} />
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
          </View>
          <View style={{ marginBottom: 93.99 }} />
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
});
