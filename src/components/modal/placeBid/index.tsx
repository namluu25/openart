import React, { useContext } from 'react';
import {
  Modal,
  Text,
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

export const PlaceBid = (props: Props) => {
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
                <Text style={styles(theme).textFirstRow}>Place a bid</Text>
                <TouchableOpacity onPress={props.handleClose}>
                  <Close style={styles(theme).svg as StyleProp<ViewProps>} />
                </TouchableOpacity>
              </View>
              <Text style={styles(theme).textSecondRow}>
                You must bid at least 0.825 ETH
              </Text>
              <Text style={styles(theme).textThirdRow}>Your bid</Text>
              <View
                style={[
                  globalStyle(theme).flexRow,
                  globalStyle(theme).justifyBetween,
                  styles(theme).column,
                ]}>
                <View>
                  <Text style={styles(theme).textFirstColumn}>Enter bid</Text>
                  <Text style={styles(theme).textFirstColumn}>
                    Your balance
                  </Text>
                  <Text style={styles(theme).textFirstColumn}>Service fee</Text>
                  <Text style={styles(theme).textFirstColumn}>Total</Text>
                </View>
                <View style={globalStyle(theme).itemEnd}>
                  <Text style={styles(theme).textSecondColumn}>ETH</Text>
                  <Text style={styles(theme).textSecondColumn}>4.568 ETH</Text>
                  <Text style={styles(theme).textSecondColumn}>0.001 ETH</Text>
                  <Text style={styles(theme).textSecondColumn}>0.001 ETH</Text>
                </View>
              </View>
              <TouchableOpacity style={styles(theme).gradientButton}>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={globalStyle(theme).buttonRadius}>
                  <Text style={styles(theme).textButton}>Place a bid</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles(theme).normalButton,
                  globalStyle(theme).buttonRadius,
                ]}
                onPress={props.handleClose}>
                <Text
                  style={[
                    styles(theme).textButton,
                    styles(theme).textButtonDark,
                  ]}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
