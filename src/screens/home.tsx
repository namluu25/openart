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
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';
import Header from '../components/header';
import FrontProduct from '../components/nft-container';
import LiveContainer from '../components/nft-live-auction-container';
import HotBid from '../components/nft-hotbid';
import HotCollection from '../components/nft-hotcollection';
import Footer from '../components/footer';

function Home() {
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
          {/* nestedScrollEnabled={true} */}
          {/* use for nesting flatlist inside scrollview */}
          <View>
            <Text style={styles.titleText}>
              {'Discover, collect, and sell'}
              {'\n'}
            </Text>
            <Text style={styles.boldTitleText}>{'Your Digital Art'}</Text>
            <View
              style={{
                marginHorizontal: 24,
                marginTop: 22,
              }}>
              <TextInput
                style={[styles.inputBox, {color: '#F8F8F8'}]}
                placeholderTextColor="#FCFCFC"
                placeholder="Search items, collections, and accounts"
                onPressIn={() => {
                  navigation.navigate('SearchPopup' as never, {} as never);
                }}
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
                  icon={faMicrophone}
                  style={{
                    color: '#F8F8F8',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <FrontProduct />

          <View>
            <LiveContainer />
          </View>

          <HotBid />

          <HotCollection />
          <View
            // separator line
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 0.5,
              width: '85%',
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
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 36,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});

export default Home;
