import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    buttonColor: {
      backgroundColor:
        theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    backArrowButton: {
      marginLeft: 16,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    title: {
      marginBottom: 40,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      textAlign: 'center',
      fontSize: 30,

      fontFamily: 'Epilogue-Bold',
    },
    inputBox: {
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginBottom: 20,
      paddingLeft: 15,
      color: theme === 'light' ? color.grayBody : color.grayOffWhite,
      height: 48,
      borderWidth: 1,
      borderColor: color.grayPlaceholder,
    },
    inputView: {
      marginHorizontal: 16,
    },
    buttonView: {
      marginHorizontal: 30,
    },
    registerButton: {
      marginTop: 20,
    },
    buttonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 10,
      color: theme === 'dark' ? color.grayTitle : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    googleButton: {
      marginTop: 20,
      backgroundColor: '#2196f3',
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
    googleButtonLogo: {
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginRight: 10,
    },
    googleButtonText: {
      fontSize: 20,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
  });
};
