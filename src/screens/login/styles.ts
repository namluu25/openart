import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  buttonColor: {
    backgroundColor: color.grayOffWhite,
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
  logoImage: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 200,
    height: 53,
  },
  inputView: {
    marginHorizontal: 16,
  },
  buttonView: {
    marginHorizontal: 30,
  },
  registerButton: {
    marginTop: 13,
  },
  registerButtonText: {
    fontSize: 15,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: '#2196f3',
    fontWeight: '700',
    textDecorationColor: 'underline',
  },
  registerButtonSmallText: {
    fontSize: 12,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: color.grayOffWhite,
    fontWeight: '700',
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
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonLogo: {
    color: color.grayOffWhite,
    marginRight: 8,
    padding: 10,
  },
  googleButtonText: {
    fontSize: 15,
    fontFamily: 'Epilogue',
    color: '#2196f3',
    fontWeight: '700',
  },
});
