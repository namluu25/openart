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
  visbile?: boolean;
  handleClose?: () => void;
}

export default function Place_bid(props: Props) {
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
            {paddingHorizontal: 16, backgroundColor: 'rgba(0,0,0,0.5)'},
          ]}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // paddingHorizontal: 24.12,
                marginBottom: 11.92,
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 24,
                  fontWeight: '700',
                  lineHeight: 32,
                  color: '#F8F8F8',
                }}>
                Connect wallet
              </Text>
              <TouchableOpacity onPress={props.handleClose}>
                <Image
                  source={require('../assets/images/icon/close_icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Image
              style={{alignSelf: 'center'}}
              source={require('../assets/images/icon/connect_wallet_icon.png')}
            />
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: '#F8F8F8',
                // paddingHorizontal: 16.55,
                marginBottom: 20.4,
              }}>
              By connecting your wallet, you agree to our{' '}
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 24,
                  color: '#F8F8F8',
                  marginBottom: 20.4,
                }}>
                Terms of Service
              </Text>{' '}
              and our{' '}
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '700',
                  lineHeight: 24,
                  color: '#F8F8F8',
                  marginBottom: 20.4,
                }}>
                Privacy Policy
              </Text>
            </Text>

            <TouchableOpacity
              style={{marginBottom: 18.35, marginHorizontal: 45}}>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={{
                  borderRadius: 8,
                  backgroundColor: '#2A2A2E',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Epilogue',
                    textAlign: 'center',
                    paddingVertical: 15,
                    color: '#FCFCFC',
                    fontWeight: '700',
                  }}>
                  Connect wallet
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 16,
                  fontWeight: '400',
                  lineHeight: 22,
                  color: '#F8F8F8',
                  textAlign: 'center',
                }}>
                Learn more about wallets
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 199,
  },
  modalView: {
    backgroundColor: '#333333',
    borderRadius: 24,
    paddingHorizontal: 17,
    // margin: 18,
    width: '100%',
    paddingTop: 15.11,
    paddingBottom: 19.32,
  },
});
