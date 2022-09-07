//import liraries
import React from 'react';
import {
  Share,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}
// create a component
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
      <Image
        style={styles.buttonImage}
        source={require('@images/icon/export-icon.png')}
      />
    </TouchableOpacity>
  );
};
