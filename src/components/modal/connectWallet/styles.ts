import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: color.grayBody,
    borderRadius: 24,
    paddingHorizontal: 17,
    width: '100%',
    paddingTop: 15,
    paddingBottom: 19,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  textFirstRow: {
    fontFamily: 'Epilogue',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: color.grayBG,
  },
  textSecondRow: {
    fontFamily: 'Epilogue',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: color.grayBG,
    marginBottom: 20,
  },
  textSecondRowBold: {
    fontWeight: '700',
  },
  connectButton: {
    marginBottom: 18,
    marginHorizontal: 45,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    paddingVertical: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  lastRowText: {
    fontFamily: 'Epilogue',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: color.grayBG,
    textAlign: 'center',
  },
});
