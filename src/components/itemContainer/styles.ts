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
    marginTop: 18,
    width: containterImageWidth,
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
});
