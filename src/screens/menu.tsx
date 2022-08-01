/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';

export default function Menu() {
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
          <View style={{marginTop: 107.17, alignItems: 'center'}}>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#FCFCFC',
                }}>
                About OpenArt
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#FCFCFC',
                  marginTop: 24,
                }}>
                Blog
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#FCFCFC',
                  marginTop: 24,
                }}>
                Help
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#FCFCFC',
                  marginTop: 24,
                }}>
                Contact
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={{marginTop: 181, paddingHorizontal: 33}}>
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
                Connect wallet
              </Text>
            </LinearGradient>
          </TouchableOpacity>
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
