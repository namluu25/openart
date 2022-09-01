import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from 'firebase/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth/';

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
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };
  const signinUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {})
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView>
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
        <TouchableOpacity onPress={signinUser}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={globalStyle.buttonRadius}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={registerUser}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={[globalStyle.buttonRadius, styles.registerButton]}>
            <Text style={styles.buttonText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => onGoogleButtonPress()}>
          <FontAwesomeIcon icon={faGoogle} style={styles.googleButtonLogo} />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
