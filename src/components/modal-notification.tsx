/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  visibile?: boolean;
  handleClose?: () => void;
}

export default function Notification(props: Props) {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visibile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={[
            styles.centeredView,
            {padding: 16, backgroundColor: 'rgba(0,0,0,0.5)'},
          ]}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles.triangle]} />
          <View style={[styles.modalView]}>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontWeight: '700',
                fontSize: 24,
                lineHeight: 32,
                color: '#FCFCFC',
                marginTop: 36,
                marginBottom: 27,
                marginHorizontal: 26,
              }}>
              Notification
            </Text>

            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../assets/images/notification/noti-1.png')}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#FCFCFC',
                    }}>
                    ETH received
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F0F0F0',
                    }}>
                    1.05 ETH recived
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '500',
                      fontSize: 13,
                      lineHeight: 20,
                      color: '#F8F8F8',
                      marginTop: 3,
                    }}>
                    1 day ago
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 0.2,
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../assets/images/notification/noti-2.png')}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#FCFCFC',
                    }}>
                    Upload success
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F0F0F0',
                    }}>
                    ready to sell
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '500',
                      fontSize: 13,
                      lineHeight: 20,
                      color: '#F8F8F8',
                      marginTop: 3,
                    }}>
                    1 day ago
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 0.4,
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 10,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../assets/images/notification/noti-3.png')}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#FCFCFC',
                    }}>
                    Eric follow your collection
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F0F0F0',
                    }}>
                    Supper wave collection
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '500',
                      fontSize: 13,
                      lineHeight: 20,
                      color: '#F8F8F8',
                      marginTop: 3,
                    }}>
                    2 day ago
                  </Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={{
                  borderBottomColor: 'white',
                  borderBottomWidth: 0.4,
                  width: '100%',
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
            </View>

            <View
              style={{
                marginHorizontal: 20,
                marginBottom: 26,
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                }}>
                <Image
                  source={require('../assets/images/notification/noti-4.png')}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 16,
                      lineHeight: 24,
                      color: '#FCFCFC',
                    }}>
                    ETH received
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '400',
                      fontSize: 16,
                      lineHeight: 22,
                      color: '#F0F0F0',
                    }}>
                    1.05 ETH recived
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '500',
                      fontSize: 13,
                      lineHeight: 20,
                      color: '#F8F8F8',
                      marginTop: 3,
                    }}>
                    1 day ago
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{marginHorizontal: 20}}>
              <TouchableOpacity>
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
                      fontSize: 16,
                      fontFamily: 'Epilogue',
                      textAlign: 'center',
                      padding: 15,
                      color: '#FCFCFC',
                      fontWeight: '700',
                    }}>
                    View all
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
                    fontSize: 16,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    padding: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  Mark as all read
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'flex-end',
    paddingTop: 82,
  },
  modalView: {
    backgroundColor: '#333333',
    borderRadius: 24,
    width: '100%',
    paddingBottom: 30,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 13,
    borderBottomWidth: 15,
    borderLeftWidth: 13,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#333333',
    borderLeftColor: 'transparent',
    marginRight: 109,
  },
});
