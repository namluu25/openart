import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
export default StyleSheet.create({
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
    backgroundColor: color.grayTitle,
    marginRight: 31,
    borderRadius: 50,
  },
  logo: {
    width: 140,
    height: 37,
  },
  headerIcon: { width: 24, height: 24 },
});
