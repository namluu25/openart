//import liraries
import React from 'react';
import { Share, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

// create a component
export const ShareButton = () => {
  const shareData = async () => {
    try {
      await Share.share({
        message: 'Share item:',
      });
    } catch (error) {}
  };
  return (
    <TouchableOpacity style={styles.buttonBorder} onPress={shareData}>
      <Image
        style={styles.buttonImage}
        source={require('@images/icon/export-icon.png')}
      />
    </TouchableOpacity>
  );
};
