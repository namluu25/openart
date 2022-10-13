import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    searchPopup: { marginHorizontal: 24, marginTop: 14 },
    inputBox: {
      paddingVertical: 8,
      paddingLeft: 36,
      width: 250,
      borderRadius: 8,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      height: 40,
    },
    inputBoxView: {
      justifyContent: 'center',
    },
    seachIconButton: {
      position: 'absolute',
      marginLeft: 8,
      marginRight: 12,
      marginVertical: 12,
    },
    closeIconButton: {
      position: 'absolute',
      paddingHorizontal: 8,
      paddingVertical: 12,
      right: 0,
    },
    icon: {
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    cancelText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    secondRowView: {
      marginTop: 20,
    },
    itemTitle: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 20,
      lineHeight: 28,
      color: theme === 'light' ? color.grayPlaceholder : color.grayBG,
      marginBottom: 12,
    },
    item: {
      flexDirection: 'row',
      marginBottom: 21,
      marginLeft: 13,
    },
    itemTextLarge: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 20,
      lineHeight: 28,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    itemTextSmall: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    secondRowItemTextView: {
      flexDirection: 'column',
      marginLeft: 20,
    },
    thirdRowItemTextView: {
      flexDirection: 'column',
      marginLeft: 12,
    },
  });
};
