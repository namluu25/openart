/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// interface Items {
//   id: number;
//   url: string;
//   imgName: string;
//   author: string;
//   role: string;
//   active: boolean;
//   liked: boolean;
// }

export default function LiveContainer() {
  const navigation = useNavigation();
  // const data = [
  //   {
  //     id: '1',
  //     url: 'openart/src/asset/images/nft/1.png',
  //     imgName: 'Silent Color',
  //     author: 'Pawel Czerwinski',
  //     role: 'Creator',
  //     active: true,
  //     liked: true,
  //   },
  //   {
  //     id: '2',
  //     url: 'openart/src/asset/images/nft/2.png',
  //     imgName: 'Silent Color',
  //     author: 'Pawel Czerwinski',
  //     role: 'Creator',
  //     active: true,
  //     liked: true,
  //   },
  // ];
  return (
    // <ScrollView>
    //   {data.map((item: Items) => {
    //     <View key={item.id}>

    //     </View>
    //   })}
    // </ScrollView>
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 86.27,
          marginHorizontal: 16.57,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 15,
            justifyContent: 'center',
            alignItems: 'baseline',
          }}>
          <Image
            style={{marginRight: 7.31}}
            source={require('openart/src/assets/images/icon/live-icon.png')}
          />
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Epilogue',
              color: '#F8F8F8',
              fontWeight: '700',
              paddingRight: 64,
            }}>
            Live auctions
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderColor: '#888888',
            borderWidth: 1,
            alignSelf: 'center',
            // marginRight: 18,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              paddingVertical: 9,
              paddingHorizontal: 30,
              color: '#F8F8F8',
              fontWeight: '400',
              lineHeight: 22,
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={[styles.product, {marginTop: 21.5}]}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details_sold' as never, {} as never);
              }}>
              <Image
                style={styles.image}
                source={require('openart/src/assets/images/nft/2.png')}
              />
            </TouchableOpacity>

            <Text style={[styles.nftText, {marginTop: 12.41}]}>
              Silent Color
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // paddingVertical: 12.53,
                marginTop: 2.68,
                marginBottom: 16.86,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User_profile' as never, {} as never);
                  }}>
                  <Image
                    style={styles.avatar}
                    source={require('openart/src/assets/images/avatar/ava1.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    borderWidth: 2,
                    borderColor: '#333333',
                    borderRadius: 12,
                  }}
                  source={require('../assets/images/icon/active-icon.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
                  Pawel Czerwinski
                </Text>
                <Text
                  style={[
                    styles.nftText,
                    {fontSize: 14, fontWeight: '500', paddingLeft: 12},
                  ]}>
                  Creator
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/heart-icon.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 51,
            marginTop: 12.14,
            marginHorizontal: 16.57,
            backgroundColor: '#333333',
            paddingVertical: 18,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              color: '#FCFCFC',
              fontWeight: '400',
            }}>
            Sold For
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              {' '}
              2.00 ETH
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={[styles.product]}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Details_sold' as never, {} as never);
              }}>
              <Image
                style={styles.image}
                source={require('openart/src/assets/images/nft/3.png')}
              />
            </TouchableOpacity>

            <Text style={[styles.nftText, {marginTop: 12.41}]}>George</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // paddingVertical: 12.53,
                marginTop: 2.68,
                marginBottom: 16.86,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User_profile' as never, {} as never);
                  }}>
                  <Image
                    style={styles.avatar}
                    source={require('openart/src/assets/images/avatar/ava1.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    borderWidth: 2,
                    borderColor: '#333333',
                    borderRadius: 12,
                  }}
                  source={require('../assets/images/icon/active-icon.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
                  Pawel Czerwinski
                </Text>
                <Text
                  style={[
                    styles.nftText,
                    {fontSize: 14, fontWeight: '500', paddingLeft: 12},
                  ]}>
                  Creator
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/heart-icon.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 51,
            marginTop: 12.14,
            marginHorizontal: 16.57,
            backgroundColor: '#333333',
            paddingVertical: 18,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              color: '#FCFCFC',
              fontWeight: '400',
            }}>
            Sold For
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                color: '#FCFCFC',
                fontWeight: '700',
              }}>
              {' '}
              2.00 ETH
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.product}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(
                  'Details_current_bid' as never,
                  {} as never,
                );
              }}>
              <Image
                style={styles.image}
                source={require('openart/src/assets/images/nft/4.png')}
              />
            </TouchableOpacity>

            <Text style={[styles.nftText, {marginTop: 12}]}>Mirror</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2.68,
                marginBottom: 16.86,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User_profile' as never, {} as never);
                  }}>
                  <Image
                    style={styles.avatar}
                    source={require('openart/src/assets/images/avatar/ava1.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    borderWidth: 2,
                    borderColor: '#333333',
                    borderRadius: 12,
                  }}
                  source={require('../assets/images/icon/active-icon.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
                  Pawel Czerwinski
                </Text>
                <Text
                  style={[
                    styles.nftText,
                    {fontSize: 14, fontWeight: '500', paddingLeft: 12},
                  ]}>
                  Creator
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/heart-icon.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 51,
            marginTop: 12.14,
            marginHorizontal: 16.57,
            backgroundColor: '#333333',
            paddingVertical: 13,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode="contain"
                style={{width: '8%', marginRight: 4}}
                source={require('../assets/images/icon/active-icon.png')}
              />
              <View style={{alignItems: 'flex-start'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#FCFCFC',
                    fontWeight: '400',
                  }}>
                  Current bid
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  2.00 ETH
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '400',
                }}>
                Ending in
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                27m 30s
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.product}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(
                  'Details_current_bid' as never,
                  {} as never,
                );
              }}>
              <Image
                style={styles.image}
                source={require('openart/src/assets/images/nft/5.png')}
              />
            </TouchableOpacity>

            <Text style={[styles.nftText, {marginTop: 12}]}>Magic Mar</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2.68,
                marginBottom: 16.86,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User_profile' as never, {} as never);
                  }}>
                  <Image
                    style={styles.avatar}
                    source={require('openart/src/assets/images/avatar/ava1.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    borderWidth: 2,
                    borderColor: '#333333',
                    borderRadius: 12,
                  }}
                  source={require('../assets/images/icon/active-icon.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
                  Pawel Czerwinski
                </Text>
                <Text
                  style={[
                    styles.nftText,
                    {fontSize: 14, fontWeight: '500', paddingLeft: 12},
                  ]}>
                  Creator
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/heart-icon.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 51,
            marginTop: 12.14,
            marginHorizontal: 16.57,
            backgroundColor: '#333333',
            paddingVertical: 13,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                resizeMode="contain"
                style={{width: '8%', marginRight: 4}}
                source={require('../assets/images/icon/active-icon.png')}
              />
              <View style={{alignItems: 'flex-start'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    color: '#FCFCFC',
                    fontWeight: '400',
                  }}>
                  Current bid
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  2.00 ETH
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '400',
                }}>
                Ending in
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                27m 30s
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.product}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(
                  'Details_current_bid' as never,
                  {} as never,
                );
              }}>
              <Image
                style={styles.image}
                source={require('openart/src/assets/images/nft/6.png')}
              />
            </TouchableOpacity>

            <Text style={[styles.nftText, {marginTop: 12}]}>
              Shedd Aquarium
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 2.68,
                marginBottom: 16.86,
                alignItems: 'center',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('User_profile' as never, {} as never);
                  }}>
                  <Image
                    style={styles.avatar}
                    source={require('openart/src/assets/images/avatar/ava1.png')}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    position: 'absolute',
                    right: 0,
                    borderWidth: 2,
                    borderColor: '#333333',
                    borderRadius: 12,
                  }}
                  source={require('../assets/images/icon/active-icon.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <Text style={[styles.nftText, {fontSize: 18, paddingLeft: 12}]}>
                  Pawel Czerwinski
                </Text>
                <Text
                  style={[
                    styles.nftText,
                    {fontSize: 14, fontWeight: '500', paddingLeft: 12},
                  ]}>
                  Creator
                </Text>
              </View>
              <Image
                source={require('openart/src/assets/images/icon/heart-icon.png')}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 51,
            marginTop: 12.14,
            marginHorizontal: 16.57,
            backgroundColor: '#333333',
            paddingVertical: 13,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  color: '#FCFCFC',
                  fontWeight: '400',
                }}>
                Current bid
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                2.00 ETH
              </Text>
            </View>
            <View style={{alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '400',
                }}>
                Ending in
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                27m 30s
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 32,
    marginTop: 40,
    marginHorizontal: 16.57,
  },
  image: {
    borderRadius: 24,
    // marginBottom: 11,
    marginTop: 18,
  },
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  avatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
  },
});
