import React, { useState } from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartBlank } from '@fortawesome/free-regular-svg-icons';

interface Props {
  image: string;
  name: string;
  avatar: string;
  creator_name: string;
  navi: string;
}

export const ItemContainer = (props: Props) => {
  const navigation = useNavigation();
  const [heartClick, setHeartClick] = useState(false);
  const clickHeart = () => {
    setHeartClick(!heartClick);
  };
  return (
    <View style={[styles.container]}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(props.navi as never, {} as never);
          }}>
          <Image style={styles.containerImage} source={{ uri: props.image }} />
        </TouchableOpacity>
        <Text style={styles.containerTitle}>{props.name}</Text>
        <View style={styles.containerCreatorInfoView}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ProfileMock' as never, {} as never);
              }}>
              <Image
                style={styles.containerAvatar}
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
              navigation.navigate('ProfileMock' as never, {} as never);
            }}
            style={styles.containerCreatorNameView}>
            <Text style={styles.containerCreatorName}>
              {props.creator_name}
            </Text>
            <Text style={styles.containerCreatorInfo}>Creator</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickHeart}>
            <FontAwesomeIcon
              icon={heartClick ? HeartSolid : HeartBlank}
              size={23}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
