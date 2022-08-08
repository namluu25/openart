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
import Header from '../components/header';
import Footer from '../components/footer';

export default function ProfileEmpty() {
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
          <View>
            <Image
              style={{width: '100%'}}
              source={require('../assets/images/profile/cover.png')}
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
                  style={{margin: 10}}
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
                  style={{margin: 10}}
                  source={require('openart/src/assets/images/icon/export-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 96.7,
              }}
              source={require('../assets/images/profile/ava.png')}
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
              Gift Habeshaw
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
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
                52fs5ge5g45sov45a
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/icon/copy-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25.13,
                marginLeft: 41.43,
                marginRight: 16.57,
                marginTop: 26.66,
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
                  150
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
                  2024
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
                <Image
                  style={{
                    alignSelf: 'center',
                    marginHorizontal: 26.5,
                    marginTop: 9,
                    marginBottom: 7,
                  }}
                  source={require('../assets/images/icon/edit-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#FCFCFC',
                marginBottom: 71.3,
                textAlign: 'center',
              }}>
              Member since 2021
            </Text>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontWeight: '700',
                fontSize: 20,
                lineHeight: 28,
                color: '#FCFCFC',
                marginBottom: 4.05,
                textAlign: 'center',
              }}>
              Your collection is empty.
            </Text>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontWeight: '400',
                fontSize: 16,
                lineHeight: 22,
                color: '#F8F8F8',
                textAlign: 'center',
              }}>
              Start building your collection by placing bids on artwork.
            </Text>
          </View>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              borderColor: '#0038F5',
              borderWidth: 1,
              justifyContent: 'center',
              marginHorizontal: 35,
              marginTop: 33.3,
              marginBottom: 134,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                paddingVertical: 15,
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              Explore OpenArt
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
    marginHorizontal: 16.57,
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
});
