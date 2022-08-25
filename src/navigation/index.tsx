import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
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
  Login,
} from 'screens';
import { ItemContainer } from 'components';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(34, 34, 34, 1)',
  },
};

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => RNBootSplash.hide({ fade: true })}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
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
        <Stack.Screen name="Search" component={SearchFilter} />
        <Stack.Screen name="SearchPopup" component={SearchPopup} />
        {/* <Stack.Screen name="TestAPI" component={TestAPI} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ItemContainer" component={ItemContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
