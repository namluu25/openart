import React, { useContext } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { HeartButton } from 'components';
import globalStyle from 'theme/globalStyle';
import { ThemeContext } from '../../hooks/context';

interface Props {
  image: string;
  name: string;
  avatar: string;
  creator_name: string;
  navi: string;
}

export const ItemContainer = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View style={[styles(theme).container]}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(props.navi as never);
          }}
          style={styles(theme).touchContainerImage}>
          <Image
            style={styles(theme).containerImage}
            source={{ uri: props.image }}
          />
        </TouchableOpacity>
        <Text style={styles(theme).containerTitle}>{props.name}</Text>
        <View style={styles(theme).containerCreatorInfoView}>
          <View style={globalStyle(theme).flexRow}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ProfileMock' as never);
                }}>
                <Image
                  style={styles(theme).containerAvatar}
                  source={{ uri: props.avatar }}
                />
              </TouchableOpacity>
              <Image
                style={styles(theme).activeIcon}
                source={require('@images/icon/active.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileMock' as never);
              }}
              style={styles(theme).containerCreatorNameView}>
              <Text style={styles(theme).containerCreatorName}>
                {props.creator_name}
              </Text>
              <Text style={styles(theme).containerCreatorInfo}>Creator</Text>
            </TouchableOpacity>
          </View>
          <HeartButton size={23} />
        </View>
      </View>
    </View>
  );
};
