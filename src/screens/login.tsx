/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';

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

export default function Login() {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home' as never, {} as never);
          }}>
          <Image
            source={require('../assets/images/icon/Logo.png')}
            style={{ alignSelf: 'center', marginVertical: 20 }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 16 }}>
          <TextInput
            style={[styles.inputBox, { marginBottom: 10 }]}
            placeholderTextColor="#888888"
            placeholder="Email address or phone number"
          />
          <TextInput
            style={[styles.inputBox, { color: '#F8F8F8' }]}
            placeholderTextColor="#888888"
            placeholder="Password"
          />
        </View>

        <View style={{ marginHorizontal: 30, flex: 1 }}>
          <TouchableOpacity style={{ marginTop: 20 }}>
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={{
                borderRadius: 8,
                backgroundColor: '#2A2A2E',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 10,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#2196f3',
              borderRadius: 8,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}
            onPress={() => onGoogleButtonPress()}>
            <FontAwesomeIcon
              icon={faGoogle}
              style={{
                color: '#FCFCFC',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
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
  inputBox: {
    borderRadius: 8,
    backgroundColor: '#333333',
  },
});
