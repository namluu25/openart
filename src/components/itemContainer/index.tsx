import React from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { globalStyle } from 'theme/globalStyle';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

interface Props {
  image: string;
  name: string;
  avatar: string;
  creator_name: string;
  navi: string;
}

export const ItemContainer = (props: Props) => {
  const navigation = useNavigation();

  return (
    <View style={[globalStyle.container]}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(props.navi as never, {} as never);
          }}>
          <Image
            style={globalStyle.containerImage}
            source={{ uri: props.image }}
          />
        </TouchableOpacity>
        <Text style={globalStyle.containerTitle}>{props.name}</Text>
        <View style={globalStyle.containerCreatorInfoView}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserProfile' as never, {} as never);
              }}>
              <Image
                style={globalStyle.containerAvatar}
                source={{ uri: props.avatar }}
              />
            </TouchableOpacity>
            <Image
              style={styles.activeIcon}
              source={require('@images/icon/active-icon.png')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserProfile' as never, {} as never);
            }}
            style={globalStyle.containerCreatorNameView}>
            <Text style={globalStyle.containerCreatorName}>
              {props.creator_name}
            </Text>
            <Text style={globalStyle.containerCreatorInfo}>Creator</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('@images/icon/heart-icon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
