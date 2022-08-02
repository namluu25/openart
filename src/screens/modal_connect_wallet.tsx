/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Connect_wallet() {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    // <View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={[styles.centeredView, {marginHorizontal: 16}]}>
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 17,
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
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../assets/images/icon/close_icon.png')} />
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
              fontWeight: '500',
              lineHeight: 22,
              color: '#F8F8F8',
              paddingHorizontal: 17,
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
            style={{marginBottom: 18.35, marginHorizontal: 48.5}}>
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
        </View>
      </View>
    </Modal>
    // </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 199,
  },
  modalView: {
    backgroundColor: '#222222',
    borderRadius: 24,
    paddingTop: 15.11,
    paddingBottom: 19.32,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
