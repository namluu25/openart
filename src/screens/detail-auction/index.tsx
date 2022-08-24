import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Place_bid from '../../components/modal-place-bid';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

export default function DetailsAuction() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={globalStyle.AndroidSafeArea}>
      <SafeAreaView style={globalStyle.flex}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
          <View style={styles.auction}>
            <Image
              style={globalStyle.selfCenter}
              source={require('openart/src/assets/images/nft/7.png')}
            />
            <View style={styles.infoView}>
              <View
                style={[
                  globalStyle.flexRow,
                  globalStyle.justifyBetween,
                  globalStyle.itemCenter,
                ]}>
                <Text style={globalStyle.containerTitle}>Silent Color</Text>
                <View style={globalStyle.flexRow}>
                  {/* button */}
                  <TouchableOpacity style={styles.buttonBorder}>
                    <Image
                      style={styles.buttonImage}
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonBorder}>
                    <Image
                      style={styles.buttonImage}
                      source={require('openart/src/assets/images/icon/export-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.userButton}>
                <Image
                  style={styles.userAvatar}
                  source={require('openart/src/assets/images/avatar/ava3.png')}
                />
                <Text style={styles.userName}>@openart</Text>
              </TouchableOpacity>

              <Text style={styles.infoDescription}>
                Together with my design team, we designed this futuristic
                Cyberyacht concept artwork. We wanted to create something that
                has not been created yet, so we started to collect ideas of how
                we imagine the Cyberyacht could look like in the future.
              </Text>

              <View style={globalStyle.flexRow}>
                <TouchableOpacity style={styles.hashtagButton}>
                  <Text style={styles.hashtagButtonText}>#color</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hashtagButton}>
                  <Text style={styles.hashtagButtonText}>#circle</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hashtagButton}>
                  <Text style={styles.hashtagButtonText}>#black</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hashtagButton}>
                  <Text style={styles.hashtagButtonText}>#art</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.shareButton}>
              <Image
                source={require('openart/src/assets/images/icon/etherscan-logo.png')}
              />
              <Text style={styles.shareButtonText}>View on Etherscan</Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>
              <Image
                source={require('openart/src/assets/images/icon/star-icon.png')}
              />
              <Text style={styles.shareButtonText}>View on IPFS</Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.shareButton}>
              <Image
                source={require('openart/src/assets/images/icon/chartPie-icon.png')}
              />
              <Text style={styles.shareButtonText}>View IPFS Metadata</Text>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <View style={styles.placeBidView}>
              <Text style={styles.placeBidTitle}>Reserve Price</Text>
              <View style={styles.placeBidPriceView}>
                <Text style={styles.placeBidPriceLarge}>1.50 ETH</Text>
                <Text style={styles.placeBidPriceSmall}>$2,683.73</Text>
              </View>
              <Text style={styles.placeBidParagraph}>
                Once a bid has been placed and the reserve price has been met, a
                24 hour auction for this artwork will begin.
              </Text>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={styles.placeBidButton}>
                  <Text style={styles.placeBidButtonText}>Place a bid</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <Text style={styles.activityTitle}>Activity</Text>

            <TouchableOpacity style={styles.activityButton}>
              <View style={globalStyle.flexRow}>
                <Image
                  style={styles.activityButtonAvatar}
                  source={require('openart/src/assets/images/avatar/ava2.png')}
                />
                <View>
                  <Text style={styles.activityButtonTitle}>
                    Bid place by @pawel09
                  </Text>
                  <Text style={styles.activityButtonDate}>
                    June 06, 2021 at 12:00am
                  </Text>
                  <View style={globalStyle.flexRow}>
                    <Text style={styles.buttonPriceBold}>1.50 ETH</Text>
                    <Text style={styles.buttonPriceLight}>$2,683.73</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.activityButton}>
              <View style={globalStyle.flexRow}>
                <Image
                  style={styles.activityButtonAvatar}
                  source={require('openart/src/assets/images/avatar/ava2.png')}
                />
                <View>
                  <Text style={styles.activityButtonTitle}>
                    Listing by @han152
                  </Text>
                  <Text style={styles.activityButtonDate}>
                    June 04, 2021 at 12:00am
                  </Text>
                  <View style={globalStyle.flexRow}>
                    <Text style={styles.buttonPriceBold}>1.00 ETH</Text>
                    <Text style={styles.buttonPriceLight}>$2,683.73</Text>
                  </View>
                </View>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/external-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <Place_bid visbile={visible} handleClose={() => setVisible(false)} />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
