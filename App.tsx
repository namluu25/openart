import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import globalStyle from 'theme/globalStyle';
import { AppNavigation } from './src/navigation';
import { ThemeProvider } from './src/hooks/context';

export default function YourApp() {
  return (
    <ThemeProvider>
      <SafeAreaProvider style={globalStyle().AndroidSafeArea}>
        <AppNavigation />
        <Toast />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
