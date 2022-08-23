/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Place_bid from './modal-place-bid';
import axios from 'axios';
import globalStyle from '../theme/globalStyle';

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
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={[globalStyle.container, { marginTop: 23.29 }]}>
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
          <Text style={[globalStyle.containerTitle, { marginTop: 12.41 }]}>
            {apiData[0].name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 2.68,
              marginBottom: 16.86,
              alignItems: 'center',
            }}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never, {} as never);
                }}>
                <Image
                  style={globalStyle.avatar}
                  source={{ uri: `${apiData[0]?.avatar}` }}
                />
              </TouchableOpacity>
              <Image
                style={{
                  position: 'absolute',
                  right: 0,
                  borderWidth: 2,
                  borderColor: '#333333',
                  borderRadius: 12,
                }}
                source={require('../assets/images/icon/active-icon.png')}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserProfile' as never, {} as never);
              }}
              style={{
                flex: 1,
                marginLeft: 12,
              }}>
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

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginTop: 12.85,
          marginBottom: 15.29,
        }}>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 22,
            color: '#FCFCFC',
            marginRight: 5.98,
          }}>
          Reserve Price
        </Text>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 32,
            fontWeight: '700',
            lineHeight: 36,
            color: '#FCFCFC',
            marginRight: 7.51,
          }}>
          1.50 ETH
        </Text>
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 16,
            fontWeight: '700',
            lineHeight: 24,
            color: '#888888',
          }}>
          $2,683.73
        </Text>
      </View>

      <View
        style={{
          marginVertical: 11,
        }}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={{
              borderRadius: 8,
              marginBottom: 12,
              backgroundColor: '#2A2A2E',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                padding: 15,
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              Place a bid
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderColor: '#0038F5',
            borderWidth: 1,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              padding: 15,
              color: '#FCFCFC',
              fontWeight: '700',
            }}>
            View Artwork
          </Text>
        </TouchableOpacity>
        <Place_bid visbile={visible} handleClose={() => setVisible(false)} />
      </View>
    </>
  );
}

// const styles = StyleSheet.create({});
