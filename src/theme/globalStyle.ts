import { StyleSheet, Platform, Dimensions } from 'react-native';
import { color } from './color';

export const dimensions = Dimensions.get('window');

export const globalStyle = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 17 : 0,
    backgroundColor: color.grayTitle,
  },
  containerPriceButton: {
    borderRadius: 8,
    borderColor: color.grayPlaceholder,
    borderWidth: 1,
    alignSelf: 'center',
  },
  containerPriceButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    paddingVertical: 9,
    paddingHorizontal: 30,
    color: color.grayBG,
    fontWeight: '400',
    lineHeight: 22,
  },
  containerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: color.grayOffWhite,
    fontFamily: 'Epilogue',
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
  itemStart: {
    alignItems: 'flex-start',
  },
  itemBaseline: {
    alignItems: 'baseline',
  },
  itemEnd: {
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
  justifyAround: {
    justifyContent: 'space-around',
  },
  flex: {
    flex: 1,
  },
});
