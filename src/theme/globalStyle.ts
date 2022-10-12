import { StyleSheet, Platform, Dimensions } from 'react-native';
import { color } from './color';

export const dimensions = Dimensions.get('window');

export default (theme?: string) => {
  return StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? 17 : 0,
      backgroundColor: color.grayTitle,
    },
    containerPriceButton: {
      borderRadius: 8,
      borderColor: color.grayPlaceholder,
      borderWidth: 1,
      alignSelf: 'center',
    },
    containerPriceButtonText: {
      fontSize: 16,
      textAlign: 'center',
      paddingVertical: 9,
      paddingHorizontal: 30,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
    },
    containerTitle: {
      fontSize: 24,
      fontFamily: 'Epilogue-Bold',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayRegularLarge: {
      fontSize: 40,
      lineHeight: 48,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayRegularMedium: {
      fontSize: 32,
      lineHeight: 36,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayRegularSmall: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayBoldLarge: {
      fontSize: 40,
      lineHeight: 48,
      fontFamily: 'Epilogue-Bold',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayBoldMedium: {
      fontSize: 32,
      lineHeight: 36,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    displayBoldSmall: {
      fontSize: 24,
      lineHeight: 32,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    flexRow: {
      flexDirection: 'row',
    },
    flexColumn: {
      flexDirection: 'column',
    },
    buttonRadius: {
      borderRadius: 8,
    },
    selfCenter: {
      alignSelf: 'center',
    },
    selfStart: {
      alignSelf: 'flex-start',
    },
    itemStart: {
      alignItems: 'flex-start',
    },
    itemBaseline: {
      alignItems: 'baseline',
    },
    itemEnd: {
      alignItems: 'flex-end',
    },
    itemCenter: {
      alignItems: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    justifyBetween: {
      justifyContent: 'space-between',
    },
    justifyStart: {
      justifyContent: 'flex-start',
    },
    justifyAround: {
      justifyContent: 'space-around',
    },
    flex: {
      flex: 1,
    },
    logoText: {
      fontFamily: 'Epilogue-Light',
      fontSize: 39,
      lineHeight: 34,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    logoTextCap: {
      fontFamily: 'Epilogue-Light',
      fontSize: 45,
      lineHeight: 45,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
