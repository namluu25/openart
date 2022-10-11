import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { ThemeContext } from '../../../App';

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    aboutText: {
      fontSize: 16,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 30,
    },
    logo: {
      alignSelf: 'center',
      width: 177,
      height: 47,
      marginTop: 23,
    },
    slogan300: {
      fontSize: 26,

      fontFamily: 'Epilogue-Light',
      lineHeight: 34,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      alignSelf: 'center',
      marginTop: 4,
    },
    sloganSemiBold: {
      fontFamily: 'Epilogue-Regular',
    },
    slogan600: {
      fontFamily: 'Epilogue-SemiBold',
    },
    slogan700: {
      fontFamily: 'Epilogue-Bold',
    },
    buttonView: {
      margin: 11,
      padding: 16,
    },
    buttonEarnNow: {
      marginBottom: 12,
    },
    buttonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    buttonDiscover: {
      borderColor: '#0038F5',
      borderWidth: 1,
    },
    footerBottom: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginTop: 88,
    },
    footerContact: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 25,
      paddingLeft: 18,
    },
    separatorLine: {
      borderBottomColor: theme === 'dark' ? 'white' : 'black',
      borderBottomWidth: 1,
      width: 368,
      alignSelf: 'center',
      marginTop: 11,
    },
    infoSecondColumn: {
      paddingRight: 10,
    },
    openartText: {
      fontSize: 13,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Medium',
      paddingTop: 28,
      paddingBottom: 80,
      paddingLeft: 17,
    },
  });
};
