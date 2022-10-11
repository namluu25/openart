import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { authentication } from 'firebase/config';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import auth from '@react-native-firebase/auth';
import { ThemeContext } from '../../App';

export const AppNavigation = () => {
  const { theme } = useContext(ThemeContext);
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:
        theme === 'dark' ? 'rgba(34, 34, 34, 1)' : 'rgba(248, 248, 248, 1)',
    },
  };
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
      {isSignedin === true ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
