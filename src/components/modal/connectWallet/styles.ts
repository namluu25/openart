import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { ThemeContext } from '../../../../App';

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 24,
      paddingHorizontal: 17,
      width: '100%',
      paddingTop: 15,
      paddingBottom: 19,
    },
    firstRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    textFirstRow: {
      fontSize: 24,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 32,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    textSecondRow: {
      fontSize: 16,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginBottom: 20,
    },
    textSecondRowBold: {
      fontFamily: 'Epilogue-Bold',
    },
    connectButton: {
      marginBottom: 18,
      marginHorizontal: 45,
    },
    buttonText: {
      fontSize: 20,

      textAlign: 'center',
      paddingVertical: 15,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    lastRowText: {
      fontSize: 16,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      textAlign: 'center',
    },
  });
};
