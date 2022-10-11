import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { ThemeContext } from '../../../../App';

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    coverImage: {
      width: '100%',
      height: 160,
    },
    coverButtonView: {
      flexDirection: 'row',
      position: 'absolute',
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    coverButtonMenu: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
    },
    coverButtonShare: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginRight: 16,
      marginLeft: 8,
    },
    coverButtonIcon: {
      margin: 11,
    },
    avatar: {
      position: 'absolute',
      alignSelf: 'center',
      marginTop: 97,
      height: 130,
      width: 130,
      borderRadius: 100,
    },
    userName: {
      textAlign: 'center',

      fontFamily: 'Epilogue-Bold',
      fontSize: 18,
      lineHeight: 28,
      marginTop: 74,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    userHash: {
      textAlign: 'center',

      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      marginRight: 4,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    inputView: {
      marginHorizontal: 16,
      marginTop: 39,
      marginBottom: 28,
    },
    inputTitle: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 20,
      lineHeight: 28,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginBottom: 16,
    },
    inputBox: {
      paddingVertical: 16,
      paddingLeft: 24,
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    inputCategory: { marginBottom: 40 },
    firstCategoryInputBox: {
      paddingVertical: 16,
      paddingLeft: 24,
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginBottom: 13,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    secondCategoryText: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: color.grayPlaceholder,
      marginLeft: 41,
      marginTop: 2,
    },
    thirdCategoryInputBox: {
      paddingVertical: 16,
      paddingLeft: 24,
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingBottom: 100,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    thirdCategoryIcon: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      marginRight: 4,
      marginBottom: 3,
    },
    forthCategoryButton: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 32,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 43,
      paddingBottom: 24,
      paddingHorizontal: 30,
    },
    forthButtonTextLarge: {
      fontSize: 18,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      fontFamily: 'Epilogue-Bold',
    },
    forthButtonTextSmall: {
      fontSize: 13,

      color: theme === 'light' ? color.grayBody : color.grayInputBG,
      fontFamily: 'Epilogue-Medium',
      lineHeight: 20,
      textAlign: 'center',
    },
    fifthDescription: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayBody : color.grayInputBG,
      marginBottom: 17,
    },
    fifthButtonTwitter: {
      borderRadius: 8,
      borderColor: color.grayPlaceholder,
      borderWidth: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 12,
    },
    fifthButtonInstagram: {
      borderRadius: 8,
      borderColor: color.grayPlaceholder,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    fifthButtonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    sixthButton: {
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingVertical: 16,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: 13,
    },
    sixthButtonIcon: { marginRight: 12 },
    youtubeIcon: { marginRight: 11, marginTop: 5 },
    sixthButtonText: {
      fontSize: 16,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Medium',
      lineHeight: 24,
    },
    saveButtonText: {
      fontSize: 20,

      textAlign: 'center',
      padding: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    sixthButtonTiktok: {
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingVertical: 16,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    separatorLine: {
      borderBottomColor: theme === 'dark' ? 'white' : 'black',
      borderBottomWidth: 0.5,
      width: 327,
      alignSelf: 'center',
      marginBottom: 90,
    },
    copyIcon: {
      paddingTop: 5,
    },
  });
};
