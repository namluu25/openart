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

export default function BidPopup(props: Props) {
  // const [modalVisible, setModalVisible] = useState(true);
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
            {padding: 18, backgroundColor: 'rgba(0,0,0,0.5)'},
          ]}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 3.96,
              }}>
              <Text
                style={{
                  fontFamily: 'Epilogue',
                  fontSize: 24,
                  fontWeight: '700',
                  lineHeight: 32,
                  color: '#FCFCFC',
                }}>
                Place a bid
              </Text>
              <TouchableOpacity onPress={props.handleClose}>
                <Image
                  source={require('../assets/images/icon/close_icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: 22,
                color: '#F8F8F8',
                marginBottom: 41.98,
              }}>
              You must bid at least 0.825 ETH
            </Text>
            <Text
              style={{
                fontFamily: 'Epilogue',
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 24,
                color: '#FCFCFC',
                marginBottom: 8.43,
              }}>
              Your bid
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{marginBottom: 30}}>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  Enter bid
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  Your balance
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  Service fee
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '400',
                    lineHeight: 22,
                    color: '#FCFCFC',
                  }}>
                  Total
                </Text>
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  ETH
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  4.568 ETH
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#FCFCFC',
                    marginBottom: 6,
                  }}>
                  0.001 ETH
                </Text>
                <Text
                  style={{
                    fontFamily: 'Epilogue',
                    fontSize: 16,
                    fontWeight: '700',
                    lineHeight: 22,
                    color: '#FCFCFC',
                  }}>
                  0.001 ETH
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{marginBottom: 16}}>
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
                borderColor: '#FCFCFC',
                borderWidth: 1,
              }}
              onPress={props.handleClose}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Epilogue',
                  textAlign: 'center',
                  padding: 15,
                  color: '#FCFCFC',
                  fontWeight: '700',
                }}>
                Cancel
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
    paddingHorizontal: 18,
    // margin: 18,
    width: '100%',
    paddingTop: 18.44,
    paddingBottom: 32.4,
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
