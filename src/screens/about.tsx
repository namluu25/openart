/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  ScrollView,
} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';

export default function About() {
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
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 28,
                  alignSelf: 'center',
                }}>
                About OpenArt
              </Text>
              <Image
                style={{marginTop: 10.91}}
                source={require('../assets/images/icon/about-icon-1.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 22,
                  textAlign: 'center',
                  marginTop: 15.92,
                  marginHorizontal: 43.21,
                  marginBottom: 73.66,
                }}>
                OpenArt help anyone create a beautiful website, landing page,
                app to collect NFTs digital art
              </Text>
            </View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Epilogue',
                color: '#F8F8F8',
                fontWeight: '400',
                lineHeight: 22,
                marginHorizontal: 30.69,
                marginBottom: 28.21,
              }}>
              NFTs—non-fungible tokens—are empowering artists, musicians, and
              all kinds of genre-defying digital creators to invent a new
              cultural paradigm. How this emerging culture of digital art
              ownership looks is up to all of us.
            </Text>
            <View
              style={{
                marginBottom: 52.97,
                marginHorizontal: 16,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 28,
                  marginBottom: 40.2,
                }}>
                How it work
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    backgroundColor: '#333333',
                    alignItems: 'center',
                    borderRadius: 24,
                    height: 187.87,
                    width: 166,
                  }}>
                  <Image
                    style={{marginTop: 9.89, marginBottom: 12.98}}
                    source={require('../assets/images/icon/about-icon-2.png')}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      color: '#FCFCFC',
                      fontWeight: '700',
                      lineHeight: 24,
                    }}>
                    Build together
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#333333',
                    borderRadius: 24,
                    height: 187.87,
                    width: 166,
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{marginTop: 25.35, marginBottom: 18.13}}
                    source={require('../assets/images/icon/about-icon-3.png')}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      color: '#FCFCFC',
                      fontWeight: '700',
                      lineHeight: 24,
                    }}>
                    Trust
                  </Text>
                </View>
              </View>
            </View>
            <View style={{marginHorizontal: 30.69}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 24,
                }}>
                For Creators
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 22,
                  marginBottom: 37.65,
                }}>
                Creators are invited to join Foundation by members of the
                community. Once you’ve received an invite, you’ll need to set up
                a MetaMask wallet with ETH before you can create an artist
                profile and mint an NFT—which means uploading your JPG, PNG, or
                video file to IPFS, a decentralized peer-to-peer storage
                network. It will then be an NFT you can price in ETH and put up
                for auction on Foundation.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 24,
                }}>
                For Collectors
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 22,
                }}>
                On Foundation, anyone can create a profile to start collecting
                NFTs. All you’ll need is a MetaMask wallet and ETH, the
                cryptocurrency used to pay for all transactions on Ethereum.
                Artists list NFTs for auction at a reserve price, and once the
                first bid is placed, a 24-hour auction countdown begins. If a
                bid is placed within the last 15 minutes, the auction extends
                for another 15 minutes.
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 1.21}} />
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
