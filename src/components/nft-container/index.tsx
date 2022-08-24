import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

interface Items {
  id: number;
  name: string;
  avatar: string;
  creator_name: string;
  image: string;
}

export default function FrontProduct() {
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: ' ',
      avatar: ' ',
      creator_name: ' ',
      image: ' ',
    },
  ]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/homepage')
      .then(res => {
        setApiData(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  const navigation = useNavigation();
  return (
    <>
      <View style={[globalStyle.container]}>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DetailsAuction' as never, {} as never);
            }}>
            <Image
              style={globalStyle.containerImage}
              source={{ uri: apiData[0]?.image }}
            />
          </TouchableOpacity>
          <Text style={globalStyle.containerTitle}>{apiData[0].name}</Text>
          <View style={globalStyle.containerCreatorInfoView}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never, {} as never);
                }}>
                <Image
                  style={globalStyle.containerAvatar}
                  source={{ uri: `${apiData[0]?.avatar}` }}
                />
              </TouchableOpacity>
              <Image
                style={styles.activeIcon}
                source={require('../../assets/images/icon/active-icon.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserProfile' as never, {} as never);
              }}
              style={globalStyle.containerCreatorNameView}>
              <Text style={globalStyle.containerCreatorName}>
                {apiData[0]?.creator_name}
              </Text>
              <Text style={globalStyle.containerCreatorInfo}>Creator</Text>
            </TouchableOpacity>
            <Image
              source={require('openart/src/assets/images/icon/heart-icon.png')}
            />
          </View>
        </View>
      </View>
    </>
  );
}
