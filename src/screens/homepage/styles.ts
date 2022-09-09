import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  home: { marginHorizontal: 16 },
  titleText: {
    fontSize: 18,
    fontFamily: 'Epilogue-Bold',
    textAlign: 'center',
    color: color.grayOffWhite,
  },
  boldTitleText: {
    fontSize: 32,
    fontFamily: 'Epilogue-Bold',
    textAlign: 'center',
    color: color.grayOffWhite,
  },
  searchBar: {
    marginHorizontal: 8,
    marginTop: 22,
    marginBottom: 23,
    paddingTop: 13,
    paddingBottom: 11,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  searchBarText: {
    color: color.grayOffWhite,
  },
  searchBarIcon: {
    color: color.grayBG,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 12.85,
    marginBottom: 15.29,
  },
  priceViewFirst: {
    fontSize: 16,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
    color: color.grayOffWhite,
    marginRight: 5.98,
  },
  priceViewSecond: {
    fontSize: 32,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 36,
    color: color.grayOffWhite,
    marginRight: 7.51,
  },
  priceViewThird: {
    fontSize: 16,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
    color: color.grayPlaceholder,
  },
  gradientButton: {
    borderRadius: 8,
  },
  touchGradientButton: {
    marginBottom: 12,
  },
  normalButton: {
    borderRadius: 8,
    borderColor: '#0038F5',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 20,

    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  viewMoreButton: {
    borderRadius: 8,
    borderColor: '#0038F5',
    borderWidth: 1,
    marginTop: 60,
    marginBottom: 24,
  },
  viewMoreButtonText: {
    fontSize: 20,

    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  separatorLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '87%',
    alignSelf: 'center',
    marginBottom: 82,
  },
  button: {
    borderRadius: 51,
    marginTop: 12,
    backgroundColor: color.grayBody,
    marginBottom: 40,
  },
  buttonTextBold: {
    fontSize: 24,

    textAlign: 'center',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  buttonBid: {
    borderRadius: 51,
    marginTop: 12,
    backgroundColor: color.grayBody,
    paddingVertical: 13,
    marginBottom: 40,
  },
  buttonBidActiveIcon: {
    width: '8%',
    marginRight: 4,
  },
  buttonBidTextLight: {
    fontSize: 16,

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Regular',
  },
  buttonBidTextBold: {
    fontSize: 20,

    textAlign: 'center',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
  liveAuctionView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 86,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  liveAuctionTextView: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  liveAuctionText: {
    fontSize: 24,

    color: color.grayBG,
    fontFamily: 'Epilogue-Bold',
    marginLeft: 7,
  },
});
