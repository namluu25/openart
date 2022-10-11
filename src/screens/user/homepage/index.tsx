import React, { useState } from 'react';
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

export const Home = () => {
  const { homeData } = useFetchData();
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles().home}>
          <View>
            <Text style={styles().titleText}>
              {'Discover, collect, and sell'}
              {'\n'}
            </Text>
            <Text style={styles().boldTitleText}>{'Your Digital Art'}</Text>
            <TouchableOpacity
              style={styles().searchBar}
              onPressIn={() => {
                navigation.navigate('SearchPopup' as never);
              }}>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={styles().searchBarIcon}
                />
              </TouchableOpacity>
              <Text style={styles().searchBarText}>
                Search items, collections, and accounts
              </Text>
              <TouchableOpacity>
                <FontAwesomeIcon
                  icon={faMicrophone}
                  style={styles().searchBarIcon}
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

          <View style={styles().priceView}>
            <Text style={styles().priceViewFirst}>Reserve Price</Text>
            <Text style={styles().priceViewSecond}>1.50 ETH</Text>
            <Text style={styles().priceViewThird}>$2,683.73</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles().touchGradientButton}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles().gradientButton}>
                <Text style={styles().buttonText}>Place a bid</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles().normalButton}
              onPress={() => {
                navigation.navigate('DetailsAuction' as never);
              }}>
              <Text style={styles().buttonText}>View Artwork</Text>
            </TouchableOpacity>
            <PlaceBid visbile={visible} handleClose={() => setVisible(false)} />
          </View>

          {/* live auction */}
          <View>
            <View style={styles().liveAuctionView}>
              <View style={styles().liveAuctionTextView}>
                <Image source={require('@images/icon/live.png')} />
                <Text style={styles().liveAuctionText}>Live auctions</Text>
              </View>
              <TouchableOpacity style={globalStyle().containerPriceButton}>
                <Text style={globalStyle().containerPriceButtonText}>
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
                    <TouchableOpacity style={styles().button}>
                      <Text style={styles().buttonText}>
                        Sold For
                        <Text style={styles().buttonTextBold}> 2.00 ETH</Text>
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles().buttonBid}
                      onPress={() => setVisible(true)}>
                      <View
                        style={[
                          globalStyle().flexRow,
                          globalStyle().justifyAround,
                        ]}>
                        <View
                          style={[
                            globalStyle().flexRow,
                            globalStyle().itemBaseline,
                          ]}>
                          <Image
                            resizeMode="contain"
                            style={styles().buttonBidActiveIcon}
                            source={require('@images/icon/active.png')}
                          />
                          <View style={globalStyle().itemStart}>
                            <Text style={styles().buttonBidTextLight}>
                              Current bid
                            </Text>
                            <Text style={styles().buttonBidTextBold}>
                              2.00 ETH
                            </Text>
                          </View>
                        </View>
                        <View style={globalStyle().itemStart}>
                          <Text style={styles().buttonBidTextLight}>
                            Ending in
                          </Text>
                          <Text style={styles().buttonBidTextBold}>
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

          <TouchableOpacity style={styles().viewMoreButton}>
            <Text style={styles().viewMoreButtonText}>
              View more collection
            </Text>
          </TouchableOpacity>
        </View>

        <View
          // separator line
          style={styles().separatorLine}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
