/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';

export default function FAQ() {
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

        <ScrollView style={{marginTop: 32.17}}>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 28,
                  alignSelf: 'center',
                }}>
                Frequently asked questions
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 24,
                  textAlign: 'center',
                  marginTop: 15.92,
                  marginHorizontal: 43.21,
                  marginBottom: 73.66,
                }}>
                Join our community now to get free updates and also alot of
                freebies are waiting for you or{' '}
                <Text
                  style={{
                    // fontFamily: 'Red Hat Display', ???
                    fontFamily: 'Epilogue',
                    textDecorationLine: 'underline',
                    lineHeight: 22,
                  }}>
                  Contact Support
                </Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  marginHorizontal: 17,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12.72,
                  paddingBottom: 10.76,
                  paddingRight: 16.58,
                  paddingLeft: 15.77,
                  marginBottom: 19,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 22,
                  }}>
                  General
                </Text>
                <Image
                  source={require('../assets/images/icon/arrow-down-icon.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  marginHorizontal: 17,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12.72,
                  paddingBottom: 10.76,
                  paddingRight: 16.58,
                  paddingLeft: 15.77,
                  marginBottom: 19,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 22,
                  }}>
                  How does it work
                </Text>
                <Image
                  source={require('../assets/images/icon/arrow-down-icon.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  marginHorizontal: 17,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12.72,
                  paddingBottom: 10.76,
                  paddingRight: 16.58,
                  paddingLeft: 15.77,
                  marginBottom: 19,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 22,
                  }}>
                  How to start
                </Text>
                <Image
                  source={require('../assets/images/icon/arrow-down-icon.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  marginHorizontal: 17,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12.72,
                  paddingBottom: 10.76,
                  paddingRight: 16.58,
                  paddingLeft: 15.77,
                  marginBottom: 19,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 22,
                  }}>
                  How to payment
                </Text>
                <Image
                  source={require('../assets/images/icon/arrow-down-icon.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  marginHorizontal: 17,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 12.72,
                  paddingBottom: 10.76,
                  paddingRight: 16.58,
                  paddingLeft: 15.77,
                  marginBottom: 100.99,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '400',
                    lineHeight: 22,
                  }}>
                  How to bid
                </Text>
                <Image
                  source={require('../assets/images/icon/arrow-down-icon.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

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
