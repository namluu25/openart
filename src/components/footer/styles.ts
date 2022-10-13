import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    aboutText: {
      fontSize: 16,
      color: theme === 'light' ? color.grayBG : color.grayOffWhite,
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
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
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
      color: color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    buttonTextBlack: {
      color: theme === 'light' ? color.grayLabel : color.grayOffWhite,
    },
    buttonDiscover: {
      borderColor: '#0038F5',
      borderWidth: 1,
    },
    footerBottom: {
      backgroundColor: theme === 'light' ? color.grayTitle : color.grayBody,
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
      borderBottomColor: 'white',
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

      color: theme === 'light' ? color.grayInputBG : color.grayOffWhite,
      fontFamily: 'Epilogue-Medium',
      paddingTop: 28,
      paddingBottom: 80,
      paddingLeft: 17,
    },
  });
};
