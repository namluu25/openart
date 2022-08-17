/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';

interface Props {
  visbile?: boolean;
  handleClose?: () => void;
}

export default function Account(props: Props) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visbile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={[
            styles.centeredView,
            { padding: 16, backgroundColor: 'rgba(0,0,0,0.5)' },
          ]}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles.triangle]} />
          <View style={[styles.modalView]}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 36,
                marginBottom: 27,
                marginHorizontal: 26,
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never, {} as never);
                  setVisibleAccount(false);
                }}>
                <Image
                  style={{ marginRight: 17 }}
                  source={require('../assets/images/avatar/ava12.png')}
                />
              </TouchableOpacity>
              <View style={{ alignSelf: 'center' }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('UserProfile' as never, {} as never);
                    setVisibleAccount(false);
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 18,
                      lineHeight: 28,
                      color: '#FCFCFC',
                    }}>
                    Gift Habeshaw
                  </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontFamily: 'Epilogue',
                        fontWeight: '500',
                        fontSize: 13,
                        lineHeight: 20,
                        color: '#F8F8F8',
                      }}>
                      52fs5ge5g45sov45a
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{ marginHorizontal: 5 }}
                      source={require('../assets/images/icon/copy-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#222222',
                borderRadius: 32,
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 16,
                paddingVertical: 15,
                marginBottom: 30,
                marginHorizontal: 16,
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 40,
                  backgroundColor: '#333333',
                  marginRight: 17,
                }}>
                <Image
                  style={{ margin: 8 }}
                  source={require('openart/src/assets/images/icon/wallet-icon.png')}
                />
              </TouchableOpacity>
              <View style={{ flexDirection: 'column' }}>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                  }}>
                  Balance
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  <Text
                    style={{
                      fontFamily: 'Epilogue',
                      fontWeight: '700',
                      fontSize: 24,
                      lineHeight: 32,
                      color: '#FCFCFC',
                      marginRight: 23,
                    }}>
                    5.000 ETH
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/images/icon/hide-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ marginHorizontal: 26 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never);
                  setVisibleAccount(false);
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 23,
                }}>
                <Image
                  source={require('../assets/images/icon/people-icon.png')}
                />
                <Text
                  style={{
                    marginLeft: 13,
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                  }}>
                  My account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 23,
                }}>
                <Image
                  source={require('../assets/images/icon/picture-icon.png')}
                />
                <Text
                  style={{
                    marginLeft: 13,
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                  }}>
                  My items
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 23,
                }}>
                <Image
                  source={require('../assets/images/icon/invoice-icon.png')}
                />
                <Text
                  style={{
                    marginLeft: 13,
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                  }}>
                  My invoice
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 26,
                }}>
                <Image
                  source={require('../assets/images/icon/back-arrow.png')}
                />
                <Text
                  style={{
                    marginLeft: 13,
                    fontFamily: 'Epilogue',
                    fontWeight: '400',
                    fontSize: 16,
                    lineHeight: 22,
                    color: '#F8F8F8',
                  }}>
                  Sign out
                </Text>
              </TouchableOpacity>
            </View>
            <View
              // separator line
              style={{
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                width: '98%',
                alignSelf: 'center',
                marginBottom: 17,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  marginLeft: 31,
                  fontFamily: 'Epilogue',
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 24,
                  color: '#F8F8F8',
                }}>
                Dark mode
              </Text>
              <Switch
                style={{ marginRight: 23 }}
                color="#004BFB"
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            </View>
            <Account
              visbile={visibleAccount}
              handleClose={() => setVisibleAccount(false)}
            />
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
    paddingBottom: 22,
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
    marginRight: 54,
  },
});
