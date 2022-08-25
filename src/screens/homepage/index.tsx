import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../../components/header';
import { FrontProduct } from '../../components/nft-container';
import { LiveContainer } from '../../components/nft-live-auction-container';
import { HotBid } from '../../components/nft-hotbid';
import { HotCollection } from '../../components/nft-hotcollection';
import { Footer } from '../../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import { Place_bid } from '../../components/modal-place-bid/index';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles.home}>
          <View>
            <Text style={styles.titleText}>
              {'Discover, collect, and sell'}
              {'\n'}
            </Text>
            <Text style={styles.boldTitleText}>{'Your Digital Art'}</Text>
            <TouchableOpacity
              style={styles.searchBar}
              onPressIn={() => {
                navigation.navigate('SearchPopup' as never, {} as never);
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={styles.searchBarIcon}
                />
              </TouchableOpacity>
              <Text style={styles.searchBarText}>
                Search items, collections, and accounts
              </Text>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={styles.searchBarIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <FrontProduct />

          <View style={styles.priceView}>
            <Text style={styles.priceViewFirst}>Reserve Price</Text>
            <Text style={styles.priceViewSecond}>1.50 ETH</Text>
            <Text style={styles.priceViewThird}>$2,683.73</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles.gradientButton}>
                <Text style={styles.buttonText}>Place a bid</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.normalButton}>
              <Text style={styles.buttonText}>View Artwork</Text>
            </TouchableOpacity>
            <Place_bid
              visbile={visible}
              handleClose={() => setVisible(false)}
            />
          </View>

          <LiveContainer />

          <HotBid />

          <HotCollection />

          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreButtonText}>View more collection</Text>
          </TouchableOpacity>
        </View>

        <View
          // separator line
          style={styles.separatorLine}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
