import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import { HotCollection } from './hotCollection';
import { HotBid } from './hotBid';
import { Header } from 'components';
import { Footer } from 'components';
import { PlaceBid } from '@modal/placeBid';
import { ItemContainer } from 'components';
import { globalStyle } from 'theme/globalStyle';

interface Items {
  id: number;
  name: string;
  avatar: string;
  creator_name: string;
  image: string;
}

export const Home = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: ' ',
      avatar: ' ',
      creator_name: ' ',
      image: ' ',
    },
  ]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/homepage')
      .then(res => {
        setApiData(res.data);
      })
      .catch(error => console.log(error));
  }, []);
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

          <ItemContainer
            image={apiData[0]?.image}
            name={apiData[0]?.name}
            avatar={apiData[0]?.avatar}
            creator_name={apiData[0]?.creator_name}
            navi={'DetailsAuction'}
          />

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
            <PlaceBid visbile={visible} handleClose={() => setVisible(false)} />
          </View>

          <View>
            <View style={styles.liveAuctionView}>
              <View style={styles.liveAuctionTextView}>
                <Image source={require('@images/icon/live-icon.png')} />
                <Text style={styles.liveAuctionText}>Live auctions</Text>
              </View>
              <TouchableOpacity style={globalStyle.containerPriceButton}>
                <Text style={globalStyle.containerPriceButtonText}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>
              {apiData.slice(1).map((item: Items) => {
                return (
                  <View key={item.id}>
                    <ItemContainer
                      image={item.image}
                      name={item.name}
                      creator_name={item.creator_name}
                      avatar={item.avatar}
                      navi={'DetailSold'}
                    />
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.buttonText}>
                        Sold For
                        <Text style={styles.buttonTextBold}> 2.00 ETH</Text>
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

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
