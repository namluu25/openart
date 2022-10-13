import React, { useContext, useState } from 'react';
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
import { Header, ItemContainer, Footer } from 'components';
import { PlaceBid } from '@modal/placeBid';
import globalStyle from 'theme/globalStyle';
import { useFetchData, HomeItems } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { homeData } = useFetchData();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles(theme).home}>
          <View>
            <Text style={styles(theme).titleText}>
              {'Discover, collect, and sell'}
              {'\n'}
            </Text>
            <Text style={styles(theme).boldTitleText}>
              {'Your Digital Art'}
            </Text>
            <TouchableOpacity
              style={styles(theme).searchBar}
              onPressIn={() => {
                navigation.navigate('SearchPopup' as never);
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={styles(theme).searchBarIcon}
                />
              </TouchableOpacity>
              <Text style={styles(theme).searchBarText}>
                Search items, collections, and accounts
              </Text>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={styles(theme).searchBarIcon}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>

          <ItemContainer
            image={homeData[0]?.image}
            name={homeData[0]?.name}
            avatar={homeData[0]?.avatar}
            creator_name={homeData[0]?.creator_name}
            navi={'DetailsAuction'}
          />

          <View style={styles(theme).priceView}>
            <Text style={styles(theme).priceViewFirst}>Reserve Price</Text>
            <Text style={styles(theme).priceViewSecond}>1.50 ETH</Text>
            <Text style={styles(theme).priceViewThird}>$2,683.73</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles(theme).touchGradientButton}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles(theme).gradientButton}>
                <Text
                  style={[styles(theme).buttonText, styles().buttonTextWhite]}>
                  Place a bid
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles(theme).normalButton}
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Text
                style={[
                  styles(theme).buttonText,
                  styles(theme).buttonTextBlack,
                ]}>
                View Artwork
              </Text>
            </TouchableOpacity>
            <PlaceBid visbile={visible} handleClose={() => setVisible(false)} />
          </View>

          {/* live auction */}
          <View>
            <View style={styles(theme).liveAuctionView}>
              <View style={styles(theme).liveAuctionTextView}>
                <Image source={require('@images/icon/live.png')} />
                <Text style={styles(theme).liveAuctionText}>Live auctions</Text>
              </View>
              <TouchableOpacity style={globalStyle(theme).containerPriceButton}>
                <Text style={globalStyle(theme).containerPriceButtonText}>
                  View all
                </Text>
              </TouchableOpacity>
            </View>
            {homeData.slice(1).map((item: HomeItems) => {
              return (
                <View key={item.id}>
                  <ItemContainer
                    image={item.image}
                    name={item.name}
                    creator_name={item.creator_name}
                    avatar={item.avatar}
                    navi={item.sold_state ? 'DetailsSold' : 'DetailsCurrentBid'}
                  />
                  {item.sold_state ? (
                    <TouchableOpacity style={styles(theme).button}>
                      <Text style={styles(theme).buttonText}>
                        Sold For
                        <Text style={styles(theme).buttonTextBold}>
                          {' '}
                          2.00 ETH
                        </Text>
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles(theme).buttonBid}
                      onPress={() => setVisible(true)}>
                      <View
                        style={[
                          globalStyle(theme).flexRow,
                          globalStyle(theme).justifyAround,
                        ]}>
                        <View
                          style={[
                            globalStyle(theme).flexRow,
                            globalStyle(theme).itemBaseline,
                          ]}>
                          <Image
                            resizeMode="contain"
                            style={styles(theme).buttonBidActiveIcon}
                            source={require('@images/icon/active.png')}
                          />
                          <View style={globalStyle(theme).itemStart}>
                            <Text style={styles(theme).buttonBidTextLight}>
                              Current bid
                            </Text>
                            <Text style={styles(theme).buttonBidTextBold}>
                              2.00 ETH
                            </Text>
                          </View>
                        </View>
                        <View style={globalStyle(theme).itemStart}>
                          <Text style={styles(theme).buttonBidTextLight}>
                            Ending in
                          </Text>
                          <Text style={styles(theme).buttonBidTextBold}>
                            27m 30s
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>

          <HotBid />

          <HotCollection />

          <TouchableOpacity style={styles(theme).viewMoreButton}>
            <Text style={styles(theme).viewMoreButtonText}>
              View more collection
            </Text>
          </TouchableOpacity>
        </View>

        <View
          // separator line
          style={styles(theme).separatorLine}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
