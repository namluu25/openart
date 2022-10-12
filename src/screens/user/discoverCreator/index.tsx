import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Footer, GradientButton } from 'components';
import styles from './styles';
import Plus from '@images/icon/Plus.svg';
import { useFetchData, CreatorItems } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const DiscoverCreator = () => {
  const { theme } = useContext(ThemeContext);
  const { creatorData } = useFetchData();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles(theme).discover}>
          <Text style={styles(theme).title}>Discover creator</Text>
          <Text style={styles(theme).description}>
            Follow at least five creators to build your feed…
          </Text>
          <View style={styles(theme).buttonView}>
            <GradientButton
              value={[{ name: 'Feature Creatior' }, { name: 'All Creator' }]}
            />
          </View>
          {creatorData.map((item: CreatorItems) => {
            return (
              <View key={item.id}>
                <View style={styles(theme).itemMargin}>
                  <View style={styles(theme).item}>
                    <Image
                      style={styles(theme).itemCover}
                      source={{ uri: item.coverImage }}
                    />
                    <Text style={styles(theme).itemName}>{item.name}</Text>
                    <Text style={styles(theme).itemDescription}>
                      {item.description}
                    </Text>
                    <View style={styles(theme).secondRowView}>
                      <Text style={styles(theme).secondRowFollower}>
                        {item.followers}{' '}
                        <Text style={styles(theme).secondRowText}>
                          Followers
                        </Text>
                      </Text>
                      <TouchableOpacity style={styles(theme).secondRowButton}>
                        <Text style={styles(theme).secondRowButtonText}>
                          Follow
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Image
                    style={styles(theme).itemAvatar}
                    source={{ uri: item.avatar }}
                  />
                </View>
              </View>
            );
          })}
          <TouchableOpacity style={styles(theme).loadMoreButton}>
            <Plus style={styles(theme).plusIcon} />
            <Text style={styles(theme).loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
