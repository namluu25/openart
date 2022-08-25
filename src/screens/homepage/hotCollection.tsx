import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import globalStyle from '../../theme/globalStyle';
import styles from './hotCollection-styles';

export const HotCollection = () => {
  return (
    <>
      <View
        // title view
        style={styles.titleView}>
        <Image
          source={require('openart/src/assets/images/icon/sparkle-icon.png')}
        />
        <Text style={styles.titleText}> Hot Collection</Text>
      </View>

      <View style={[globalStyle.flexRow, globalStyle.justifyBetween]}>
        <View
          //image row 1
          style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          <Image
            source={require('openart/src/assets/images/hotcollection/hot-collection-1.png')}
          />
          <Image
            source={require('openart/src/assets/images/hotcollection/hot-collection-2.png')}
          />
        </View>

        <View
          //image row 2
          // marginTop: 28,
          // marginBottom: 19,
          style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          <Image
            source={require('openart/src/assets/images/hotcollection/hot-collection-3.png')}
          />
          <Image
            source={require('openart/src/assets/images/hotcollection/hot-collection-4.png')}
          />
        </View>
      </View>

      <View
        //   image title and button
        style={[globalStyle.flexRow, globalStyle.justifyBetween]}>
        <Text
          // title
          style={styles.titleImage}>
          Water and sunflower
        </Text>

        <TouchableOpacity
          // button 30 items
          style={styles.button}>
          <Text style={styles.buttonText}>30 items</Text>
        </TouchableOpacity>
      </View>

      <View
        //   author and follow button
        style={styles.authorView}>
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
                source={require('openart/src/assets/images/avatar/ava2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.activeIcon}
              source={require('../../assets/images/icon/active-icon.png')}
            />
          </View>
          <Text style={styles.nftText}>By Rodion Kutsaev</Text>
        </View>

        <TouchableOpacity
          // button 30 items
          style={styles.followButton}>
          <Image
            source={require('openart/src/assets/images/icon/heart-icon.png')}
          />
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};