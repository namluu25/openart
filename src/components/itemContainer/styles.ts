import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  activeIcon: {
    position: 'absolute',
    right: 0,
    borderWidth: 2,
    borderColor: color.grayBody,
    borderRadius: 12,
  },
});
