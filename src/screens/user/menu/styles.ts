import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { ThemeContext } from '../../../../App';

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    menu: {
      marginTop: 107,
      alignItems: 'center',
    },
    menuText: {
      fontSize: 32,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 36,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    textMargin: {
      marginBottom: 24,
    },
    button: {
      borderRadius: 8,
      marginBottom: 12,
      backgroundColor: '#2A2A2E',
      marginHorizontal: 33,
    },
    marginButton: {
      marginTop: 157,
    },
    buttonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
  });
};
