import { StyleSheet } from 'react-native';
import { color } from '../../../theme/color';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 82,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: color.grayBody,
    borderRadius: 24,
    width: '100%',
    paddingBottom: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 13,
    borderBottomWidth: 15,
    borderLeftWidth: 13,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: color.grayBody,
    borderLeftColor: 'transparent',
    marginRight: 109,
  },
  firstRow: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    color: color.grayOffWhite,
    marginTop: 36,
    marginBottom: 27,
    marginHorizontal: 26,
  },
  secondRow: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  item: {
    marginLeft: 16,
  },
  itemText: {
    fontFamily: 'Epilogue',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: color.grayOffWhite,
  },
  itemPrice: {
    fontFamily: 'Epilogue',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    color: color.grayInputBG,
  },
  itemDate: {
    fontFamily: 'Epilogue',
    fontWeight: '500',
    fontSize: 13,
    lineHeight: 20,
    color: color.grayBG,
    marginTop: 3,
  },
  separatorLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 0.2,
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  lastRow: {
    marginHorizontal: 20,
  },
  gradientButton: {
    marginBottom: 12,
  },
  textButton: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontWeight: '700',
  },
  normalButton: {
    borderColor: '#0038F5',
    borderWidth: 1,
  },
});
