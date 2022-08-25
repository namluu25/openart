import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StatusBar } from 'react-native';
import globalStyle from './src/theme/globalStyle';
import { AppContainer } from './src/navigation/app-navigation';

export default function YourApp() {
  return (
    <View style={globalStyle.AndroidSafeArea}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <SafeAreaProvider>
        <AppContainer />
      </SafeAreaProvider>
    </View>
  );
}
