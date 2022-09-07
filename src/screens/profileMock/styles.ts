import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 160,
  },
  buttonView: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  buttonMenuBorder: {
    borderRadius: 40,
    backgroundColor: color.grayBody,
    marginRight: 8,
  },
  buttonShareBorder: {
    borderRadius: 40,
    backgroundColor: color.grayBody,
    marginRight: 16,
  },
  icon: { margin: 10 },
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 97,
    height: 130,
    width: 130,
  },
  userName: {
    textAlign: 'center',
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 75,
    color: color.grayOffWhite,
  },
  userHash: {
    textAlign: 'center',
    fontFamily: 'Epilogue',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    marginRight: 4,
    color: color.grayBG,
  },
  secondView: {
    marginHorizontal: 16,
    marginTop: 27,
    marginBottom: 94,
  },
  followView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 29,
  },
  followNumber: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 36,
    color: color.grayOffWhite,
  },
  followText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayBG,
  },
  followButton: {
    backgroundColor: color.grayBody,
    borderRadius: 8,
    alignSelf: 'center',
  },
  followButtonText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayOffWhite,
    paddingHorizontal: 30,
    paddingVertical: 9,
  },
  listFollowTitle: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayBG,
    marginBottom: 10,
  },
  listFollow1: {
    borderWidth: 0.95,
    borderRadius: 100,
    borderColor: '#FFFFFF',
  },
  listFollow2: {
    borderWidth: 0.95,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 25,
  },
  listFollow3: {
    borderWidth: 0.95,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 45,
  },
  listFollow4: {
    borderWidth: 0.95,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 65,
  },
  listFollow5: {
    borderWidth: 0.95,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 85,
  },
  userDescription: {
    fontFamily: 'Epilogue',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: color.grayBG,
    marginTop: 28,
  },
  memberSinceText: {
    fontFamily: 'Epilogue',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: color.grayBG,
    marginVertical: 16,
  },
  socialButton: {
    backgroundColor: color.grayBody,
    flexDirection: 'row',
    borderRadius: 33,
    alignItems: 'center',
    marginRight: 11,
    paddingVertical: 4,
    justifyContent: 'center',
  },
  socialButtonSecondRow: {
    marginTop: 9,
    backgroundColor: color.grayBody,
    flexDirection: 'row',
    borderRadius: 33,
    alignSelf: 'flex-start',
    alignItems: 'center',
    paddingVertical: 8,
  },
  socialButtonIcon: {
    marginLeft: 12,
  },
  socialButtonText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayBG,
    marginLeft: 4,
    marginRight: 14,
  },
  productTitleHighlighted: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: color.grayOffWhite,
  },
  productTitleNormal: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: color.grayLabel,
    marginLeft: 35,
  },
  productTitleView: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 25,
  },
  productButton: {
    borderRadius: 51,
    marginTop: 12,
    backgroundColor: color.grayBody,
    paddingVertical: 18,
    marginBottom: 40,
  },
  productButtonTextSmall: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: color.grayOffWhite,
    fontWeight: '400',
  },
  productButtonTextLarge: {
    fontSize: 24,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  loadMoreButton: {
    borderRadius: 8,
    borderColor: '#0038F5',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 19,
  },
  loadMoreButtonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  copyIcon: {
    paddingTop: 5,
  },
});
