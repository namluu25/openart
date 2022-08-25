import React, { useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import globalStyle from '../../theme/globalStyle';
import styles from './hotBid-styles';

export const HotBid = () => {
  const naviRef = useRef<ScrollView>(null);
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.hotBid}>
      <View style={styles.titleView}>
        <View style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
          <Image
            source={require('openart/src/assets/images/icon/fire-icon.png')}
          />
          <Text style={styles.titleText}> Hot bid</Text>
        </View>

        <View style={globalStyle.flexRow}>
          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: 0, animated: true });
            }}>
            <Image
              source={require('openart/src/assets/images/icon/back-arrow.png')}
              style={styles.leftArrow}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              naviRef.current?.scrollTo({ x: screenWidth, animated: true });
            }}>
            <Image
              source={require('openart/src/assets/images/icon/forward-arrow.png')}
            />
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
            <Image
              // image
              source={require('../../assets/images/hotbid/hotbid-1.png')}
            />
            <View style={styles.followerAvatarView}>
              <Image
                style={styles.firstFollower}
                source={require('../../assets/images/avatar/ava2.png')}
              />
              <Image
                style={styles.secondFollower}
                source={require('../../assets/images/avatar/ava10.png')}
              />
              <Image
                style={styles.thirdFollower}
                source={require('../../assets/images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View
              //   tittle + 2nd row
              style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
              <Text
                // title
                style={styles.itemInfoTitle}>
                Inside Kings Cross
              </Text>

              <TouchableOpacity
                // 2.3eth
                style={styles.itemPriceButton}>
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
            <Image
              // image
              source={require('../../assets/images/hotbid/hotbid-1.png')}
            />
            <View style={styles.followerAvatarView}>
              <Image
                style={styles.firstFollower}
                source={require('../../assets/images/avatar/ava2.png')}
              />
              <Image
                style={styles.secondFollower}
                source={require('../../assets/images/avatar/ava10.png')}
              />
              <Image
                style={styles.thirdFollower}
                source={require('../../assets/images/avatar/ava11.png')}
              />
            </View>
          </View>
          <View style={styles.itemInfo}>
            <View
              //   tittle + 2nd row
              style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
              <Text
                // title
                style={styles.itemInfoTitle}>
                Inside Kings Cross
              </Text>

              <TouchableOpacity
                // 2.3eth
                style={styles.itemPriceButton}>
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
