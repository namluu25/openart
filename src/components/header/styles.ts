import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
export default (theme?: string) => {
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 16,
      marginBottom: 17,
      marginTop: 3,
    },
    buttonBefore: {
      backgroundColor: color.grayLabel,
      marginRight: 31,
      borderRadius: 50,
    },
    buttonAfter: {
      backgroundColor: theme === 'dark' ? color.grayTitle : color.grayInputBG,
      marginRight: 31,
      borderRadius: 50,
    },
    logo: {
      width: 140,
      height: 37,
    },
    headerIcon: {
      width: 24,
      height: 24,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
