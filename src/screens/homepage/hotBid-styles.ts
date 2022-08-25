import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  hotBid: {
    marginBottom: 58,
    marginTop: 40,
  },
  titleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Epilogue',
    fontWeight: '700',
    color: color.grayOffWhite,
  },
  leftArrow: {
    marginRight: 30,
  },
  itemView: { marginRight: 12 },
  followerAvatarView: {
    position: 'absolute',
    bottom: 0,
    marginLeft: 9,
    marginBottom: 11,
  },
  firstFollower: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFFFFF',
  },
  secondFollower: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 20,
  },
  thirdFollower: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    position: 'absolute',
    marginLeft: 40,
  },
  itemInfo: {
    flex: 1,
    marginTop: 6,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 9,
  },
  itemInfoTitle: {
    fontFamily: 'Epilogue',
    fontSize: 16,
    fontWeight: '700',
    color: color.grayOffWhite,
    marginRight: 8,
  },
  itemPriceButton: {
    borderRadius: 34,
    borderColor: color.grayLine,
    borderWidth: 1,
    alignItems: 'center',
  },
  itemPriceButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: color.grayBG,
    fontWeight: '700',
  },
  itemHighBid: {
    fontFamily: 'Epilogue',
    fontSize: 13,
    fontWeight: '500',
    color: color.grayOffWhite,
    marginTop: 4,
  },
  itemHighBidPrice: {
    fontFamily: 'Epilogue',
    fontSize: 14,
    fontWeight: '700',
    color: color.grayOffWhite,
  },
});
