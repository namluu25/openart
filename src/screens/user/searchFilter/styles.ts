import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  inputBox: {
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 36,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    color: color.grayBG,
    height: 40,
  },
  searchFilter: {
    marginTop: 37,
    marginHorizontal: 16,
  },
  inputBoxView: {
    marginHorizontal: 24,
    marginBottom: 25,
    justifyContent: 'center',
  },
  searchIconButton: {
    position: 'absolute',
    marginLeft: 10,
    marginRight: 12,
    marginVertical: 12,
  },
  voiceIconButton: {
    position: 'absolute',
    marginRight: 10,
    marginVertical: 12,
    right: 0,
  },
  icon: {
    color: color.grayBG,
  },
  titleItem: {
    fontSize: 20,

    lineHeight: 28,
    fontFamily: 'Epilogue-Regular',
    color: color.grayOffWhite,
    marginBottom: 16,
  },
  secondView: {
    marginBottom: 26,
  },
  thirdView: {
    marginBottom: 43,
  },
  slider: {
    width: 250,
    height: 40,
    alignSelf: 'center',
  },
  thirdRowTextView: {
    marginHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  thirdRowText: {
    fontFamily: 'Epilogue-Medium',
    fontSize: 13,
    lineHeight: 20,
    color: color.grayBG,
  },
  forthView: {
    marginBottom: 32,
  },
  fifthView: {
    marginBottom: 37,
  },
  sixthView: {
    marginBottom: 54,
  },
  sixthRowDropdown: {
    backgroundColor: color.grayBody,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 13,
    paddingBottom: 11,
    paddingRight: 16,
    paddingLeft: 16,
  },
  sixthRowDropdownText: {
    fontSize: 16,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
  },
  separatorLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    width: 327,
    alignSelf: 'center',
    marginBottom: 26,
  },
  resetButton: {
    borderRadius: 8,
    borderColor: color.grayBG,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 27,
    marginRight: 194,
    justifyContent: 'center',
  },
  resetButtonText: {
    fontSize: 16,

    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 8,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Regular',
  },
  productView: {
    marginTop: 27,
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

    textAlign: 'center',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Regular',
  },
  productButtonTextLarge: {
    fontSize: 24,

    textAlign: 'center',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  loadMoreButton: {
    borderRadius: 8,
    borderColor: '#0038F5',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 114,
  },
  loadMoreButtonText: {
    fontSize: 20,

    textAlign: 'center',
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  plusIcon: {
    marginRight: 11,
  },
});
