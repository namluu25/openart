import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { globalStyle } from 'theme/globalStyle';
import { AppNavigation } from './src/navigation';

export default function YourApp() {
  return (
    <SafeAreaProvider style={globalStyle.AndroidSafeArea}>
      <AppNavigation />
    </SafeAreaProvider>
  );
}
