import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { authentication } from 'firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth/';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { ThemeContext } from '../../../hooks/context';
import Logo from '@images/icon/Logo.svg';

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
    const genHash = () => {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      let result = ' ';
      const charactersLength = characters.length;
      for (let i = 0; i < 17; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength),
        );
      }

      return result;
    };
    const hash = genHash();
    const id = auth().currentUser?.uid;
    const name = auth().currentUser?.displayName;
    const email = auth().currentUser?.email;
    const username = '';
    const avatar = '';
    await firestore()
      .collection('Users')
      .doc(id)
      .set({ name, email, username, avatar, hash });
  } catch (error) {
    console.log({ error });
  }
}

export const Login = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    <SafeAreaView
      style={[globalStyle(theme).flex, globalStyle(theme).justifyCenter]}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TouchableOpacity
              style={[
                globalStyle().flexRow,
                globalStyle().justifyStart,
                styles().logoImage,
              ]}
              onPress={() => {
                navigation.navigate('Home' as never);
              }}>
              <Text style={globalStyle(theme).logoTextCap}>open</Text>
              <Logo height={45} />
            </TouchableOpacity>
            <View style={styles(theme).inputView}>
              <TextInput
                style={styles(theme).inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Email address or phone number"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <TextInput
                style={styles(theme).inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
              />
            </View>

            <View style={styles(theme).buttonView}>
              <TouchableOpacity
                onPress={signinUser}
                style={[
                  globalStyle(theme).buttonRadius,
                  styles(theme).buttonColor,
                ]}>
                <Text style={styles(theme).buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles(theme).googleButton}
                onPress={() => onGoogleButtonPress()}>
                <FontAwesomeIcon
                  icon={faGoogle}
                  style={styles(theme).googleButtonLogo}
                />
                <Text style={styles(theme).googleButtonText}>
                  Sign in with Google
                </Text>
              </TouchableOpacity>
              <View
                style={[
                  globalStyle(theme).itemCenter,
                  styles(theme).registerButton,
                  globalStyle(theme).flexRow,
                  globalStyle(theme).selfCenter,
                ]}>
                <Text style={styles(theme).registerButtonSmallText}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Register' as never);
                  }}>
                  <Text style={[styles(theme).registerButtonText]}>
                    {' '}
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
