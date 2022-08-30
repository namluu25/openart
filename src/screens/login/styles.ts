import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  inputBox: {
    borderRadius: 8,
    backgroundColor: color.grayBody,
    marginBottom: 20,
    paddingLeft: 15,
    color: '#FCFCFC',
  },
  logoImage: {
    alignSelf: 'center',
    marginVertical: 20,
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
    color: color.grayOffWhite,
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
