import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import globalStyle from 'theme/globalStyle';
import { styles } from './hotCollection-styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../../../hooks/context';

export const HotCollection = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <>
      <View style={styles(theme).titleView}>
        {/* title view */}
        <Image source={require('@images/icon/sparkle.png')} />
        <Text style={styles(theme).titleText}> Hot Collection</Text>
      </View>

      <View
        style={[
          globalStyle(theme).flexRow,
          styles(theme).imageView,
          globalStyle(theme).justifyBetween,
        ]}>
        <View
          style={[
            globalStyle(theme).flexColumn,
            globalStyle(theme).justifyBetween,
          ]}>
          {/* image col 1 */}
          <TouchableOpacity
            style={styles(theme).imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles(theme).image}
              source={require('@images/hotcollection/hot-collection-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(theme).imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles(theme).image}
              source={require('@images/hotcollection/hot-collection-3.png')}
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            globalStyle(theme).flexColumn,
            globalStyle(theme).justifyBetween,
          ]}>
          {/* image col 2 */}
          <TouchableOpacity
            style={styles(theme).imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles(theme).image}
              source={require('@images/hotcollection/hot-collection-2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles(theme).imageTouch}
            onPress={() => {
              navigation.navigate('DetailsSold' as never);
            }}>
            <Image
              style={styles(theme).image}
              source={require('@images/hotcollection/hot-collection-4.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[globalStyle(theme).flexRow, globalStyle(theme).justifyBetween]}>
        {/* image title and button */}
        <Text style={styles(theme).titleImage}>
          {/* title */}
          Water and sunflower
        </Text>

        <TouchableOpacity style={styles(theme).button}>
          {/* button 30 items */}
          <Text style={styles(theme).buttonText}>30 items</Text>
        </TouchableOpacity>
      </View>

      <View style={styles(theme).authorView}>
        {/* author and follow button */}
        <View
          style={[
            globalStyle(theme).flexRow,
            globalStyle(theme).justifyBetween,
            globalStyle(theme).itemCenter,
          ]}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles(theme).avatar}
                source={require('@images/avatar/ava2.png')}
              />
            </TouchableOpacity>
            <Image
              style={styles(theme).activeIcon}
              source={require('@images/icon/active.png')}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileMock' as never);
            }}>
            <Text style={styles(theme).nftText}>By Rodion Kutsaev</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles(theme).followButton}>
          {/* button 30 items */}
          <FontAwesomeIcon
            icon={faHeart}
            size={24}
            color={theme === 'light' ? 'black' : 'white'}
          />
          <Text style={styles(theme).followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
