import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header } from 'components';
import { Footer } from 'components';
import axios from 'axios';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Items {
  id: number;
  name: string;
  avatar: string;
  coverImage: string;
  description: string;
  followers: string;
}

export const DiscoverCreator = () => {
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: ' ',
      avatar: ' ',
      coverImage: ' ',
      description: ' ',
      followers: ' ',
    },
  ]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/creator')
      .then(res => {
        setApiData(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles.discover}>
          <Text style={styles.title}>Discover creator</Text>
          <Text style={styles.description}>
            Follow at least five creators to build your feed…
          </Text>
          <View style={styles.buttonView}>
            <TouchableOpacity>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles.gradientButton}>
                <Text style={styles.buttonText}>Feature Creatior</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.normalButton}>
              <Text style={styles.buttonText}>All Creator</Text>
            </TouchableOpacity>
          </View>
          <>
            {apiData.map((item: Items) => {
              return (
                <View key={item.id}>
                  <View style={styles.itemMargin}>
                    <View style={styles.item}>
                      <Image
                        style={styles.itemCover}
                        source={{ uri: item.coverImage }}
                      />
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemDescription}>
                        {item.description}
                      </Text>
                      <View style={styles.secondRowView}>
                        <Text style={styles.secondRowFollower}>
                          {item.followers}{' '}
                          <Text style={styles.secondRowText}>Followers</Text>
                        </Text>
                        <TouchableOpacity style={styles.secondRowButton}>
                          <Text style={styles.secondRowButtonText}>Follow</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Image
                      style={styles.itemAvatar}
                      source={{ uri: item.avatar }}
                    />
                  </View>
                </View>
              );
            })}
          </>
          <TouchableOpacity style={styles.loadMoreButton}>
            <Image source={require('@images/icon/plus-icon.png')} />
            <Text style={styles.loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
