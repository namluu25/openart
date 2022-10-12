// import createContext and useState
import React, { createContext, useState } from 'react';
interface Props {
  children?: React.ReactNode;
}
interface themeContext {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}
const defaultValue = {
  theme: 'dark',
  setTheme: () => {},
};
// Initiate context
const ThemeContext = createContext<themeContext>(defaultValue);

const ThemeProvider: React.FC<Props> = ({ children }) => {
  // Manage theme state
  const [theme, setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
