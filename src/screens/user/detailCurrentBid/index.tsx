import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  StyleProp,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { PlaceBid } from 'components/modal';
import { Header, Footer, HeartButton, ShareButton } from 'components';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { useNavigation } from '@react-navigation/native';
import ChartPie from '@images/icon/ChartPie.svg';
import External from '@images/icon/External.svg';
import Star from '@images/icon/Star.svg';
import { ThemeContext } from '../../../hooks/context';

export const DetailsCurrentBid = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles(theme).currentBid}>
          <Image
            style={globalStyle(theme).selfCenter}
            source={require('@images/nft/7.png')}
          />
          <View style={styles(theme).infoView}>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).justifyBetween,
                globalStyle(theme).itemCenter,
              ]}>
              <Text style={globalStyle(theme).containerTitle}>
                Silent Color
              </Text>
              <View style={globalStyle(theme).flexRow}>
                {/* button */}
                <HeartButton style={styles(theme).buttonBorder} size={24} />
                <ShareButton style={styles(theme).buttonBorder} />
              </View>
            </View>

            <TouchableOpacity
              style={styles(theme).userButton}
              onPress={() => {
                navigation.navigate('ProfileMock' as never);
              }}>
              <Image
                style={styles(theme).userAvatar}
                source={require('@images/avatar/ava3.png')}
              />
              <Text style={styles(theme).userName}>@openart</Text>
            </TouchableOpacity>

            <Text style={styles(theme).infoDescription}>
              Together with my design team, we designed this futuristic
              Cyberyacht concept artwork. We wanted to create something that has
              not been created yet, so we started to collect ideas of how we
              imagine the Cyberyacht could look like in the future.
            </Text>

            <View style={globalStyle(theme).flexRow}>
              <TouchableOpacity style={styles(theme).hashtagButton}>
                <Text style={styles(theme).hashtagButtonText}>#color</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles(theme).hashtagButton}>
                <Text style={styles(theme).hashtagButtonText}>#circle</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles(theme).hashtagButton}>
                <Text style={styles(theme).hashtagButtonText}>#black</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles(theme).hashtagButton}>
                <Text style={styles(theme).hashtagButtonText}>#art</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={styles(theme).shareButton}
            onPress={() => Linking.openURL('https://etherscan.io/')}>
            <Image
              style={styles(theme).etherIcon}
              source={require('@images/icon/etherscan-logo.png')}
            />
            <Text style={styles(theme).shareButtonText}>View on Etherscan</Text>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles(theme).shareButton}
            onPress={() => Linking.openURL('https://ipfs.tech/')}>
            <Star style={styles(theme).starIcon} />
            <Text style={styles(theme).shareButtonText}>View on IPFS</Text>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles(theme).shareButton}
            onPress={() => Linking.openURL('https://ipfs.tech/')}>
            <ChartPie style={styles(theme).chartIcon} />
            <Text style={styles(theme).shareButtonText}>
              View IPFS Metadata
            </Text>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).placeBidView}>
            <Text style={styles(theme).placeBidTitle}>Current Bid</Text>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).itemBaseline,
              ]}>
              <Text style={styles(theme).placeBidPriceBold}>0.50 ETH</Text>
              <Text style={styles(theme).placeBidPriceLight}>$2,683.73</Text>
            </View>

            <Text style={styles(theme).placeBidSecondTitle}>
              Auction ending in
            </Text>
            <View style={globalStyle(theme).flexRow}>
              <View style={styles(theme).placeBidSecondItem}>
                <Text style={styles(theme).secondItemNumber}>12</Text>
                <Text style={styles(theme).secondItemText}>hours</Text>
              </View>
              <View style={styles(theme).placeBidSecondItem}>
                <Text style={styles(theme).secondItemNumber}>30</Text>
                <Text style={styles(theme).secondItemText}>minutes</Text>
              </View>
              <View>
                <Text style={styles(theme).secondItemNumber}>25</Text>
                <Text style={styles(theme).secondItemText}>seconds</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles(theme).touchPlaceBidButton}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles(theme).placeBidButton}>
                <Text style={styles(theme).placeBidButtonText}>
                  Place a bid
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <PlaceBid visbile={visible} handleClose={() => setVisible(false)} />
          </TouchableOpacity>

          <Text style={styles(theme).activityTitle}>Activity</Text>

          <TouchableOpacity style={styles(theme).activityButton}>
            <View style={globalStyle(theme).flexRow}>
              <Image
                style={styles(theme).activityButtonAvatar}
                source={require('@images/avatar/ava4.png')}
              />
              <View>
                <Text style={styles(theme).activityButtonTitle}>
                  Auction won by David
                </Text>
                <Text style={styles(theme).activityButtonDate}>
                  June 04, 2021 at 12:00am
                </Text>
                <Text style={styles(theme).buttonPriceSold}>
                  Sold for 1.50 ETH
                </Text>
              </View>
            </View>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).activityButton}>
            <View style={globalStyle(theme).flexRow}>
              <Image
                style={styles(theme).activityButtonAvatar}
                source={require('@images/avatar/ava2.png')}
              />
              <View>
                <Text style={styles(theme).activityButtonTitle}>
                  Bid place by @pawel09
                </Text>
                <Text style={styles(theme).activityButtonDate}>
                  June 06, 2021 at 12:00am
                </Text>
                <View style={globalStyle(theme).flexRow}>
                  <Text style={styles(theme).buttonPriceBold}>1.50 ETH</Text>
                  <Text style={styles(theme).buttonPriceLight}>$2,683.73</Text>
                </View>
              </View>
            </View>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).activityButton}>
            <View style={globalStyle(theme).flexRow}>
              <Image
                style={styles(theme).activityButtonAvatar}
                source={require('@images/avatar/ava2.png')}
              />
              <View>
                <Text style={styles(theme).activityButtonTitle}>
                  Listing by @han152
                </Text>
                <Text style={styles(theme).activityButtonDate}>
                  June 04, 2021 at 12:00am
                </Text>
                <View style={globalStyle(theme).flexRow}>
                  <Text style={styles(theme).buttonPriceBold}>1.00 ETH</Text>
                  <Text style={styles(theme).buttonPriceLight}>$2,683.73</Text>
                </View>
              </View>
            </View>
            <External style={styles(theme).svg as StyleProp<ViewProps>} />
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
