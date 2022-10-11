import { useContext } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { color } from 'theme/color';
import { dimensions } from 'theme/globalStyle';
import { ThemeContext } from '../../../../App';

const paddingModal =
  Platform.OS === 'android'
    ? Math.round(dimensions.height * 0.065)
    : Math.round(dimensions.height * 0.065) + 22;

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      alignItems: 'flex-end',
      paddingTop: paddingModal,
      padding: 16,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 24,
      width: '100%',
      paddingBottom: 22,
    },
    triangle: {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderTopWidth: 0,
      borderRightWidth: 13,
      borderBottomWidth: 15,
      borderLeftWidth: 13,
      borderTopColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderLeftColor: 'transparent',
      marginRight: 54,
    },
    firstRow: {
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 27,
      marginHorizontal: 26,
    },
    avatar: {
      marginRight: 17,
      width: 77,
      height: 77,
      borderRadius: 100,
    },
    username: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 18,
      lineHeight: 28,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    hash: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginRight: 5,
    },
    secondRow: {
      backgroundColor: theme === 'dark' ? color.grayTitle : color.grayLine,
      borderRadius: 32,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingVertical: 15,
      marginBottom: 30,
      marginHorizontal: 16,
    },
    walletBorder: {
      borderRadius: 40,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      marginRight: 17,
    },
    walletIcon: {
      margin: 8,
    },
    balanceText: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    secondRowBalance: {
      flexDirection: 'row',
    },
    hideIcon: { marginTop: 8 },
    balance: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginRight: 23,
    },
    listItem: {
      marginHorizontal: 26,
    },
    touchableLine: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 23,
    },
    titleLine: {
      marginLeft: 13,

      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    separatorLine: {
      borderBottomColor: theme === 'dark' ? 'white' : 'black',
      borderBottomWidth: 1,
      width: '98%',
      alignSelf: 'center',
      marginBottom: 17,
    },
    lastRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    lastRowText: {
      marginLeft: 31,

      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    switch: {
      marginRight: 23,
    },
    copyIcon: {
      paddingTop: 5,
    },
  });
};
