/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Header from '../../components/header';
import FrontProduct from '../../components/nft-container';
import LiveContainer from '../../components/nft-live-auction-container';
import HotBid from '../../components/nft-hotbid';
import HotCollection from '../../components/nft-hotcollection';
import Footer from '../../components/footer';
import LinearGradient from 'react-native-linear-gradient';
import Place_bid from '../../components/modal-place-bid/index';

export default function Home() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1,
        },
      ]}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
          <View style={{ marginHorizontal: 16 }}>
            <View>
              <Text style={styles.titleText}>
                {'Discover, collect, and sell'}
                {'\n'}
              </Text>
              <Text style={styles.boldTitleText}>{'Your Digital Art'}</Text>
              <View
                style={{
                  marginHorizontal: 8,
                  marginTop: 22,
                  marginBottom: 23,
                }}>
                <TextInput
                  style={[styles.inputBox, { color: '#F8F8F8' }]}
                  placeholderTextColor="#FCFCFC"
                  placeholder="Search items, collections, and accounts"
                  onPressIn={() => {
                    navigation.navigate('SearchPopup' as never, {} as never);
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    marginLeft: 8,
                    marginRight: 12,
                    marginVertical: 12,
                  }}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{
                      color: '#F8F8F8',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    marginRight: 8,
                    marginVertical: 12,
                    right: 0,
                  }}>
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    style={{
                      color: '#F8F8F8',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <FrontProduct />

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'baseline',
                marginTop: 12.85,
                marginBottom: 15.29,
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '400',
                  lineHeight: 22,
                  color: '#FCFCFC',
                  marginRight: 5.98,
                }}>
                Reserve Price
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 32,
                  fontWeight: '700',
                  lineHeight: 36,
                  color: '#FCFCFC',
                  marginRight: 7.51,
                }}>
                1.50 ETH
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 24,
                  color: '#888888',
                }}>
                $2,683.73
              </Text>
            </View>

            <View
              style={{
                marginVertical: 11,
              }}>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 8,
                    marginBottom: 12,
                    backgroundColor: '#2A2A2E',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      padding: 15,
                      color: '#FCFCFC',
                      fontWeight: '700',
                    }}>
                    Place a bid
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  borderColor: '#0038F5',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    padding: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  View Artwork
                </Text>
              </TouchableOpacity>
              <Place_bid
                visbile={visible}
                handleClose={() => setVisible(false)}
              />
            </View>

            <LiveContainer />

            <HotBid />

            <HotCollection />

            <View
              style={{
                marginTop: 60,
                marginBottom: 24,
              }}>
              {/* view more button */}
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  borderColor: '#0038F5',
                  borderWidth: 1,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    padding: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  View more collection
                </Text>
              </TouchableOpacity>
            </View>

            <View
              // separator line
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '92%',
                alignSelf: 'center',
                marginBottom: 82,
              }}
            />
          </View>

          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  boldTitleText: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  inputBox: {
    paddingTop: 13,
    paddingBottom: 11,
    paddingLeft: 36,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
