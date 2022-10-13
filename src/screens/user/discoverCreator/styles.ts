import { StyleSheet } from 'react-native';
import { color } from 'theme/color';

export default (theme?: string) => {
  return StyleSheet.create({
    discover: {
      marginHorizontal: 16,
      marginTop: 33,
      marginBottom: 108,
    },
    title: {
      fontSize: 20,

      textAlign: 'center',
      lineHeight: 28,
      fontFamily: 'Epilogue-Bold',
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
    description: {
      fontSize: 16,

      textAlign: 'center',
      lineHeight: 22,
      fontFamily: 'Epilogue-Regular',
      color: theme === 'light' ? color.grayBody : color.grayBG,
      marginHorizontal: 56,
      marginTop: 16,
    },
    buttonView: {
      marginTop: 39,
      marginBottom: 23,
    },
    itemMargin: {
      marginBottom: 40,
    },
    item: {
      borderRadius: 24,
      backgroundColor: theme === 'dark' ? color.grayBody : color.grayOffWhite,
    },
    itemCover: {
      marginBottom: 65,
      width: '100%',
      height: 135,
    },
    itemName: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 24,
      lineHeight: 32,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      textAlign: 'center',
    },
    itemDescription: {
      fontFamily: 'Epilogue-Regular',
      fontSize: 16,
      lineHeight: 22,
      color: theme === 'light' ? color.grayBody : color.grayBG,
      textAlign: 'center',
      marginHorizontal: 15,
      marginTop: 8,
      marginBottom: 16,
    },
    secondRowView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    secondRowFollower: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 32,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      marginLeft: 20,
    },
    secondRowText: {
      fontFamily: 'Epilogue-Medium',
      fontSize: 16,
      color: theme === 'light' ? color.grayLabel : color.grayBG,
    },
    secondRowButton: {
      backgroundColor: theme === 'light' ? color.grayInputBG : color.grayTitle,
      borderRadius: 8,
      marginRight: 17,
    },
    secondRowButtonText: {
      fontFamily: 'Epilogue-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: theme === 'light' ? color.grayBody : color.grayOffWhite,
      paddingHorizontal: 30,
      paddingTop: 9,
      paddingBottom: 7,
    },
    itemAvatar: {
      alignSelf: 'center',
      borderWidth: 4,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      position: 'absolute',
      marginTop: 93,
      width: 93,
      height: 93,
    },
    loadMoreButton: {
      borderRadius: 8,
      borderColor: '#0038F5',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 35,
    },
    loadMoreButtonText: {
      fontSize: 20,

      textAlign: 'center',
      paddingVertical: 15,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
      fontFamily: 'Epilogue-Bold',
    },
    plusIcon: {
      marginRight: 11,
      color: theme === 'light' ? color.grayTitle : color.grayOffWhite,
    },
  });
};
