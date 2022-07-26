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
    icon: { margin: 11 },
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
    box: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 32,
      marginBottom: 65,
    },
    boxInner: {
      paddingTop: 29,
      paddingHorizontal: 20,
    },
    boxMargin: {
      marginBottom: 16,
    },
    boxText: {
      fontFamily: 'RedHatDisplay-Regular',
      fontSize: 13,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      lineHeight: 20,
      marginLeft: 13,
    },
    boxTextUnderline: {
      textDecorationLine: 'underline',
    },
    followButton: {
      borderRadius: 8,
      borderColor: theme === 'light' ? color.grayTitle : color.grayLine,
      borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      paddingHorizontal: 33,
      paddingVertical: 8,
    },
    followButtonText: {
      fontSize: 16,
      textAlign: 'center',
      color: theme === 'light' ? color.grayBody : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      alignSelf: 'center',
      marginLeft: 9,
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
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    followText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    coverButtonMenu: {
      borderRadius: 40,
      borderColor: theme === 'light' ? color.grayBody : color.grayOffWhite,
      borderWidth: 1,
    },
    coverButtonShare: {
      borderRadius: 40,
      borderColor: theme === 'light' ? color.grayBody : color.grayOffWhite,
      marginHorizontal: 13,
      borderWidth: 1,
    },
    coverButtonIcon: {
      margin: 11,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    boxButtonMargin: {
      marginTop: 32,
      marginBottom: 19,
    },
    memberText: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      lineHeight: 20,
      textAlign: 'center',
      marginBottom: 21,
    },
    listFollowTitle: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 20,
      lineHeight: 28,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginBottom: 10,
    },
    userDescription: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginTop: 28,
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
    },
    socialButtonText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginLeft: 4,
      marginRight: 14,
    },
    productTitleHighlighted: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    followRowButton: {
      backgroundColor: theme === 'dark' ? color.grayTitle : color.grayLine,
      borderRadius: 100,
      position: 'absolute',
      right: 13,
      top: 13,
    },
    followRowButtonImage: {
      alignSelf: 'center',
      margin: 13,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    title: {
      marginBottom: 25,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
    },
    productTitleNormal: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: color.grayLabel,
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
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingVertical: 18,
      marginBottom: 40,
    },
    productButtonTextSmall: {
      fontSize: 20,
      textAlign: 'center',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Regular',
    },
    productButtonTextLarge: {
      fontSize: 24,
      textAlign: 'center',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    loadMoreButton: {
      borderRadius: 8,
      borderColor:
        theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
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
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    copyIcon: {
      paddingTop: 5,
    },
    plusIcon: {
      marginRight: 11,
    },
    svg: {
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};

// export default Styles;
