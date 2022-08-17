/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HotCollection = () => {
  return (
    <>
      <View
        // title view
        style={{
          marginTop: 34,
          flexDirection: 'row',
          marginBottom: 40,
        }}>
        <Image
          source={require('openart/src/assets/images/icon/sparkle-icon.png')}
        />
        <Text
          style={{
            fontFamily: 'Epilogue',
            fontSize: 24,
            color: '#FCFCFC',
            fontWeight: '700',
          }}>
          {' '}
          Hot Collection
        </Text>
      </View>

      <View
        //image row 1
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Image
          source={require('openart/src/assets/images/hotcollection/hot-collection-1.png')}
        />
        <Image
          source={require('openart/src/assets/images/hotcollection/hot-collection-2.png')}
        />
      </View>

      <View
        //image row 2
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 28,
          marginBottom: 19,
        }}>
        <Image
          source={require('openart/src/assets/images/hotcollection/hot-collection-3.png')}
        />
        <Image
          source={require('openart/src/assets/images/hotcollection/hot-collection-4.png')}
        />
      </View>

      <View
        //   image title and button
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          // title
          style={{
            fontFamily: 'Epilogue',
            fontSize: 20,
            fontWeight: '700',
            color: '#FCFCFC',
          }}>
          Water and sunflower
        </Text>

        <TouchableOpacity
          // button 30 items
          style={{
            borderRadius: 34,
            borderColor: '#DCDCDC',
            borderWidth: 1,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              paddingHorizontal: 12,
              paddingVertical: 4,
              color: '#F8F8F8',
              fontWeight: '700',
            }}>
            30 items
          </Text>
        </TouchableOpacity>
      </View>

      <View
        //   author and follow button
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <TouchableOpacity>
              <Image
                style={styles.avatar}
                source={require('openart/src/assets/images/avatar/ava2.png')}
              />
            </TouchableOpacity>
            <Image
              style={{
                position: 'absolute',
                right: 0,
                borderWidth: 2,
                borderColor: '#C4C4C4',
                borderRadius: 12,
              }}
              source={require('../assets/images/icon/active-icon.png')}
            />
          </View>
          <Text style={[styles.nftText, { fontSize: 13, paddingLeft: 12 }]}>
            By Rodion Kutsaev
          </Text>
        </View>

        <TouchableOpacity
          // button 30 items
          style={{
            borderRadius: 8,
            borderColor: '#DCDCDC',
            borderWidth: 1,
            alignSelf: 'center',
            flexDirection: 'row',
            paddingHorizontal: 33,
            paddingVertical: 8,
          }}>
          <Image
            style={{
              marginRight: 9,
            }}
            source={require('openart/src/assets/images/icon/heart-icon.png')}
          />
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Epilogue',
              textAlign: 'center',
              color: '#F8F8F8',
              fontWeight: '400',
              alignSelf: 'center',
            }}>
            Follow
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          // paddingTop: 30,
          // marginVertical: 11,
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
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 24,
    paddingLeft: 12,
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#C4C4C4',
  },
  nftText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FCFCFC',
    fontFamily: 'Epilogue',
  },
});
export default HotCollection;
