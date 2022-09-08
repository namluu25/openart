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
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 74,
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
  inputView: {
    marginHorizontal: 16,
    marginTop: 39,
    marginBottom: 28,
  },
  inputTitle: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayBG,
    marginBottom: 16,
  },
  inputBox: {
    paddingVertical: 16,
    paddingLeft: 24,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    color: color.grayBG,
  },
  inputCategory: { marginBottom: 40 },
  firstCategoryInputBox: {
    paddingVertical: 16,
    paddingLeft: 24,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    marginBottom: 13,
    color: color.grayBG,
  },
  secondCategoryText: {
    fontFamily: 'Epilogue',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: color.grayPlaceholder,
    marginLeft: 41,
    marginTop: 2,
  },
  thirdCategoryInputBox: {
    paddingVertical: 16,
    paddingLeft: 24,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    paddingBottom: 100,
    color: color.grayBG,
  },
  thirdCategoryIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginRight: 4,
    marginBottom: 3,
  },
  forthCategoryButton: {
    backgroundColor: color.grayBody,
    borderRadius: 32,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 43,
    paddingBottom: 24,
    paddingHorizontal: 30,
  },
  forthButtonTextLarge: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    color: color.grayBG,
    fontWeight: '700',
    lineHeight: 28,
  },
  forthButtonTextSmall: {
    fontSize: 13,
    fontFamily: 'Epilogue',
    color: color.grayInputBG,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  },
  fifthDescription: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: color.grayInputBG,
    marginBottom: 17,
  },
  fifthButtonTwitter: {
    borderRadius: 8,
    borderColor: color.grayPlaceholder,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
  },
  fifthButtonInstagram: {
    borderRadius: 8,
    borderColor: color.grayPlaceholder,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fifthButtonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  sixthButton: {
    borderRadius: 8,
    backgroundColor: color.grayBody,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 13,
  },
  sixthButtonIcon: { marginRight: 12 },
  youtubeIcon: { marginRight: 11, marginTop: 5 },
  sixthButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '500',
    lineHeight: 24,
  },
  saveButtonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  sixthButtonTiktok: {
    borderRadius: 8,
    backgroundColor: color.grayBody,
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  separatorLine: {
    borderBottomColor: color.grayLine,
    borderBottomWidth: 0.5,
    width: 327,
    alignSelf: 'center',
    marginBottom: 90,
  },
  copyIcon: {
    paddingTop: 5,
  },
});
