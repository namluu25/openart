/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Product from './src/components/nft-container';

const YourApp = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#222222',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" translucent={true} />
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingBottom: 17,
          paddingTop: 3,
        }}>
        <Image source={require('./src/assets/images/Logo.png')} />
        <Image source={require('./src/assets/images/Menu.png')} />
      </View>
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
        <Product />
        <View
          style={{
            // flex: 1,
            // flexDirection: 'column',
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
          {/* <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={{
              // flex: 1,
              // paddingLeft: 5,
              borderRadius: 8,
              backgroundColor: 'transparent',
            }}> */}
          <TouchableOpacity
            // colors={['#0038F5', '#9F03FF']}
            // useAngle={true}
            // angle={114.44}
            style={{
              // flex: 1,
              // paddingLeft: 5,
              borderRadius: 8,
              // backgroundColor: 'transparent',
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
          {/* </LinearGradient> */}
        </View>
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
