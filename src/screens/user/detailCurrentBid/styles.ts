import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    currentBid: {
      marginTop: 53,
      marginHorizontal: 16,
      marginBottom: 67,
    },
    infoView: {
      marginHorizontal: 18,
      marginTop: 16,
    },
    buttonBorder: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      alignSelf: 'center',
      marginLeft: 12,
    },
    userButton: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 52,
      alignSelf: 'baseline',
      flexDirection: 'row',
    },
    userAvatar: {
      marginRight: 8,
      marginVertical: 4,
      marginLeft: 5,
    },
    userName: {
      fontSize: 16,
      fontFamily: 'Epilogue-Bold',
      color:
        theme === 'light'
          ? color.grayLabel
          : theme === 'light'
          ? color.grayLabel
          : color.grayBG,
      alignSelf: 'center',
      paddingRight: 16,
      paddingVertical: 8,
    },
    infoDescription: {
      marginVertical: 11,

      fontSize: 13,
      fontFamily: 'Epilogue-Medium',
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      lineHeight: 20,
    },
    hashtagButton: {
      borderRadius: 27,
      borderColor: color.grayPlaceholder,
      borderWidth: 1,
      alignSelf: 'center',
      marginRight: 2,
    },
    hashtagButtonText: {
      fontSize: 13,
      fontFamily: 'Epilogue-Medium',
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      paddingHorizontal: 10,
      paddingVertical: 4,
    },
    shareButton: {
      borderRadius: 16,
      marginTop: 16,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingVertical: 15,
      paddingHorizontal: 18,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    shareButtonText: {
      fontSize: 16,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
      alignItems: 'flex-start',
      flex: 1,
    },
    etherIcon: { marginRight: 30 },
    starIcon: {
      marginRight: 30,
      marginLeft: 2,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    chartIcon: {
      marginRight: 30,
      marginLeft: 6,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    placeBidView: {
      flexDirection: 'column',
      borderRadius: 24,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginTop: 36,
      paddingHorizontal: 20,
    },
    placeBidTitle: {
      fontSize: 20,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 28,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginTop: 19,
    },
    placeBidPriceView: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginTop: 4,
      marginBottom: 16,
    },
    placeBidPriceBold: {
      fontSize: 24,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 32,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginRight: 14,
    },
    placeBidPriceLight: {
      fontSize: 16,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    placeBidSecondTitle: {
      fontSize: 20,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 28,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginTop: 19,
      marginBottom: 3,
    },
    placeBidSecondItem: {
      marginRight: 40,
    },
    secondItemNumber: {
      fontSize: 24,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 32,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    secondItemText: {
      fontSize: 13,
      fontFamily: 'Epilogue-Medium',
      lineHeight: 20,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    touchPlaceBidButton: {
      marginTop: 34,
      marginBottom: 38,
    },
    placeBidButton: {
      borderRadius: 8,
    },
    placeBidButtonText: {
      fontSize: 16,

      textAlign: 'center',
      paddingHorizontal: 15,
      paddingVertical: 9,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    activityTitle: {
      fontSize: 20,

      color: theme === 'light' ? color.grayLabel : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 28,
      paddingTop: 26,
    },
    activityButton: {
      borderRadius: 24,
      marginTop: 12,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      paddingVertical: 15,
      paddingHorizontal: 14,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    activityButtonAvatar: {
      marginRight: 13,
      borderRadius: 24,
    },
    activityButtonTitle: {
      fontSize: 14,

      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 20,
    },
    activityButtonDate: {
      fontSize: 13,

      color: theme === 'light' ? color.grayTitle : color.grayLine,
      fontFamily: 'Epilogue-Medium',
      lineHeight: 20,
    },
    buttonPriceSold: {
      fontSize: 16,

      color: theme === 'light' ? color.grayTitle : color.grayLine,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
    },
    buttonPriceBold: {
      fontSize: 16,

      color: theme === 'light' ? color.grayTitle : color.grayLine,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
      paddingRight: 3,
    },
    buttonPriceLight: {
      fontSize: 13,

      color: theme === 'light' ? color.grayBody : color.grayInputBG,
      fontFamily: 'Epilogue-Medium',
      lineHeight: 20,
      alignSelf: 'center',
    },
    svg: {
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
