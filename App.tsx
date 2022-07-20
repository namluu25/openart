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
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Rectangle from './src/components/nft-container';

const YourApp = () => {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#222222',
        flex: 1,
      }}>
      <StatusBar barStyle="light-content" translucent={true} />
      <ScrollView>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <Image source={require('./src/assets/images/Logo.png')} />
          <Image source={require('./src/assets/images/Menu.png')} />
        </View>
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
        <Rectangle />
        <LinearGradient
          colors={['#0038F5', '#9F03FF']}
          useAngle={true}
          angle={114.44}>
          <View
            style={{
              width: 343,
              height: 56,
            }}>
            <Button title="Learn More" color="#841584" />
          </View>
        </LinearGradient>
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
    fontFamily: 'Epilogue-VariableFont_wght',
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
