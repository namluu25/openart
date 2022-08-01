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
          flex: 1, //???? ko hieu
        },
      ]}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
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
              About OpenArt
            </Text>
            <Image source={require('../assets/images/icon/about-icon-1.png')} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Epilogue',
                color: '#F8F8F8',
                fontWeight: '400',
                lineHeight: 22,
              }}>
              OpenArt help anyone create a beautiful website, landing page, app
              to collect NFTs digital art
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Epilogue',
                color: '#F8F8F8',
                fontWeight: '400',
                lineHeight: 22,
              }}>
              NFTs—non-fungible tokens—are empowering artists, musicians, and
              all kinds of genre-defying digital creators to invent a new
              cultural paradigm. How this emerging culture of digital art
              ownership looks is up to all of us.
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                color: '#F8F8F8',
                fontWeight: '700',
                lineHeight: 28,
              }}>
              How it work
            </Text>
            <View></View>
            {/* 2 box */}
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
              }}>
              Creators are invited to join Foundation by members of the
              community. Once you’ve received an invite, you’ll need to set up a
              MetaMask wallet with ETH before you can create an artist profile
              and mint an NFT—which means uploading your JPG, PNG, or video file
              to IPFS, a decentralized peer-to-peer storage network. It will
              then be an NFT you can price in ETH and put up for auction on
              Foundation.
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
              first bid is placed, a 24-hour auction countdown begins. If a bid
              is placed within the last 15 minutes, the auction extends for
              another 15 minutes.
            </Text>
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
