import React, { useState } from 'react';
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
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { authentication } from 'firebase/config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '@images/icon/ArrowBack.svg';

export const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const name = '';
  const username = '';
  const avatar = '';
  const genHash = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < 17; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const hash = genHash();
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        const userProfile = updateProfile(userCredentials.user, {
          displayName: name,
        });
        const firestoreStore = firestore()
          .collection('Users')
          .doc(userCredentials.user.uid)
          .set({ name, email, username, avatar, hash });
        Promise.all([userProfile, firestoreStore]).then(() => {
          Toast.show({
            type: 'success',
            text1: 'Register user successfully',
          });
        });
      })
      .catch(error => {
        console.log(error.message);
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

  return (
    <SafeAreaView style={[globalStyle.flex]}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login' as never);
              }}>
              <ArrowBack style={styles.backArrowButton} />
            </TouchableOpacity>
            <Text style={styles.title}>Create account</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Email Address"
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
                onPress={() => {
                  navigation.navigate('Login' as never);
                  registerUser();
                }}
                style={[
                  globalStyle.buttonRadius,
                  styles.registerButton,
                  styles.buttonColor,
                ]}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
