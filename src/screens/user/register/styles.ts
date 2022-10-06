import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  buttonColor: {
    backgroundColor: color.grayOffWhite,
  },
  backArrowButton: {
    marginLeft: 16,
  },
  title: {
    marginBottom: 40,
    color: color.grayOffWhite,
    textAlign: 'center',
    fontSize: 30,

    fontFamily: 'Epilogue-Bold',
  },
  inputBox: {
    borderRadius: 8,
    backgroundColor: color.grayBody,
    marginBottom: 20,
    paddingLeft: 15,
    color: color.grayOffWhite,
    height: 48,
    borderWidth: 1,
    borderColor: color.grayPlaceholder,
  },
  inputView: {
    marginHorizontal: 16,
  },
  buttonView: {
    marginHorizontal: 30,
  },
  registerButton: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,

    textAlign: 'center',
    padding: 10,
    color: color.grayTitle,
    fontFamily: 'Epilogue-Bold',
  },
  googleButton: {
    marginTop: 20,
    backgroundColor: '#2196f3',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  googleButtonLogo: {
    color: color.grayOffWhite,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 20,

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
});
