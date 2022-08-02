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
  // TouchableOpacity,
  Platform,
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/header';
import FrontProduct from '../components/nft-container';
import LiveContainer from '../components/nft-live-auction-container';
import HotBid from '../components/nft-hotbid';
import HotCollection from '../components/nft-hotcollection';
import Footer from '../components/footer';

function Home() {
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
          {/* nestedScrollEnabled={true} */}
          {/* use for nesting flatlist inside scrollview */}
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
          <View style={{marginBottom: 82}} />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

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
    fontWeight: '700',
    textAlign: 'center',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  inputBox: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 327,
    alignSelf: 'center',
    backgroundColor: '#333333',
    color: 'white',
    borderColor: '#333333',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});

export default Home;
