import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { dimensions } from 'theme/globalStyle';
import { ThemeContext } from '../../../../App';

const imageWidth = Math.round(dimensions.width * 0.44);

export default () => {
  const { theme } = useContext(ThemeContext);
  return StyleSheet.create({
    titleView: {
      marginTop: 34,
      flexDirection: 'row',
      marginBottom: 40,
    },
    titleText: {
      fontSize: 24,
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    avatar: {
      borderRadius: 24,
      paddingLeft: 12,
      width: 48,
      height: 48,
      borderWidth: 2,
      borderColor: '#C4C4C4',
    },
    nftText: {
      fontSize: 13,
      fontFamily: 'Epilogue-Bold',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,

      paddingLeft: 12,
    },
    titleImage: {
      fontSize: 20,
      fontFamily: 'Epilogue-Bold',
      color: theme === 'light' ? color.grayPlaceholder : color.grayOffWhite,
    },
    imageView: {
      height: 412,
      marginBottom: 18,
    },
    imageTouch: {
      width: imageWidth,
      height: '48%',
      borderRadius: 16,
    },
    image: {
      width: imageWidth,
      height: '100%',
      borderRadius: 16,
    },
    button: {
      borderRadius: 34,
      borderColor: theme === 'light' ? color.grayTitle : color.grayLine,
      borderWidth: 1,
      alignSelf: 'center',
    },
    buttonText: {
      fontSize: 16,

      textAlign: 'center',
      paddingHorizontal: 12,
      paddingVertical: 4,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      fontFamily: 'Epilogue-Bold',
    },
    authorView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 20,
    },
    activeIcon: {
      position: 'absolute',
      right: 0,
      borderWidth: 2,
      borderColor: '#C4C4C4',
      borderRadius: 12,
    },
    followButton: {
      borderRadius: 8,
      borderColor: theme === 'light' ? color.grayTitle : color.grayLine,
      borderWidth: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      paddingHorizontal: 33,
      paddingVertical: 8,
    },
    followButtonText: {
      fontSize: 16,

      textAlign: 'center',
      color: theme === 'light' ? color.grayLabel : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      alignSelf: 'center',
      marginLeft: 9,
    },
  });
};
