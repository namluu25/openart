import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Footer, GradientButton } from 'components';
import styles from './styles';
import Plus from '@images/icon/Plus.svg';
import { useFetchData, CreatorItems } from 'hooks/useFetchData';

export const DiscoverCreator = () => {
  const { creatorData } = useFetchData();
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
            <GradientButton
              value={[{ name: 'Feature Creatior' }, { name: 'All Creator' }]}
            />
          </View>
          {creatorData.map((item: CreatorItems) => {
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
          <TouchableOpacity style={styles.loadMoreButton}>
            <Plus style={styles.plusIcon} />
            <Text style={styles.loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
