import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  faq: {
    marginTop: 32,
    marginBottom: 82,
  },
  title: {
    fontSize: 20,

    color: color.grayBG,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 28,
    alignSelf: 'center',
  },
  description: {
    fontSize: 16,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 16,
    marginHorizontal: 43,
    marginBottom: 74,
  },
  underlineDescription: {
    fontFamily: 'RedHatDisplay-Regular',
    textDecorationLine: 'underline',
    lineHeight: 22,
  },
  button: {
    backgroundColor: color.grayBody,
    marginHorizontal: 17,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 11,
    paddingRight: 17,
    paddingLeft: 16,
    marginBottom: 19,
  },
  buttonText: {
    fontSize: 16,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
  },
});
