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
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { authentication } from 'firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/';
import Toast from 'react-native-toast-message';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        updateProfile(userCredentials.user, {
          displayName: name,
        });
        Toast.show({
          type: 'success',
          text1: 'Register user successfully',
        });
      })
      .catch(error => {
        console.log(error);
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
          <View>
            <Image
              source={require('@images/icon/Logo.png')}
              style={styles.logoImage}
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
              />
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
                onPress={registerUser}
                style={[
                  globalStyle.buttonRadius,
                  styles.registerButton,
                  styles.buttonColor,
                ]}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};