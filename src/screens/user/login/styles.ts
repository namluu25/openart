import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { ThemeContext } from '../../../../App';

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    buttonColor: {
      backgroundColor:
        theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    inputBox: {
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginBottom: 20,
      paddingLeft: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      height: 48,
      borderWidth: 1,
      borderColor: color.grayPlaceholder,
    },
    logoImage: {
      alignSelf: 'center',
      marginVertical: 20,
      width: 200,
      height: 53,
    },
    inputView: {
      marginHorizontal: 16,
    },
    buttonView: {
      marginHorizontal: 30,
    },
    registerButton: {
      marginTop: 13,
    },
    registerButtonText: {
      fontSize: 15,

      textAlign: 'center',
      color: '#2196f3',
      fontFamily: 'Epilogue-Bold',
      textDecorationColor: 'underline',
    },
    registerButtonSmallText: {
      fontSize: 12,

      textAlign: 'center',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    buttonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 10,
      color: color.grayTitle,
      fontFamily: 'Epilogue-Bold',
    },
    googleButton: {
      marginTop: 20,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    googleButtonLogo: {
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginRight: 8,
      padding: 10,
    },
    googleButtonText: {
      fontSize: 15,

      color: '#2196f3',
      fontFamily: 'Epilogue-Bold',
    },
  });
};
