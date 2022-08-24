import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  joinCommunity: {
    marginBottom: 36,
    marginTop: 32,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    color: color.grayBG,
    fontWeight: '700',
    lineHeight: 28,
    textAlign: 'center',
    marginHorizontal: 45,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayBG,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 24,
    marginBottom: 37,
  },
  button: {
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  lastRowText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
    marginHorizontal: 31,
    marginBottom: 19,
  },
  lastRowNumber: {
    fontSize: 24,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '700',
    lineHeight: 32,
    textAlign: 'center',
    marginHorizontal: 31,
  },
});
