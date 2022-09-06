import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { authentication } from 'firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth/';
import Toast from 'react-native-toast-message';

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

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Register user successfully',
        });
      })
      .catch(error => {
        if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
          Toast.show({
            type: 'error',
            text1: 'Email already in use',
          });
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          Toast.show({
            type: 'error',
            text1: 'Invalid email address',
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Password should be at least 6 characters',
          });
        }
      });
  };
  const signinUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {})
      .catch(error => {
        if (error.message === 'Firebase: Error (auth/user-not-found).') {
          Toast.show({
            type: 'error',
            text1: 'User not found, please register',
          });
        } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
          Toast.show({
            type: 'error',
            text1: 'Invalid email address',
          });
        } else {
          Toast.show({
            type: 'error',
            text1: 'Wrong password',
          });
        }
      });
  };

  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.justifyCenter]}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Image
              source={require('@images/icon/Logo.png')}
              style={styles.logoImage}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Email address or phone number"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>

            <View style={styles.buttonView}>
              <TouchableOpacity
                onPress={signinUser}
                style={[globalStyle.buttonRadius, styles.buttonColor]}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={registerUser}
                style={[
                  globalStyle.buttonRadius,
                  styles.registerButton,
                  styles.buttonColor,
                ]}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.googleButton}
                onPress={() => onGoogleButtonPress()}>
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={styles.googleButtonLogo}
                />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
