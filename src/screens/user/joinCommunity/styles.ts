import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  joinCommunity: {
    marginBottom: 36,
    marginTop: 32,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,

    color: color.grayBG,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 28,
    textAlign: 'center',
    marginHorizontal: 45,
  },
  description: {
    fontSize: 16,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 24,
    marginBottom: 37,
  },
  button: {
    borderRadius: 8,
  },
  touchButton: {
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,

    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 50,
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  lastRowText: {
    fontSize: 16,

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
    textAlign: 'center',
    marginHorizontal: 31,
    marginBottom: 19,
  },
  lastRowNumber: {
    fontSize: 24,

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 32,
    textAlign: 'center',
    marginHorizontal: 31,
  },
});
