import { useNavigation } from '@react-navigation/native';
import React, { useContext, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
} from 'react-native';
import globalStyle from 'theme/globalStyle';
import { styles } from './hotBid-styles';
import ArrowBack from '@images/icon/ArrowBack.svg';
import ArrowForward from '@images/icon/ArrowForward.svg';
import { ThemeContext } from '../../../hooks/context';

export const HotBid = () => {
  const { theme } = useContext(ThemeContext);
  const naviRef = useRef<ScrollView>(null);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles(theme).hotBid}>
      <View style={styles(theme).titleView}>
        <View
          style={[globalStyle(theme).flexRow, globalStyle(theme).itemBaseline]}>
          <Image source={require('@images/icon/fire.png')} />
          <Text style={styles(theme).titleText}> Hot bid</Text>
        </View>

        <View style={globalStyle(theme).flexRow}>
          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: 0, animated: true });
            }}
            style={styles(theme).leftArrow}>
            <ArrowBack style={styles(theme).icon as StyleProp<ViewStyle>} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: screenWidth, animated: true });
            }}>
            <ArrowForward style={styles(theme).icon as StyleProp<ViewStyle>} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={naviRef}>
        <View style={styles(theme).itemView}>
          {/* 1 item view */}
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Image
                // image
                style={styles(theme).imageWidth}
                source={require('@images/hotbid/hotbid-1.png')}
              />
            </TouchableOpacity>
            <View style={styles(theme).followerAvatarView}>
              <Image
                style={styles(theme).firstFollower}
                source={require('@images/avatar/ava2.png')}
              />
              <Image
                style={styles(theme).secondFollower}
                source={require('@images/avatar/ava10.png')}
              />
              <Image
                style={styles(theme).thirdFollower}
                source={require('@images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles(theme).itemInfo}>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).itemBaseline,
              ]}>
              {/* tittle + 2nd row */}
              <Text style={styles(theme).itemInfoTitle}>
                {/* title */}
                Inside Kings Cross
              </Text>

              <TouchableOpacity style={styles(theme).itemPriceButton}>
                {/* 2.3eth */}
                <Text style={styles(theme).itemPriceButtonText}>2.3 ETH</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles(theme).itemHighBid}>
              Highest bid
              <Text style={styles(theme).itemHighBidPrice}> 1.00ETH</Text>
            </Text>
          </View>
        </View>

        <View style={styles(theme).itemView}>
          {/* 1 item view */}
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Image
                // image
                style={styles(theme).imageWidth}
                source={require('@images/hotbid/hotbid-1.png')}
              />
            </TouchableOpacity>
            <View style={styles(theme).followerAvatarView}>
              <Image
                style={styles(theme).firstFollower}
                source={require('@images/avatar/ava2.png')}
              />
              <Image
                style={styles(theme).secondFollower}
                source={require('@images/avatar/ava10.png')}
              />
              <Image
                style={styles(theme).thirdFollower}
                source={require('@images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles(theme).itemInfo}>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).itemBaseline,
              ]}>
              {/* tittle + 2nd row */}
              <Text style={styles(theme).itemInfoTitle}>
                {/* title */}
                Inside Kings Cross
              </Text>

              <TouchableOpacity style={styles(theme).itemPriceButton}>
                {/* 2.3eth */}
                <Text style={styles(theme).itemPriceButtonText}>2.3 ETH</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles(theme).itemHighBid}>
              Highest bid
              <Text style={styles(theme).itemHighBidPrice}> 1.00ETH</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
