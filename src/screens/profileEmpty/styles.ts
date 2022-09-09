import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 160,
  },
  coverButtonView: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  coverButtonMenu: {
    borderRadius: 40,
    backgroundColor: color.grayBody,
  },
  coverButtonShare: {
    borderRadius: 40,
    backgroundColor: color.grayBody,
    marginRight: 16,
    marginLeft: 8,
  },
  coverButtonIcon: {
    margin: 11,
  },
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 97,
    height: 130,
    width: 130,
  },
  userName: {
    textAlign: 'center',

    fontFamily: 'Epilogue-Bold',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 74,
    color: color.grayOffWhite,
  },
  userHash: {
    textAlign: 'center',

    fontFamily: 'Epilogue-Medium',
    fontSize: 13,
    lineHeight: 20,
    marginRight: 4,
    color: color.grayBG,
  },
  followRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    marginLeft: 41,
    marginRight: 16,
    marginTop: 27,
  },
  followRowNumber: {
    fontFamily: 'Epilogue-Bold',
    fontSize: 32,
    lineHeight: 36,
    color: color.grayOffWhite,
  },
  followRowText: {
    fontFamily: 'Epilogue-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayBG,
  },
  followRowButton: {
    backgroundColor: color.grayBody,
    borderRadius: 8,
    alignSelf: 'center',
  },
  followRowButtonImage: {
    alignSelf: 'center',
    marginHorizontal: 26,
    marginTop: 9,
    marginBottom: 7,
  },
  thirdRowText: {
    fontFamily: 'Epilogue-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: color.grayOffWhite,
    marginBottom: 71,
    textAlign: 'center',
  },
  forthRowTextLarge: {
    fontFamily: 'Epilogue-Bold',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayOffWhite,
    marginBottom: 4,
    textAlign: 'center',
  },
  forthRowTextSmall: {
    fontFamily: 'Epilogue-Regular',
    fontSize: 16,
    lineHeight: 22,
    color: color.grayBG,
    textAlign: 'center',
  },
  exploreButton: {
    borderRadius: 8,
    borderColor: '#0038F5',
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 35,
    marginTop: 33,
    marginBottom: 134,
  },
  exploreButtonText: {
    fontSize: 20,

    textAlign: 'center',
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  copyIcon: {
    paddingTop: 5,
  },
});
