import React, { useContext } from 'react';
import {
  Modal,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  StyleProp,
  ViewProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from 'theme/globalStyle';
import styles from './styles';
import Close from '@images/icon/Close.svg';
import { ThemeContext } from '../../../hooks/context';

interface Props {
  visbile?: boolean;
  handleClose?: () => void;
}

export const ConnectWallet = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visbile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={styles(theme).centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <TouchableWithoutFeedback>
            <View style={styles(theme).modalView}>
              <View style={styles(theme).firstRow}>
                <Text style={styles(theme).textFirstRow}>Connect wallet</Text>
                <TouchableOpacity onPress={props.handleClose}>
                  <Close style={styles(theme).svg as StyleProp<ViewProps>} />
                </TouchableOpacity>
              </View>
              <Image
                style={globalStyle(theme).selfCenter}
                source={require('@images/icon/connect-wallet.png')}
              />
              <Text style={styles(theme).textSecondRow}>
                By connecting your wallet, you agree to our{' '}
                <Text style={styles(theme).textSecondRowBold}>
                  Terms of Service
                </Text>{' '}
                and our{' '}
                <Text style={styles(theme).textSecondRowBold}>
                  Privacy Policy
                </Text>
              </Text>

              <TouchableOpacity style={styles(theme).connectButton}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={globalStyle(theme).buttonRadius}>
                  <Text style={styles(theme).buttonText}>Connect wallet</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles(theme).lastRowText}>
                  Learn more about wallets
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
