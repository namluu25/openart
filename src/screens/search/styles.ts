import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  searchPopup: { marginHorizontal: 24, marginTop: 14 },
  inputBox: {
    paddingVertical: 8,
    paddingLeft: 36,
    width: 250,
    borderRadius: 8,
    backgroundColor: color.grayBody,
    color: color.grayBG,
    height: 40,
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
    paddingHorizontal: 8,
    paddingVertical: 12,
    right: 0,
  },
  icon: {
    color: color.grayBG,
  },
  cancelText: {
    fontFamily: 'Epilogue-Bold',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayOffWhite,
  },
  secondRowView: {
    marginTop: 20,
  },
  itemTitle: {
    fontFamily: 'Epilogue-Regular',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayBG,
    marginBottom: 12,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 21,
    marginLeft: 13,
  },
  itemTextLarge: {
    fontFamily: 'Epilogue-Bold',
    fontSize: 20,
    lineHeight: 28,
    color: color.grayOffWhite,
  },
  itemTextSmall: {
    fontFamily: 'Epilogue-Regular',
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
