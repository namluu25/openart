import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    buttonImage: {
      margin: 11,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
