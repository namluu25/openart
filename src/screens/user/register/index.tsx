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
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { authentication } from 'firebase/config';
import {
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth/';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ArrowBack from '@images/icon/ArrowBack.svg';
import { ThemeContext } from '../../../hooks/context';

export const Register = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const name = '';
  const username = '';
  const avatar = '';
  const genHash = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 17; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const hash = genHash();
  const [errorMessage, setErrorMessage] = useState('');
  const registerUser = async () => {
    await createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        signOut(authentication);
        const userProfile = updateProfile(userCredentials.user, {
          displayName: name,
        });
        const firestoreStore = firestore()
          .collection('Users')
          .doc(userCredentials.user.uid)
          .set({ name, email, username, avatar, hash });
        Promise.all([userProfile, firestoreStore]).catch(error =>
          console.log(error),
        );
      })
      .catch(error => {
        console.log(error.message);
        setErrorMessage(error.message);
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
    if (errorMessage === '') {
      Toast.show({
        type: 'success',
        text1: 'Register user successfully',
      });
      navigation.navigate('Login' as never);
    }
  };

  return (
    <SafeAreaView style={[globalStyle(theme).flex]}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login' as never);
              }}>
              <ArrowBack style={styles(theme).backArrowButton} />
            </TouchableOpacity>
            <Text style={styles(theme).title}>Create account</Text>
            <View style={styles(theme).inputView}>
              <TextInput
                style={styles(theme).inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Email Address"
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
                onPress={() => registerUser()}
                style={[
                  globalStyle(theme).buttonRadius,
                  styles(theme).registerButton,
                  styles(theme).buttonColor,
                ]}>
                <Text style={styles(theme).buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
