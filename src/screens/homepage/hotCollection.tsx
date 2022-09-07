import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyle } from 'theme/globalStyle';
import styles from './hotCollection-styles';

export const HotCollection = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.titleView}>
        {/* title view */}
        <Image source={require('@images/icon/sparkle-icon.png')} />
        <Text style={styles.titleText}> Hot Collection</Text>
      </View>

      <View style={[globalStyle.flexRow, styles.imageView]}>
        <View style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          {/* image row 1 */}
          <TouchableOpacity
            style={styles.image}
            onPress={() => {
              navigation.navigate('DiscoverCreator' as never);
            }}>
            <Image
              source={require('@images/hotcollection/hot-collection-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image}
            onPress={() => {
              navigation.navigate('DiscoverCreator' as never);
            }}>
            <Image
              source={require('@images/hotcollection/hot-collection-3.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            globalStyle.flexColumn,
            globalStyle.justifyBetween,
            globalStyle.flex,
            globalStyle.itemEnd,
          ]}>
          {/* image row 2 */}
          <TouchableOpacity
            style={styles.image}
            onPress={() => {
              navigation.navigate('DiscoverCreator' as never);
            }}>
            <Image
              source={require('@images/hotcollection/hot-collection-2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.image}
            onPress={() => {
              navigation.navigate('DiscoverCreator' as never);
            }}>
            <Image
              source={require('@images/hotcollection/hot-collection-4.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[globalStyle.flexRow, globalStyle.justifyBetween]}>
        {/* image title and button */}
        <Text style={styles.titleImage}>
          {/* title */}
          Water and sunflower
        </Text>

        <TouchableOpacity style={styles.button}>
          {/* button 30 items */}
          <Text style={styles.buttonText}>30 items</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.authorView}>
        {/* author and follow button */}
        <View
          style={[
            globalStyle.flexRow,
            globalStyle.justifyBetween,
            globalStyle.itemCenter,
          ]}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.avatar}
                source={require('@images/avatar/ava2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.activeIcon}
              source={require('@images/icon/active-icon.png')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileMock' as never);
            }}>
            <Text style={styles.nftText}>By Rodion Kutsaev</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.followButton}>
          {/* button 30 items */}
          <Image source={require('@images/icon/heart-icon.png')} />
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
