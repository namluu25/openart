/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './src/components/header';
import FrontProduct from './src/components/nft-container';
import LiveContainer from './src/components/nft-live-auction-container';
import HotBid from './src/components/nft-hotbid';
import HotCollection from './src/components/nft-hotcollection';
import Footer from './src/components/footer';

const YourApp = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#222222',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" translucent={true} />

      <Header />

      <ScrollView>
        <View>
          <Text style={styles.titleText}>
            {'Discover, collect, and sell'}
            {'\n'}
          </Text>
          <Text style={styles.boldTitleText}>{'Your Digital Art'}</Text>
          <TextInput
            style={styles.inputBox}
            placeholderTextColor="#FCFCFC"
            // value={text}
            placeholder="Search items, collections, and accounts"
          />
        </View>

        <FrontProduct />

        <View
          style={{
            margin: 11,
          }}>
          <TouchableOpacity>
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={{
                // flex: 1,
                // paddingLeft: 5,
                borderRadius: 8,
                marginBottom: 12,
                backgroundColor: '#2A2A2E',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 15,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                Place a bid
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 8,
              borderColor: '#0038F5',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                padding: 15,
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              View Artwork
            </Text>
          </TouchableOpacity>
        </View>

        <LiveContainer />

        <HotBid />

        <HotCollection />
        <View
          // separator line
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 0.5,
            width: 327,
            alignSelf: 'center',
          }}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  boldTitleText: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 327,
    alignSelf: 'center',
    backgroundColor: '#333333',
    color: 'white',
    borderColor: '#333333',
  },
});

export default YourApp;
