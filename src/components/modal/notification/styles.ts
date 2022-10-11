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
      paddingBottom: 30,
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
      marginRight: 109,
    },
    firstRow: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      marginTop: 36,
      marginBottom: 27,
      marginHorizontal: 26,
    },
    secondRow: {
      marginHorizontal: 20,
      marginBottom: 10,
    },
    item: {
      marginLeft: 16,
    },
    itemText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    itemPrice: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayBody : color.grayInputBG,
    },
    itemDate: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 13,
      lineHeight: 20,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginTop: 3,
    },
    separatorLine: {
      borderBottomColor: theme === 'dark' ? 'white' : 'black',
      borderBottomWidth: 1,
      width: '100%',
      alignSelf: 'center',
      marginTop: 10,
    },
    lastRow: {
      marginHorizontal: 20,
    },
    gradientButton: {
      marginBottom: 12,
    },
    textButton: {
      fontSize: 16,

      textAlign: 'center',
      padding: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    normalButton: {
      borderColor: '#0038F5',
      borderWidth: 1,
    },
  });
};
