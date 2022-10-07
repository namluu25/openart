import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  sold: {
    marginTop: 53,
    marginHorizontal: 16,
    marginBottom: 58,
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
    fontSize: 16,
    fontFamily: 'Epilogue-Bold',
    color: color.grayBG,
    alignSelf: 'center',
    paddingRight: 16,
    paddingVertical: 8,
  },
  infoDescription: {
    marginVertical: 11,

    fontSize: 13,
    fontFamily: 'Epilogue-Medium',
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
    fontSize: 13,
    fontFamily: 'Epilogue-Medium',
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

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
    alignItems: 'flex-start',
    flex: 1,
  },
  etherIcon: { marginRight: 30 },
  starIcon: { marginRight: 30, marginLeft: 2 },
  chartIcon: { marginRight: 30, marginLeft: 6 },
  soldView: {
    borderRadius: 24,
    backgroundColor: color.grayBody,
    marginTop: 36,
    paddingLeft: 17,
  },
  soldFirstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 51,
    marginBottom: 24,
    paddingTop: 25,
  },
  soldFirstRowTitle: {
    fontSize: 20,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 28,
  },
  soldFirstRowPrice: {
    fontSize: 16,

    color: color.grayBG,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
  },
  soldFirstRowImage: {
    position: 'absolute',
    right: 0,
    top: 0,
    marginRight: 12,
    marginTop: 11,
  },
  soldSecondRowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 35,
  },
  soldSecondRowTitle: {
    fontSize: 20,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 28,
    paddingRight: 7,
  },
  soldSecondRowButton: {
    backgroundColor: color.grayLabel,
    borderRadius: 52,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonAvatar: {
    marginRight: 8,
    marginVertical: 4,
    marginLeft: 5,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Epilogue-Bold',
    color: color.grayBG,
    alignSelf: 'center',
    paddingRight: 16,
    paddingVertical: 8,
  },
  activityTitle: {
    fontSize: 20,

    color: color.grayBG,
    fontFamily: 'Epilogue-Regular',
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

    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 20,
  },
  activityButtonDate: {
    fontSize: 13,

    color: color.grayLine,
    fontFamily: 'Epilogue-Medium',
    lineHeight: 20,
  },
  buttonPriceSold: {
    fontSize: 16,

    color: color.grayLine,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
  },
  buttonPriceBold: {
    fontSize: 16,

    color: color.grayLine,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
    paddingRight: 3,
  },
  buttonPriceLight: {
    fontSize: 13,

    color: color.grayInputBG,
    fontFamily: 'Epilogue-Medium',
    lineHeight: 20,
    alignSelf: 'center',
  },
});