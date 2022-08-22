/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import globalStyle from '../theme/globalStyle';

interface Items {
  id: number;
  name: string;
  avatar: string;
  creator_name: string;
  image: string;
}

export default function LiveContainer() {
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: ' ',
      avatar: ' ',
      creator_name: ' ',
      image: ' ',
    },
  ]);
  // const [detail, setDetail] = useState<boolean>(false);

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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 86.27,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'center',
            alignItems: 'baseline',
          }}>
          <Image
            style={{ marginRight: 7.31 }}
            source={require('openart/src/assets/images/icon/live-icon.png')}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Epilogue',
              color: '#F8F8F8',
              fontWeight: '700',
            }}>
            Live auctions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderColor: '#888888',
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              paddingVertical: 9,
              paddingHorizontal: 30,
              color: '#F8F8F8',
              fontWeight: '400',
              lineHeight: 22,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {apiData.slice(1).map((item: Items) => {
          return (
            <View key={item.id}>
              <View style={[globalStyle.container, { marginTop: 24 }]}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailSold' as never, {} as never);
                    }}>
                    <Image
                      source={{ uri: `${item.image}` }}
                      style={globalStyle.containerImage}
                    />
                  </TouchableOpacity>
                  <Text
                    style={[globalStyle.containerTitle, { marginTop: 12.41 }]}>
                    {item.name}
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
                          navigation.navigate(
                            'UserProfile' as never,
                            {} as never,
                          );
                        }}>
                        <Image
                          style={globalStyle.avatar}
                          source={{ uri: `${item.avatar}` }}
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
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 12,
                      }}>
                      <Text style={globalStyle.containerCreatorName}>
                        {item.creator_name}
                      </Text>
                      <Text style={globalStyle.containerCreatorInfo}>
                        Creator
                      </Text>
                    </View>
                    <Image
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.button}>
                {/* onPress={() => setDetail(!detail)} */}
                {/* {detail ? ( */}
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    color: '#FCFCFC',
                    fontWeight: '400',
                  }}>
                  Sold For
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      color: '#FCFCFC',
                      fontWeight: '700',
                    }}>
                    {' '}
                    2.00 ETH
                  </Text>
                </Text>
                {/* ) : ( */}
                {/* <Text>ABC</Text> */}
                {/* )} */}
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 51,
    marginTop: 12.14,
    backgroundColor: '#333333',
    paddingVertical: 18,
    marginBottom: 19,
  },
});
