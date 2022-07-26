import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    coverImage: {
      width: '100%',
      height: 160,
    },
    buttonView: {
      flexDirection: 'row',
      position: 'absolute',
      alignSelf: 'flex-end',
      marginTop: 10,
    },
    buttonMenuBorder: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginRight: 8,
    },
    buttonShareBorder: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginRight: 16,
    },
    icon: {
      margin: 11,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
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
      marginTop: 75,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    userHash: {
      textAlign: 'center',

      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      marginRight: 4,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    secondView: {
      marginHorizontal: 16,
      marginTop: 27,
      marginBottom: 94,
    },
    followView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 29,
    },
    followNumber: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 32,
      lineHeight: 36,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    followText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    followButton: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 8,
      alignSelf: 'center',
    },
    followButtonText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      paddingHorizontal: 30,
      paddingVertical: 9,
    },
    listFollowTitle: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 20,
      lineHeight: 28,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      marginBottom: 10,
    },
    listFollow1: {
      borderWidth: 0.95,
      borderRadius: 100,
      borderColor: '#FFFFFF',
    },
    listFollow2: {
      borderWidth: 0.95,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      position: 'absolute',
      marginLeft: 25,
    },
    listFollow3: {
      borderWidth: 0.95,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      position: 'absolute',
      marginLeft: 45,
    },
    listFollow4: {
      borderWidth: 0.95,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      position: 'absolute',
      marginLeft: 65,
    },
    listFollow5: {
      borderWidth: 0.95,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      position: 'absolute',
      marginLeft: 85,
    },
    userDescription: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginTop: 28,
    },
    memberSinceText: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: theme === 'light' ? color.grayTitle : color.grayBG,
      marginVertical: 16,
    },
    socialButton: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      flexDirection: 'row',
      borderRadius: 33,
      alignItems: 'center',
      marginRight: 11,
      paddingVertical: 4,
      justifyContent: 'center',
    },
    socialButtonSecondRow: {
      marginTop: 9,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      flexDirection: 'row',
      borderRadius: 33,
      alignSelf: 'flex-start',
      alignItems: 'center',
      paddingVertical: 8,
    },
    socialButtonIcon: {
      marginLeft: 12,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    socialButtonText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      marginLeft: 4,
      marginRight: 14,
    },
    productTitleHighlighted: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    productTitleNormal: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'dark' ? color.grayLabel : color.grayPlaceholder,
    },
    collectedTextMargin: {
      marginLeft: 35,
    },
    productTitleView: {
      flexDirection: 'row',
      marginTop: 40,
      marginBottom: 25,
    },
    productButton: {
      borderRadius: 51,
      marginTop: 12,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayOffWhite,
      paddingVertical: 18,
      marginBottom: 40,
    },
    productButtonTextSmall: {
      fontSize: 20,

      textAlign: 'center',
      color: theme === 'light' ? color.grayLabel : color.grayOffWhite,
      fontFamily: 'Epilogue-Regular',
    },
    productButtonTextLarge: {
      fontSize: 24,

      textAlign: 'center',
      color: theme === 'light' ? color.grayLabel : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    loadMoreButton: {
      borderRadius: 8,
      borderColor: '#0038F5',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 19,
    },
    loadMoreButtonText: {
      fontSize: 20,

      textAlign: 'center',
      paddingVertical: 15,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    copyIcon: {
      paddingTop: 5,
    },
    plusIcon: {
      marginRight: 11,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    svg: {
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
