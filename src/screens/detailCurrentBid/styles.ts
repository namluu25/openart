import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  currentBid: {
    marginTop: 53,
    marginHorizontal: 16,
    marginBottom: 67,
  },
  infoView: {
    marginHorizontal: 18,
    marginTop: 16,
  },
  buttonBorder: {
    borderRadius: 40,
    backgroundColor: color.grayBody,
    alignSelf: 'center',
    marginLeft: 12,
  },
  buttonImage: {
    margin: 11,
  },
  userButton: {
    backgroundColor: color.grayBody,
    borderRadius: 52,
    alignSelf: 'baseline',
    flexDirection: 'row',
  },
  userAvatar: {
    marginRight: 8,
    marginVertical: 4,
    marginLeft: 5,
  },
  userName: {
    fontFamily: 'Epilogue',
    fontSize: 16,
    fontWeight: '700',
    color: color.grayBG,
    alignSelf: 'center',
    paddingRight: 16,
    paddingVertical: 8,
  },
  infoDescription: {
    marginVertical: 11,
    fontFamily: 'Epilogue',
    fontSize: 13,
    fontWeight: '500',
    color: color.grayBG,
    lineHeight: 20,
  },
  hashtagButton: {
    borderRadius: 27,
    borderColor: color.grayPlaceholder,
    borderWidth: 1,
    alignSelf: 'center',
    marginRight: 2,
  },
  hashtagButtonText: {
    fontFamily: 'Epilogue',
    fontSize: 13,
    fontWeight: '500',
    color: color.grayBG,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  shareButton: {
    borderRadius: 16,
    marginTop: 16,
    backgroundColor: color.grayBody,
    paddingVertical: 15,
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shareButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '700',
    lineHeight: 24,
  },
  placeBidView: {
    flexDirection: 'column',
    borderRadius: 24,
    backgroundColor: color.grayBody,
    marginTop: 36,
    paddingHorizontal: 20,
  },
  placeBidTitle: {
    fontFamily: 'Epilogue',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    color: color.grayOffWhite,
    marginTop: 19,
  },
  placeBidPriceView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
    marginBottom: 16,
  },
  placeBidPriceBold: {
    fontFamily: 'Epilogue',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: color.grayOffWhite,
    marginRight: 14,
  },
  placeBidPriceLight: {
    fontFamily: 'Epilogue',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: color.grayBG,
  },
  placeBidSecondTitle: {
    fontFamily: 'Epilogue',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    color: color.grayBG,
    marginTop: 19,
    marginBottom: 3,
  },
  placeBidSecondItem: {
    marginRight: 40,
  },
  secondItemNumber: {
    fontFamily: 'Epilogue',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: color.grayOffWhite,
  },
  secondItemText: {
    fontFamily: 'Epilogue',
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 20,
    color: color.grayBG,
  },
  placeBidButton: {
    borderRadius: 8,
    marginTop: 34,
    marginBottom: 38,
  },
  placeBidButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  activityTitle: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    color: color.grayBG,
    fontWeight: '400',
    lineHeight: 28,
    paddingTop: 26,
  },
  activityButton: {
    borderRadius: 24,
    marginTop: 12,
    backgroundColor: color.grayBody,
    paddingVertical: 15,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activityButtonAvatar: {
    marginRight: 13,
    borderRadius: 24,
  },
  activityButtonTitle: {
    fontSize: 14,
    fontFamily: 'Epilogue',
    color: color.grayOffWhite,
    fontWeight: '700',
    lineHeight: 20,
  },
  activityButtonDate: {
    fontSize: 13,
    fontFamily: 'Epilogue',
    color: color.grayLine,
    fontWeight: '500',
    lineHeight: 20,
  },
  buttonPriceSold: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayLine,
    fontWeight: '700',
    lineHeight: 24,
  },
  buttonPriceBold: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: color.grayLine,
    fontWeight: '700',
    lineHeight: 24,
    paddingRight: 3,
  },
  buttonPriceLight: {
    fontSize: 13,
    fontFamily: 'Epilogue',
    color: color.grayInputBG,
    fontWeight: '500',
    lineHeight: 20,
    alignSelf: 'center',
  },
});