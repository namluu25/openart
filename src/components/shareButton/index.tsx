import React, { useContext } from 'react';
import { Share, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import Export from '@images/icon/Export.svg';
import { ThemeContext } from '../../hooks/context';

interface Props {
  style?: StyleProp<ViewStyle>;
}
export const ShareButton = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const shareData = async () => {
    try {
      await Share.share({
        message: 'Share item:',
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity style={props.style} onPress={shareData}>
      <Export style={styles(theme).buttonImage} />
    </TouchableOpacity>
  );
};
