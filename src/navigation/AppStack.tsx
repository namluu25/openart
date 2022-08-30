import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  About,
  Home,
  Menu,
  FAQ,
  JoinCommunity,
  DiscoverCreator,
  DetailSold,
  DetailsAuction,
  DetailsCurrentBid,
  UserProfile,
  ProfileEmpty,
  ProfileEdit,
  SearchFilter,
  SearchPopup,
} from 'screens';
import { ItemContainer } from 'components';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="FAQ" component={FAQ} />
      <Stack.Screen name="JoinCommunity" component={JoinCommunity} />
      <Stack.Screen name="DiscoverCreator" component={DiscoverCreator} />
      <Stack.Screen name="DetailSold" component={DetailSold} />
      <Stack.Screen name="DetailsAuction" component={DetailsAuction} />
      <Stack.Screen name="DetailsCurrentBid" component={DetailsCurrentBid} />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen name="ProfileEmpty" component={ProfileEmpty} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
      <Stack.Screen name="SearchPopup" component={SearchPopup} />
      <Stack.Screen name="ItemContainer" component={ItemContainer} />
    </Stack.Navigator>
  );
};
