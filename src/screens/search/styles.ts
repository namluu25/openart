import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  searchPopup: { marginHorizontal: 24, marginTop: 14 },
  inputBox: {
    paddingVertical: 14,
    paddingLeft: 36,
    width: 274,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    color: color.grayBG,
  },
  inputBoxView: {
    justifyContent: 'center',
  },
  seachIconButton: {
    position: 'absolute',
    marginLeft: 8,
    marginRight: 12,
    marginVertical: 12,
  },
  closeIconButton: {
    position: 'absolute',
    marginRight: 8,
    marginVertical: 12,
    right: 0,
  },
  icon: {
    color: color.grayBG,
  },
  cancelText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayOffWhite,
    marginLeft: 11,
  },
  secondRowView: {
    marginTop: 20,
  },
  itemTitle: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayBG,
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 21,
  },
  itemTextLarge: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayOffWhite,
  },
  itemTextSmall: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: color.grayBG,
  },
  secondRowItemTextView: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  thirdRowItemTextView: {
    flexDirection: 'column',
    marginLeft: 12,
  },
});
