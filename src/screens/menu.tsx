/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import Connect_wallet from '../components/modal-connect-wallet';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '14813577460-bkjpc8pp44uk7saapmg5ku9m7b39ei8u.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  try {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log({ error });
  }
}

// const [login, onGoogleButtonPress] = useContext();
export default function Menu() {
  const [visible, setVisible] = useState(false);
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
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
          <View style={{ marginTop: 107.17, alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About' as never, {} as never);
              }}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JoinCommunity' as never, {} as never);
              }}>
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
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FAQ' as never, {} as never);
              }}>
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

          <GoogleSigninButton
            // onPress={() =>
            //   onGoogleButtonPress().then(() =>
            //     console.log('Signed in with Google!'),
            //   )
            // }
            onPress={() => onGoogleButtonPress()}
            style={{
              marginTop: 181,
              borderRadius: 24,
              alignSelf: 'center',
              marginBottom: 10,
            }}
            color={GoogleSigninButton.Color.Dark}
            size={GoogleSigninButton.Size.Wide}
          />
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={{ paddingHorizontal: 33 }}>
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={{
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
          <Connect_wallet
            visbile={visible}
            handleClose={() => setVisible(false)}
          />
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
