import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { authentication } from 'firebase/config';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(34, 34, 34, 1)',
  },
};

export const AppNavigation = () => {
  const [initRoute, setInitRoute] = useState<string | null>(null);
  const [isSignedin, setIsSignedin] = useState(false);
  useEffect(() => {
    authentication.onAuthStateChanged(user => {
      if (user) {
        setIsSignedin(true);
      } else {
        setIsSignedin(false);
      }
    });
    auth().onAuthStateChanged(user => {
      if (user) {
        setIsSignedin(true);
      } else {
        setIsSignedin(false);
      }
    });
    (async () => {
      const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
      const res = await firestore().collection('Users').doc(userID).get();
      const { email, name, username } = res.data()!;
      // console.log(email, name, username);
      if (!email || !name || !username) {
        setInitRoute('ProfileEdit');
      } else {
        setInitRoute('Home');
      }
    })();
  }, []);
  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      {isSignedin === true ? <AppStack value={initRoute} /> : <AuthStack />}
    </NavigationContainer>
  );
};
