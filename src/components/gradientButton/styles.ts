import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    secondItemView: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      marginBottom: 11,
      width: 350,
    },
    secondGradientItemButton: {
      borderRadius: 30,
    },
    secondItemButton: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      borderRadius: 30,
      marginRight: 10,
      marginBottom: 11,
    },
    secondItemButtonText: {
      fontSize: 16,

      textAlign: 'center',
      lineHeight: 22,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      marginHorizontal: 20,
      paddingTop: 12,
      paddingBottom: 8,
    },
  });
};
