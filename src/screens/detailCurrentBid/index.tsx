import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { PlaceBid } from 'components/modal';
import { Header, Footer, HeartButton, ShareButton } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { useNavigation } from '@react-navigation/native';

export const DetailsCurrentBid = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles.currentBid}>
          <Image
            style={globalStyle.selfCenter}
            source={require('@images/nft/7.png')}
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
                <HeartButton style={styles.buttonBorder} size={24} />
                <ShareButton style={styles.buttonBorder} />
              </View>
            </View>

            <TouchableOpacity
              style={styles.userButton}
              onPress={() => {
                navigation.navigate('ProfileMock' as never, {} as never);
              }}>
              <Image
                style={styles.userAvatar}
                source={require('@images/avatar/ava3.png')}
              />
              <Text style={styles.userName}>@openart</Text>
            </TouchableOpacity>

            <Text style={styles.infoDescription}>
              Together with my design team, we designed this futuristic
              Cyberyacht concept artwork. We wanted to create something that has
              not been created yet, so we started to collect ideas of how we
              imagine the Cyberyacht could look like in the future.
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

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => Linking.openURL('https://etherscan.io/')}>
            <Image source={require('@images/icon/etherscan-logo.png')} />
            <Text style={styles.shareButtonText}>View on Etherscan</Text>
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => Linking.openURL('https://ipfs.tech/')}>
            <Image source={require('@images/icon/star-icon.png')} />
            <Text style={styles.shareButtonText}>View on IPFS</Text>
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => Linking.openURL('https://ipfs.tech/')}>
            <Image source={require('@images/icon/chartPie-icon.png')} />
            <Text style={styles.shareButtonText}>View IPFS Metadata</Text>
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.placeBidView}>
            <Text style={styles.placeBidTitle}>Current Bid</Text>
            <View style={[globalStyle.flexRow, globalStyle.itemBaseline]}>
              <Text style={styles.placeBidPriceBold}>0.50 ETH</Text>
              <Text style={styles.placeBidPriceLight}>$2,683.73</Text>
            </View>

            <Text style={styles.placeBidSecondTitle}>Auction ending in</Text>
            <View style={globalStyle.flexRow}>
              <View style={styles.placeBidSecondItem}>
                <Text style={styles.secondItemNumber}>12</Text>
                <Text style={styles.secondItemText}>hours</Text>
              </View>
              <View style={styles.placeBidSecondItem}>
                <Text style={styles.secondItemNumber}>30</Text>
                <Text style={styles.secondItemText}>minutes</Text>
              </View>
              <View>
                <Text style={styles.secondItemNumber}>25</Text>
                <Text style={styles.secondItemText}>seconds</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles.placeBidButton}>
                <Text style={styles.placeBidButtonText}>Place a bid</Text>
              </LinearGradient>
            </TouchableOpacity>
            <PlaceBid visbile={visible} handleClose={() => setVisible(false)} />
          </TouchableOpacity>

          <Text style={styles.activityTitle}>Activity</Text>

          <TouchableOpacity style={styles.activityButton}>
            <View style={globalStyle.flexRow}>
              <Image
                style={styles.activityButtonAvatar}
                source={require('@images/avatar/ava4.png')}
              />
              <View>
                <Text style={styles.activityButtonTitle}>
                  Auction won by David
                </Text>
                <Text style={styles.activityButtonDate}>
                  June 04, 2021 at 12:00am
                </Text>
                <Text style={styles.buttonPriceSold}>Sold for 1.50 ETH</Text>
              </View>
            </View>
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityButton}>
            <View style={globalStyle.flexRow}>
              <Image
                style={styles.activityButtonAvatar}
                source={require('@images/avatar/ava2.png')}
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
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityButton}>
            <View style={globalStyle.flexRow}>
              <Image
                style={styles.activityButtonAvatar}
                source={require('@images/avatar/ava2.png')}
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
            <Image source={require('@images/icon/external-icon.png')} />
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
