import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  creatorInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 17,
    alignItems: 'center',
  },
  activeIcon: {
    position: 'absolute',
    right: 0,
    borderWidth: 2,
    borderColor: color.grayBody,
    borderRadius: 12,
  },
  nameView: {
    flex: 1,
    marginLeft: 12,
  },
});
