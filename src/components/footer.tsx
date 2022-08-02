/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Footer = () => {
  return (
    <View>
      <Image
        source={require('openart/src/assets/images/icon/Logo.png')}
        style={{
          alignSelf: 'center',
          width: 177.32,
          height: 46.86,
          marginTop: 23,
        }}
      />
      <Text
        style={{
          fontSize: 25.7249,
          fontFamily: 'Epilogue',
          fontWeight: '700',
          lineHeight: 34,
          color: '#FCFCFC',
          alignSelf: 'center',
          marginTop: 4,
        }}>
        The New Creative Economy
      </Text>
      <View
        //   button
        style={{
          margin: 11,
          padding: 16,
        }}>
        <TouchableOpacity>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={{
              // flex: 1,
              // paddingLeft: 5,
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
              Earn now
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
            Discover more
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#333333',
          marginTop: 88,
        }}>
        <View
          // info section
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 25.41,
            paddingLeft: 17.7,
          }}>
          <View>
            {/* insta */}
            <Text style={styles.aboutText}>Instagram</Text>
            <Text style={styles.aboutText}>Twitter</Text>
            <Text style={styles.aboutText}>Discord</Text>
            <Text style={styles.aboutText}>Blog</Text>
          </View>
          <View style={{paddingRight: 10}}>
            {/* about */}
            <Text style={styles.aboutText}>About</Text>
            <Text style={styles.aboutText}>Community Guidelines</Text>
            <Text style={styles.aboutText}>Terms of Services</Text>
            <Text style={styles.aboutText}>Privacy</Text>
            <Text style={styles.aboutText}>Careers</Text>
            <Text style={styles.aboutText}>Help</Text>
          </View>
        </View>

        <View
          // separator line
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: 1,
            width: 368,
            alignSelf: 'center',
            marginTop: 11,
          }}
        />
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Epilogue',
            color: '#FCFCFC',
            fontWeight: '500',
            paddingVertical: 28,
            paddingLeft: 17,
          }}>
          © 2021 Openart
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutText: {
    fontSize: 16,
    fontFamily: 'Epilogue',
    color: '#FCFCFC',
    fontWeight: '400',
    lineHeight: 30,
  },
});
export default Footer;
