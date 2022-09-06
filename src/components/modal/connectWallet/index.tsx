import React from 'react';
import {
  Modal,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { globalStyle } from 'theme/globalStyle';
import styles from './styles';

interface Props {
  visbile?: boolean;
  handleClose?: () => void;
}

export const ConnectWallet = (props: Props) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visbile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <View style={styles.firstRow}>
                <Text style={styles.textFirstRow}>Connect wallet</Text>
                <TouchableOpacity onPress={props.handleClose}>
                  <Image source={require('@images/icon/close-icon.png')} />
                </TouchableOpacity>
              </View>
              <Image
                style={globalStyle.selfCenter}
                source={require('@images/icon/connect-wallet-icon.png')}
              />
              <Text style={styles.textSecondRow}>
                By connecting your wallet, you agree to our{' '}
                <Text style={styles.textSecondRowBold}>Terms of Service</Text>{' '}
                and our{' '}
                <Text style={styles.textSecondRowBold}>Privacy Policy</Text>
              </Text>

              <TouchableOpacity style={styles.connectButton}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={globalStyle.buttonRadius}>
                  <Text style={styles.buttonText}>Connect wallet</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.lastRowText}>Learn more about wallets</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
