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
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../components/footer';
import Header from '../components/header';

export default function JoinCommunity() {
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1,
        },
      ]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView style={{ marginTop: 31.68 }}>
          <View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '700',
                  lineHeight: 28,
                  textAlign: 'center',
                  marginHorizontal: 45,
                }}>
                Join the Community Upvote to access creator tools.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#F8F8F8',
                  fontWeight: '400',
                  lineHeight: 22,
                  textAlign: 'center',
                  marginTop: 19.77,
                  marginHorizontal: 24.23,
                  marginBottom: 37,
                }}>
                With the Community Upvote, artists are encouraged to support
                other artists and to set the stage for a model of community-led
                curation that puts power in the hands of creators.
              </Text>

              <TouchableOpacity style={{ paddingHorizontal: 16 }}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 8,
                    marginBottom: 12,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      lineHeight: 28,
                      paddingHorizontal: 50.5,
                      paddingVertical: 15,
                      color: '#FCFCFC',
                      fontWeight: '700',
                    }}>
                    Join Community Upvote
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <Image
                style={{ alignSelf: 'center' }}
                source={require('../assets/images/icon/join-community-icon.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '400',
                  lineHeight: 22,
                  textAlign: 'center',
                  marginHorizontal: 31,
                  marginBottom: 19,
                }}>
                Current number of profiles on the Community Upvote:
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '700',
                  lineHeight: 32,
                  textAlign: 'center',
                  marginHorizontal: 31,
                  marginBottom: 35.67,
                }}>
                52.000
              </Text>
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
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
