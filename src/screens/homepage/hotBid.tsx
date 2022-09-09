import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { globalStyle } from 'theme/globalStyle';
import styles from './hotBid-styles';
import ArrowBack from '@images/icon/ArrowBack.svg';
import ArrowForward from '@images/icon/ArrowForward.svg';

export const HotBid = () => {
  const naviRef = useRef<ScrollView>(null);
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.hotBid}>
      <View style={styles.titleView}>
        <View style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
          <Image source={require('@images/icon/fire.png')} />
          <Text style={styles.titleText}> Hot bid</Text>
        </View>

        <View style={globalStyle.flexRow}>
          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: 0, animated: true });
            }}
            style={styles.leftArrow}>
            <ArrowBack />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: screenWidth, animated: true });
            }}>
            <ArrowForward />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={naviRef}>
        <View style={styles.itemView}>
          {/* 1 item view */}
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Image
                // image
                source={require('@images/hotbid/hotbid-1.png')}
              />
            </TouchableOpacity>
            <View style={styles.followerAvatarView}>
              <Image
                style={styles.firstFollower}
                source={require('@images/avatar/ava2.png')}
              />
              <Image
                style={styles.secondFollower}
                source={require('@images/avatar/ava10.png')}
              />
              <Image
                style={styles.thirdFollower}
                source={require('@images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
              {/* tittle + 2nd row */}
              <Text style={styles.itemInfoTitle}>
                {/* title */}
                Inside Kings Cross
              </Text>

              <TouchableOpacity style={styles.itemPriceButton}>
                {/* 2.3eth */}
                <Text style={styles.itemPriceButtonText}>2.3 ETH</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.itemHighBid}>
              Highest bid
              <Text style={styles.itemHighBidPrice}> 1.00ETH</Text>
            </Text>
          </View>
        </View>

        <View style={styles.itemView}>
          {/* 1 item view */}
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Image
                // image
                source={require('@images/hotbid/hotbid-1.png')}
              />
            </TouchableOpacity>
            <View style={styles.followerAvatarView}>
              <Image
                style={styles.firstFollower}
                source={require('@images/avatar/ava2.png')}
              />
              <Image
                style={styles.secondFollower}
                source={require('@images/avatar/ava10.png')}
              />
              <Image
                style={styles.thirdFollower}
                source={require('@images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
              {/* tittle + 2nd row */}
              <Text style={styles.itemInfoTitle}>
                {/* title */}
                Inside Kings Cross
              </Text>

              <TouchableOpacity style={styles.itemPriceButton}>
                {/* 2.3eth */}
                <Text style={styles.itemPriceButtonText}>2.3 ETH</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.itemHighBid}>
              Highest bid
              <Text style={styles.itemHighBidPrice}> 1.00ETH</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
