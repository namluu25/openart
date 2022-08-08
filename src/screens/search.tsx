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
  TextInput,
} from 'react-native';
import Header from '../components/header';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass, faXmark} from '@fortawesome/free-solid-svg-icons';

export default function SearchPopup() {
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
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />
        <ScrollView>
          <View
            style={{
              marginHorizontal: 24,
              marginTop: 14,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <TextInput
                  style={[styles.inputBox, {color: '#F8F8F8'}]}
                  placeholderTextColor="#FCFCFC"
                  placeholder=" "
                  autoFocus={true}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    marginLeft: 8,
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
                    marginRight: 8,
                    marginVertical: 12,
                    right: 0,
                  }}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    style={{
                      color: '#F8F8F8',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Home' as never, {} as never);
                }}>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 24,
                    color: '#FCFCFC',
                    marginLeft: 11,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                }}>
                People
              </Text>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 12}}>
                <Image source={require('../assets/images/search/ava1.png')} />
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Microsoft
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F8F8F8',
                    }}>
                    @art
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 21}}>
                <Image source={require('../assets/images/search/ava2.png')} />
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Marbella the Frenchie
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F8F8F8',
                    }}>
                    @frenchies
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 21}}>
                <Image source={require('../assets/images/search/ava3.png')} />
                <View style={{flexDirection: 'column', marginLeft: 20}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Oliver
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F8F8F8',
                    }}>
                    @oliver
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 23}}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                }}>
                Items
              </Text>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 15}}>
                <Image source={require('../assets/images/search/image1.png')} />
                <View style={{flexDirection: 'column', marginLeft: 12}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Epic: Fight (1/4) (2009)
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 26,
                      color: '#F8F8F8',
                    }}>
                    @lovetherobot
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 12}}>
                <Image source={require('../assets/images/search/image2.png')} />
                <View style={{flexDirection: 'column', marginLeft: 12}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Chamomile LTR (2021)
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 26,
                      color: '#F8F8F8',
                    }}>
                    @lovetherobot
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{flexDirection: 'row', marginTop: 12}}>
                <Image source={require('../assets/images/search/image3.png')} />
                <View style={{flexDirection: 'column', marginLeft: 12}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 20,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Bliss (2021)
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 26,
                      color: '#F8F8F8',
                    }}>
                    @lovetherobot
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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
  // inputBox: {
  //   paddingVertical: 14,
  //   borderRadius: 8,
  //   backgroundColor: '#333333',
  //   paddingLeft: 36,
  // },
  inputBox: {
    paddingVertical: 14,
    // paddingHorizontal: 135,
    paddingLeft: 36,
    width: 274,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
});
