import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';

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
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home' as never, {} as never);
        }}>
        <Image
          source={require('../../assets/images/icon/Logo.png')}
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#FCFCFC"
          placeholder="Email address or phone number"
        />
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="#FCFCFC"
          placeholder="Password"
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={globalStyle.buttonRadius}>
            <Text style={styles.buttonText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleButton}
          onPress={() => onGoogleButtonPress()}>
          <FontAwesomeIcon icon={faGoogle} style={styles.googleButtonLogo} />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
