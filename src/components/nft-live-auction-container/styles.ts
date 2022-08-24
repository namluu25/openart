import { StyleSheet } from 'react-native';
import { color } from '../../theme/color';

export default StyleSheet.create({
  titleView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 86,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },
  titleTextView: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  titleText: {
    fontSize: 24,
    fontFamily: 'Epilogue',
    color: color.grayBG,
    fontWeight: '700',
    marginLeft: 7,
  },
  titleButton: {
    borderRadius: 8,
    borderColor: color.grayPlaceholder,
    borderWidth: 1,
    alignSelf: 'center',
  },
  titleButtonText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    paddingVertical: 9,
    paddingHorizontal: 30,
    color: color.grayBG,
    fontWeight: '400',
    lineHeight: 22,
  },
  creatorAvatarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 17,
    alignItems: 'center',
  },
  activeIcon: {
    position: 'absolute',
    right: 0,
    borderWidth: 2,
    borderColor: color.grayBody,
    borderRadius: 12,
  },
  creatorInfoView: {
    flex: 1,
    marginLeft: 12,
  },
  button: {
    borderRadius: 51,
    marginTop: 12,
    backgroundColor: color.grayBody,
    paddingVertical: 18,
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: color.grayOffWhite,
    fontWeight: '400',
  },
  buttonTextBold: {
    fontSize: 24,
    fontFamily: 'Epilogue',
    textAlign: 'center',
    color: color.grayOffWhite,
    fontWeight: '700',
  },
});
