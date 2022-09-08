import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  buttonColor: {
    backgroundColor: color.grayOffWhite,
  },
  backArrowButton: {
    // position: 'absolute',
    marginLeft: 9,
  },
  title: {
    marginBottom: 40,
    color: color.grayOffWhite,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Epilogue',
    fontWeight: '700',
  },
  inputBox: {
    borderRadius: 8,
    backgroundColor: color.grayBody,
    marginBottom: 20,
    paddingLeft: 15,
    color: color.grayOffWhite,
    height: 48,
    borderWidth: 0.3,
    borderColor: color.grayOffWhite,
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
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 10,
    color: color.grayTitle,
    fontWeight: '700',
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
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '700',
  },
});
