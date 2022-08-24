import { StyleSheet, Platform } from 'react-native';
import { color } from './color';

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    backgroundColor: color.grayTitle,
  },
  containerImage: {
    borderRadius: 24,
    marginTop: 18,
    width: 321,
    height: 400,
    marginBottom: 13,
  },
  container: {
    backgroundColor: color.grayBody,
    alignItems: 'center',
    borderRadius: 32,
  },
  containerAvatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  containerCreatorName: {
    fontSize: 18,
    fontWeight: '700',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  containerCreatorInfo: {
    fontSize: 14,
    fontWeight: '500',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  containerCreatorInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 17,
    alignItems: 'center',
  },
  containerCreatorNameView: {
    flex: 1,
    marginLeft: 12,
  },
  displayRegularLarge: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '400',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  displayRegularMedium: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '400',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  displayRegularSmall: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  displayBoldLarge: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  displayBoldMedium: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '400',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  displayBoldSmall: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  buttonRadius: {
    borderRadius: 8,
  },
  selfCenter: {
    alignSelf: 'center',
  },
  selfStart: {
    alignSelf: 'flex-start',
  },
  itemBaseline: {
    alignItems: 'baseline',
  },
  itemFlexEnd: {
    alignItems: 'flex-end',
  },
  itemCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  flex: {
    flex: 1,
  },
});
