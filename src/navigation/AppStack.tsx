import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  About,
  Home,
  Menu,
  FAQ,
  JoinCommunity,
  DiscoverCreator,
  DetailsSold,
  DetailsAuction,
  DetailsCurrentBid,
  ProfileMock,
  ProfileEmpty,
  ProfileEdit,
  SearchFilter,
  SearchPopup,
} from 'screens/user';
import { Profile } from 'screens/creator';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  const [route, setRoute] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const userID =
          authentication.currentUser?.uid || auth().currentUser?.uid;
        const res = await firestore().collection('Users').doc(userID).get();
        const { email, name, username } = res.data()!;
        if (!email || !name || !username) {
          setRoute('ProfileEdit');
        } else {
          setRoute('Home');
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return route !== null ? (
    <Stack.Navigator
      initialRouteName={'Profile'}
      // {route as 'ProfileEdit' | 'Home'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="JoinCommunity" component={JoinCommunity} />
      <Stack.Screen name="DiscoverCreator" component={DiscoverCreator} />
      <Stack.Screen name="DetailsSold" component={DetailsSold} />
      <Stack.Screen name="DetailsAuction" component={DetailsAuction} />
      <Stack.Screen name="DetailsCurrentBid" component={DetailsCurrentBid} />
      <Stack.Screen name="ProfileMock" component={ProfileMock} />
      <Stack.Screen name="ProfileEmpty" component={ProfileEmpty} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="SearchPopup" component={SearchPopup} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  ) : null;
};
