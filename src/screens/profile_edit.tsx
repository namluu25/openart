/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Profile_edit() {
  // const navigation = useNavigation();
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1,
        },
      ]}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />
        <ScrollView>
          <View>
            <Image
              style={{width: '100%'}}
              source={require('../assets/images/profile/cover.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                position: 'absolute',
                alignSelf: 'flex-end',
                marginTop: 9.71,
              }}>
              {/* button */}
              <TouchableOpacity
                style={{
                  borderRadius: 40,
                  backgroundColor: '#333333',
                  // alignSelf: 'center',
                  marginHorizontal: 8,
                }}>
                <Image
                  style={{margin: 10}}
                  source={require('openart/src/assets/images/icon/more-icon.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 40,
                  backgroundColor: '#333333',
                  // alignSelf: 'center',
                  marginRight: 16,
                }}>
                <Image
                  style={{margin: 10}}
                  source={require('openart/src/assets/images/icon/export-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{
                position: 'absolute',
                alignSelf: 'center',
                marginTop: 96.7,
              }}
              source={require('../assets/images/profile/ava.png')}
            />

            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Epilogue',
                fontWeight: '700',
                fontSize: 18,
                lineHeight: 28,
                marginTop: 74.33,
                color: '#FCFCFC',
              }}>
              Gift Habeshaw
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  marginRight: 4,
                  color: '#F8F8F8',
                }}>
                52fs5ge5g45sov45a
              </Text>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/icon/copy-icon.png')}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginHorizontal: 16.57,
                marginTop: 38.97,
                marginBottom: 28,
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 16,
                }}>
                Enter your details
              </Text>
              <TextInput
                style={[styles.inputBox, {marginBottom: 12.62}]}
                placeholderTextColor="#FCFCFC"
                // value={text}
                placeholder="Name"
              />
              <TextInput
                style={[styles.inputBox, {marginBottom: 41.04}]}
                placeholderTextColor="#FCFCFC"
                // value={text}
                placeholder="User Name"
              />
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 16,
                }}>
                Enter your details
              </Text>
              <TextInput
                style={[styles.inputBox, {marginBottom: 1.79}]}
                placeholderTextColor="#FCFCFC"
                // value={text}
                placeholder="Email"
              />
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '500',
                  fontSize: 13,
                  lineHeight: 20,
                  color: '#888888',
                  marginLeft: 41.43,
                  marginBottom: 40,
                }}>
                Add your email address to receive notifications about your
                activity on Foundation. This will not be shown on your profile.
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 16,
                }}>
                Enter your bio
              </Text>
              <View style={{marginBottom: 40}}>
                <TextInput
                  style={[styles.inputBox, {paddingBottom: 100}]}
                  placeholderTextColor="#FCFCFC"
                  // value={text}
                  placeholder="Enter your bio here"
                />
                <Image
                  style={{
                    position: 'absolute',
                    // alignSelf: 'flex-end',
                    bottom: 0,
                    right: 0,
                    marginRight: 4.26,
                    marginBottom: 2.67,
                  }}
                  source={require('../assets/images/icon/form-icon.png')}
                />
              </View>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 16,
                }}>
                Upload a profile image
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#333333',
                  borderRadius: 32,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 40,
                }}>
                <Image
                  style={{marginTop: 43}}
                  source={require('../assets/images/icon/picture-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    color: '#F8F8F8',
                    fontWeight: '700',
                    lineHeight: 28,
                  }}>
                  Drag and drop or browce a file
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontFamily: 'Epilogue',
                    color: '#F0F0F0',
                    fontWeight: '500',
                    lineHeight: 20,
                    textAlign: 'center',
                    marginHorizontal: 30,
                    marginBottom: 23.72,
                  }}>
                  Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 12,
                }}>
                Verify your profile
              </Text>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 16,
                  lineHeight: 22,
                  color: '#F0F0F0',
                  marginBottom: 16.88,
                }}>
                Show the Foundation community that your profile is authentic.
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  borderColor: '#888888',
                  borderWidth: 1,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginBottom: 12,
                }}>
                <Image
                  source={require('../assets/images/icon/twitter-icon-gradient.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    padding: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  Verify via Twitter
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  borderColor: '#888888',
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginBottom: 40,
                }}>
                <Image
                  source={require('../assets/images/icon/instagram-icon-gradient.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    padding: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  Verify via Instagram
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontWeight: '400',
                  fontSize: 20,
                  lineHeight: 28,
                  color: '#F8F8F8',
                  marginBottom: 16,
                }}>
                Add links to your social media profiles.
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 12.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/link-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Website
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 12.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/discord-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Discord
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 12.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/instagram-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Instagram
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 12.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/youtube-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Youtube channel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 12.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/facebook-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Facebook
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 8,
                  backgroundColor: '#333333',
                  paddingVertical: 16.31,
                  paddingHorizontal: 24,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginBottom: 44.62,
                }}>
                <Image
                  style={{marginRight: 12}}
                  source={require('../assets/images/icon/tiktok-icon.png')}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    // textAlign: 'center',
                    // padding: 3,
                    color: '#FCFCFC',
                    fontWeight: '500',
                    lineHeight: 24,
                  }}>
                  Tiktok
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={{
                    borderRadius: 8,
                    // marginBottom: 12,
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
                    Save
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View
              // separator line
              style={{
                borderBottomColor: '#DCDCDC',
                borderBottomWidth: 0.5,
                width: 327,
                alignSelf: 'center',
              }}
            />
          </View>

          <View style={{marginBottom: 90.26}} />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 50,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
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
  inputBox: {
    paddingVertical: 16.81,
    paddingLeft: 24,
    borderRadius: 8,
    backgroundColor: '#333333',
  },
});
