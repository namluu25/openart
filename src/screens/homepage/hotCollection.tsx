import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyle } from 'theme/globalStyle';
import styles from './hotCollection-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const HotCollection = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.titleView}>
        {/* title view */}
        <Image source={require('@images/icon/sparkle.png')} />
        <Text style={styles.titleText}> Hot Collection</Text>
      </View>

      <View
        style={[
          globalStyle.flexRow,
          styles.imageView,
          globalStyle.justifyBetween,
        ]}>
        <View style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          {/* image col 1 */}
          <TouchableOpacity
            style={styles.imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles.image}
              source={require('@images/hotcollection/hot-collection-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles.image}
              source={require('@images/hotcollection/hot-collection-3.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          {/* image col 2 */}
          <TouchableOpacity
            style={styles.imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles.image}
              source={require('@images/hotcollection/hot-collection-2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles.image}
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
              source={require('@images/icon/active.png')}
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
          <FontAwesomeIcon icon={faHeart} size={24} color={'white'} />
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
