import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: color.grayBody,
    borderRadius: 24,
    paddingHorizontal: 18,
    width: '100%',
    paddingTop: 18,
    paddingBottom: 32,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  textFirstRow: {
    fontSize: 24,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 32,
    color: color.grayOffWhite,
  },
  textSecondRow: {
    fontSize: 16,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
    color: color.grayBG,
    marginBottom: 42,
  },
  textThirdRow: {
    fontSize: 16,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 24,
    color: color.grayOffWhite,
    marginBottom: 8,
  },
  column: {
    marginBottom: 30,
  },
  textFirstColumn: {
    fontSize: 16,
    fontFamily: 'Epilogue-Regular',
    lineHeight: 22,
    color: color.grayOffWhite,
    marginBottom: 6,
  },
  textSecondColumn: {
    fontSize: 16,
    fontFamily: 'Epilogue-Bold',
    lineHeight: 22,
    color: color.grayOffWhite,
    marginBottom: 6,
  },
  gradientButton: {
    marginBottom: 16,
  },
  normalButton: {
    borderColor: color.grayOffWhite,
    borderWidth: 1,
  },
  textButton: {
    fontSize: 20,

    textAlign: 'center',
    padding: 15,
    color: color.grayOffWhite,
    fontFamily: 'Epilogue-Bold',
  },
});
