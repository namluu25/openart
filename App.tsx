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
          initialRouteName="Home"
          // initialRouteName="DetailsScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Details_sold" component={Details_sold} />
          <Stack.Screen name="Details_auction" component={Details_auction} />
          <Stack.Screen
            name="Details_current_bid"
            component={Details_current_bid}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
