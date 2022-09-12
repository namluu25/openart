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
} from 'screens';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
}
const Stack = createNativeStackNavigator();
const userID = authentication.currentUser?.uid || auth().currentUser?.uid;

export const AppStack = () => {
  useEffect(() => {
    const getFirestore = async () => {
      await firestore()
        .collection('Users')
        .doc(userID)
        .get()
        .then(res => setUserData(res.data()!));
    };
    getFirestore();
  }, []);
  const [userData, setUserData] = useState<DocumentData>({});
  const initialRouteCheck = () => {
    if (!userData.email || !userData.name || !userData.username) {
      return 'ProfileEdit';
    } else {
      return 'Home';
    }
  };
  return (
    <Stack.Navigator
      initialRouteName={initialRouteCheck()}
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
    </Stack.Navigator>
  );
};
