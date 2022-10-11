import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface ButtonName {
  name: string;
}

interface Props {
  value: Array<ButtonName>;
}
export const GradientButton = (props: Props) => {
  const { value } = props;
  const [selectedValue, setSelectedValue] = useState('All items');
  return (
    <View style={styles().secondItemView}>
      {value?.map(item => (
        <TouchableOpacity
          key={item.name}
          style={styles().secondItemButton}
          onPress={() => setSelectedValue(item.name)}>
          {selectedValue === item.name ? (
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={styles().secondGradientItemButton}>
              <Text style={styles().secondItemButtonText}>{item.name}</Text>
            </LinearGradient>
          ) : (
            <Text style={styles().secondItemButtonText}>{item.name}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
