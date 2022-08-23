import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DetailSold from './src/screens/detail-sold';
import Home from './src/screens/home';
import Menu from './src/screens/menu';
import DetailsAuction from './src/screens/detail-auction';
import DetailsCurrentBid from './src/screens/detail-current-bid';
import About from './src/screens/about';
import FAQ from './src/screens/faq';
import JoinCommunity from './src/screens/join-community';
import DiscoverCreator from './src/screens/discover-creator';
import UserProfile from './src/screens/user-profile';
import ProfileEmpty from './src/screens/profile-empty';
import ProfileEdit from './src/screens/profile-edit';
import SearchFilter from './src/screens/search-filter';
import SearchPopup from './src/screens/search';
import TestAPI from './src/screens/screen-default';
import Login from './src/screens/login';
import RNBootSplash from 'react-native-bootsplash';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'rgba(34, 34, 34, 1)',
  },
};

const Stack = createNativeStackNavigator();

export default function YourApp() {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={MyTheme}
        onReady={() => RNBootSplash.hide({ fade: true })}>
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
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="ProfileEmpty" component={ProfileEmpty} />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="Search" component={SearchFilter} />
          <Stack.Screen name="SearchPopup" component={SearchPopup} />
          <Stack.Screen name="TestAPI" component={TestAPI} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen
            name="DetailsCurrentBid"
            component={DetailsCurrentBid}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
