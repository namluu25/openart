import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartBlank } from '@fortawesome/free-regular-svg-icons';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import styles from '../shareButton/styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  size: number;
}
export const HeartButton = (props: Props) => {
  const [heartClick, setHeartClick] = useState(false);
  const clickHeart = () => {
    setHeartClick(!heartClick);
  };
  return (
    <TouchableOpacity onPress={clickHeart} style={props.style}>
      <FontAwesomeIcon
        icon={heartClick ? HeartSolid : HeartBlank}
        size={props.size}
        color={'white'}
        style={styles.buttonImage}
      />
    </TouchableOpacity>
  );
};
