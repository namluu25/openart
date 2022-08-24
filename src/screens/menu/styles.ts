import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  menu: {
    marginTop: 107,
    alignItems: 'center',
  },
  menuText: {
    fontFamily: 'Epilogue',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
    color: color.grayOffWhite,
    marginBottom: 24,
  },
  button: {
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#2A2A2E',
    marginHorizontal: 33,
    marginTop: 157,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
});
