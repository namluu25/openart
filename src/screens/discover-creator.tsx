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
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

interface Items {
  id: number;
  name: string;
  avatar: string;
  coverImage: string;
  description: string;
  followers: string;
}

export default function DiscoverCreator() {
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: ' ',
      avatar: ' ',
      coverImage: ' ',
      description: ' ',
      followers: ' ',
    },
  ]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/creator')
      .then(res => {
        setApiData(res.data);
      });
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
          <View style={{ marginHorizontal: 16, marginTop: 33.17 }}>
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
            <>
              {apiData.map((item: Items) => {
                return (
                  <View key={item.id}>
                    <View style={{ marginBottom: 40 }}>
                      <View
                        style={{
                          borderRadius: 24,
                          backgroundColor: '#333333',
                        }}>
                        <Image
                          style={{
                            marginBottom: 65.17,
                            width: '100%',
                            height: 135,
                          }}
                          source={{ uri: item.coverImage }}
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
                          {item.name}
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
                          {item.description}
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
                            {item.followers}{' '}
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
                          width: 93,
                          height: 93,
                        }}
                        source={{ uri: item.avatar }}
                      />
                    </View>
                  </View>
                );
              })}
            </>
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
          <View style={{ marginBottom: 107.99 }} />
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
