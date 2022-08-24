import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
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
      <View style={styles.titleView}>
        <View style={styles.titleTextView}>
          <Image
            source={require('openart/src/assets/images/icon/live-icon.png')}
          />
          <Text style={styles.titleText}>Live auctions</Text>
        </View>
        <TouchableOpacity style={styles.titleButton}>
          <Text style={styles.titleButtonText}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {apiData.slice(1).map((item: Items) => {
          return (
            <View key={item.id}>
              <View style={[globalStyle.container]}>
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
                  <Text style={globalStyle.containerTitle}>{item.name}</Text>
                  <View style={styles.creatorAvatarView}>
                    <View>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate(
                            'UserProfile' as never,
                            {} as never,
                          );
                        }}>
                        <Image
                          style={globalStyle.containerAvatar}
                          source={{ uri: `${item.avatar}` }}
                        />
                      </TouchableOpacity>
                      <Image
                        style={styles.activeIcon}
                        source={require('../../assets/images/icon/active-icon.png')}
                      />
                    </View>
                    <View style={styles.creatorInfoView}>
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
                <Text style={styles.buttonText}>
                  Sold For
                  <Text style={styles.buttonTextBold}> 2.00 ETH</Text>
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
