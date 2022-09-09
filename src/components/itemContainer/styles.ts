import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { dimensions } from 'theme/globalStyle';

const containterImageWidth = Math.round(dimensions.width * 0.85);

export default StyleSheet.create({
  activeIcon: {
    position: 'absolute',
    right: 0,
    borderWidth: 2,
    borderColor: color.grayBody,
    borderRadius: 12,
  },
  containerImage: {
    borderRadius: 24,
    width: containterImageWidth,
    height: 400,
  },
  touchContainerImage: {
    marginTop: 18,
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
    fontFamily: 'Epilogue-Bold',
    color: color.grayOffWhite,
  },
  containerCreatorName: {
    fontSize: 18,
    fontFamily: 'Epilogue-Bold',
    color: color.grayOffWhite,
  },
  containerCreatorInfo: {
    fontSize: 14,
    fontFamily: 'Epilogue-Medium',
    color: color.grayOffWhite,
  },
  containerCreatorInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 3,
    marginBottom: 17,
    alignItems: 'center',
  },
  containerCreatorNameView: {
    marginLeft: 12,
  },
});
