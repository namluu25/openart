import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Details_sold from './src/screens/detail_sold';
import Home from './src/screens/home';
import Menu from './src/screens/menu';
import Details_auction from './src/screens/detail_auction';
import Details_current_bid from './src/screens/detail_current_bid';
import About from './src/screens/about';
import FAQ from './src/screens/faq';
import Join_community from './src/screens/join_community';
import Discover_creator from './src/screens/discover_creator';
import User_profile from './src/screens/user_profile';
import Profile_empty from './src/screens/profile_empty';
import Profile_edit from './src/screens/profile_edit';

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
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          initialRouteName="Profile_edit"
          // initialRouteName="DetailsScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="FAQ" component={FAQ} />
          <Stack.Screen name="Join_community" component={Join_community} />
          <Stack.Screen name="Discover_creator" component={Discover_creator} />
          <Stack.Screen name="Details_sold" component={Details_sold} />
          <Stack.Screen name="Details_auction" component={Details_auction} />
          <Stack.Screen name="User_profile" component={User_profile} />
          <Stack.Screen name="Profile_empty" component={Profile_empty} />
          <Stack.Screen name="Profile_edit" component={Profile_edit} />
          <Stack.Screen
            name="Details_current_bid"
            component={Details_current_bid}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
