import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { globalStyle } from 'theme/globalStyle';
import styles from './hotCollection-styles';

export const HotCollection = () => {
  return (
    <>
      <View
        // title view
        style={styles.titleView}>
        <Image source={require('@images/icon/sparkle-icon.png')} />
        <Text style={styles.titleText}> Hot Collection</Text>
      </View>

      <View style={[globalStyle.flexRow, styles.imageView]}>
        <View
          //image row 1
          style={[globalStyle.flexColumn, globalStyle.justifyBetween]}>
          <Image
            style={styles.image}
            source={require('@images/hotcollection/hot-collection-1.png')}
          />
          <Image
            style={styles.image}
            source={require('@images/hotcollection/hot-collection-3.png')}
          />
        </View>

        <View
          //image row 2
          style={[
            globalStyle.flexColumn,
            globalStyle.justifyBetween,
            globalStyle.flex,
            globalStyle.itemEnd,
          ]}>
          <Image
            style={styles.image}
            source={require('@images/hotcollection/hot-collection-2.png')}
          />
          <Image
            style={styles.image}
            source={require('@images/hotcollection/hot-collection-4.png')}
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
                source={require('@images/avatar/ava2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles.activeIcon}
              source={require('@images/icon/active-icon.png')}
            />
          </View>
          <Text style={styles.nftText}>By Rodion Kutsaev</Text>
        </View>

        <TouchableOpacity
          // button 30 items
          style={styles.followButton}>
          <Image source={require('@images/icon/heart-icon.png')} />
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
