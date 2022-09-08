import React from 'react';
import { Share, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import Export from '@images/icon/Export.svg';

interface Props {
  style?: StyleProp<ViewStyle>;
}
export const ShareButton = (props: Props) => {
  const shareData = async () => {
    try {
      await Share.share({
        message: 'Share item:',
      });
    } catch (error) {}
  };
  return (
    <TouchableOpacity style={props.style} onPress={shareData}>
      <Export style={styles.buttonImage} />
    </TouchableOpacity>
  );
};
