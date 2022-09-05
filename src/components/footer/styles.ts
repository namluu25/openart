import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
export default StyleSheet.create({
  aboutText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '400',
    lineHeight: 30,
  },
  logo: {
    alignSelf: 'center',
    width: 177,
    height: 47,
    marginTop: 23,
  },
  slogan300: {
    fontSize: 26,
    fontFamily: 'Epilogue',
    fontWeight: '300',
    lineHeight: 34,
    color: color.grayOffWhite,
    alignSelf: 'center',
    marginTop: 4,
  },
  sloganSemiBold: {
    fontWeight: '400',
  },
  slogan600: {
    fontWeight: '600',
  },
  slogan700: {
    fontWeight: '700',
  },
  buttonView: {
    margin: 11,
    padding: 16,
  },
  buttonEarnNow: {
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  buttonDiscover: {
    borderColor: '#0038F5',
    borderWidth: 1,
  },
  footerBottom: {
    backgroundColor: color.grayBody,
    marginTop: 88,
  },
  footerContact: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 25,
    paddingLeft: 18,
  },
  separatorLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: 368,
    alignSelf: 'center',
    marginTop: 11,
  },
  infoSecondColumn: {
    paddingRight: 10,
  },
  openartText: {
    fontSize: 13,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '500',
    paddingTop: 28,
    paddingBottom: 80,
    paddingLeft: 17,
  },
});
