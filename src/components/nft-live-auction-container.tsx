/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

// interface Items {
//   id: number;
//   url: string;
//   imgName: string;
//   author: string;
//   role: string;
//   active: boolean;
//   liked: boolean;
// }

const LiveContainer = () => {
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
        }}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: 'Epilogue',
            padding: 15,
            color: '#F8F8F8',
            fontWeight: '700',
            paddingRight: 64,
          }}>
          🔴 Live auctions
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 8,
            borderColor: '#888888',
            borderWidth: 1,
            alignSelf: 'center',
            marginRight: 18,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              padding: 15,
              color: '#F8F8F8',
              fontWeight: '700',
            }}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.product}>
          <View style={styles.nftInfo}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/2.png')}
            />
            <Text style={[styles.nftText, {padding: 12}]}>Silent Color</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center',
              }}>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava1.png')}
              />
              <View
                style={{
                  flex: 1,
                  // flexWrap: 'wrap',
                  flexShrink: 1,
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
            // borderColor: '#0038F5',
            // borderWidth: 1,
            margin: 11,
            backgroundColor: '#333333',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              padding: 3,
              color: '#FCFCFC',
              fontWeight: '700',
            }}>
            Sold For
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                padding: 3,
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
          <View style={styles.nftInfo}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/3.png')}
            />
            <Text style={[styles.nftText, {padding: 12}]}>George</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center',
              }}>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava1.png')}
              />
              <View
                style={{
                  flex: 1,
                  // flexWrap: 'wrap',
                  flexShrink: 1,
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
            // borderColor: '#0038F5',
            // borderWidth: 1,
            margin: 11,
            backgroundColor: '#333333',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              padding: 3,
              color: '#FCFCFC',
              fontWeight: '700',
            }}>
            Sold For
            <Text
              style={{
                fontSize: 24,
                fontFamily: 'Epilogue',
                textAlign: 'center',
                padding: 3,
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
          <View style={styles.nftInfo}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/4.png')}
            />
            <Text style={[styles.nftText, {padding: 12}]}>Mirror</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center',
              }}>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava1.png')}
              />
              <View
                style={{
                  flex: 1,
                  // flexWrap: 'wrap',
                  flexShrink: 1,
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
            // borderColor: '#0038F5',
            // borderWidth: 1,
            margin: 11,
            backgroundColor: '#333333',
            // paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingHorizontal: 16,
              paddingBottom: 11,
              // marginTop: 3,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  padding: 15,
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
                  paddingHorizontal: 15,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                2.00 ETH
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 15,
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
                  paddingHorizontal: 15,
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
          <View style={styles.nftInfo}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/5.png')}
            />
            <Text style={[styles.nftText, {padding: 12}]}>Magic Mar</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center',
              }}>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava1.png')}
              />
              <View
                style={{
                  flex: 1,
                  // flexWrap: 'wrap',
                  flexShrink: 1,
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
            // borderColor: '#0038F5',
            // borderWidth: 1,
            margin: 11,
            backgroundColor: '#333333',
            // paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingHorizontal: 16,
              paddingBottom: 11,
              // marginTop: 3,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  padding: 15,
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
                  paddingHorizontal: 15,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                2.00 ETH
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 15,
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
                  paddingHorizontal: 15,
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
          <View style={styles.nftInfo}>
            <Image
              style={styles.image}
              source={require('openart/src/assets/images/nft/6.png')}
            />
            <Text style={[styles.nftText, {padding: 12}]}>Shedd Aquarium</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 12,
                alignItems: 'center',
              }}>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava1.png')}
              />
              <View
                style={{
                  flex: 1,
                  // flexWrap: 'wrap',
                  flexShrink: 1,
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
            // borderColor: '#0038F5',
            // borderWidth: 1,
            margin: 11,
            backgroundColor: '#333333',
            // paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingHorizontal: 16,
              paddingBottom: 11,
              // marginTop: 3,
            }}>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  padding: 15,
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
                  paddingHorizontal: 15,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                2.00 ETH
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 15,
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
                  paddingHorizontal: 15,
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
};

const styles = StyleSheet.create({
  product: {
    backgroundColor: '#333333',
    alignItems: 'center',
    borderRadius: 32,
    margin: 11,
  },
  image: {
    width: 320,
    height: 399.21,
    borderRadius: 24,
    marginVertical: 11,
  },
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
  nftInfo: {
    paddingTop: 11,
  },
  avatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
  },
});

export default LiveContainer;
