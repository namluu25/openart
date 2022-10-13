import { StyleSheet } from 'react-native';
import { color } from 'theme/color';
import { dimensions } from 'theme/globalStyle';

const boxWidth = Math.round(dimensions.width * 0.44);

export default (theme?: string) => {
  return StyleSheet.create({
    titleText: {
      fontSize: 20,
      color: theme === 'light' ? color.grayTitle : color.grayBG,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 28,
      alignSelf: 'center',
      marginBottom: 11,
    },
    firstParagraph: {
      fontSize: 16,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
      textAlign: 'center',
      marginTop: 16,
      marginHorizontal: 43,
      marginBottom: 74,
    },
    secondParagraph: {
      fontSize: 16,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
      marginHorizontal: 31,
      marginBottom: 28,
    },
    secondView: {
      marginBottom: 53,
      marginHorizontal: 16,
    },
    secondTitle: {
      fontSize: 20,
      color: theme === 'light' ? color.grayTitle : color.grayBG,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 28,
      marginBottom: 40,
    },
    boxView: {
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayInputBG,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 24,
      height: 188,
      width: boxWidth,
    },
    boxImage: {
      marginBottom: 18,
    },
    boxImage1: {
      marginBottom: 18,
      marginTop: 15,
    },
    boxText: {
      fontSize: 16,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
    },
    thirdView: { marginHorizontal: 31 },
    thirdTitleText: {
      fontSize: 16,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      fontFamily: 'Epilogue-Bold',
      lineHeight: 24,
    },
    thirdParagraph: {
      fontSize: 16,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      fontFamily: 'Epilogue-Regular',
      lineHeight: 22,
      marginBottom: 38,
    },
  });
};
