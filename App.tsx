import React, { createContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import globalStyle from 'theme/globalStyle';
import { AppNavigation } from './src/navigation';

const defaultValue = {
  // theme: 'dark',
  // setTheme: (_theme: 'light' | 'dark') => {},
};
// Initiate context
export const ThemeContext = createContext(defaultValue);

export default function YourApp() {
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SafeAreaProvider style={globalStyle().AndroidSafeArea}>
        <AppNavigation />
        <Toast />
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
}
