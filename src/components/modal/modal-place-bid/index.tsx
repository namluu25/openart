import React from 'react';
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from '../../../theme/globalStyle';
import styles from './styles';

interface Props {
  visbile?: boolean;
  handleClose?: () => void;
}

export const PlaceBid = (props: Props) => {
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
          <View style={styles.modalView}>
            <View style={styles.firstRow}>
              <Text style={styles.textFirstRow}>Place a bid</Text>
              <TouchableOpacity onPress={props.handleClose}>
                <Image
                  source={require('../../../assets/images/icon/close-icon.png')}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textSecondRow}>
              You must bid at least 0.825 ETH
            </Text>
            <Text style={styles.textThirdRow}>Your bid</Text>
            <View
              style={[
                globalStyle.flexRow,
                globalStyle.justifyBetween,
                styles.column,
              ]}>
              <View>
                <Text style={styles.textFirstColumn}>Enter bid</Text>
                <Text style={styles.textFirstColumn}>Your balance</Text>
                <Text style={styles.textFirstColumn}>Service fee</Text>
                <Text style={styles.textFirstColumn}>Total</Text>
              </View>
              <View style={globalStyle.itemFlexEnd}>
                <Text style={styles.textSecondColumn}>ETH</Text>
                <Text style={styles.textSecondColumn}>4.568 ETH</Text>
                <Text style={styles.textSecondColumn}>0.001 ETH</Text>
                <Text style={styles.textSecondColumn}>0.001 ETH</Text>
              </View>
            </View>
            <TouchableOpacity>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={[styles.gradientButton, globalStyle.buttonRadius]}>
                <Text style={styles.textButton}>Place a bid</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.normalButton, globalStyle.buttonRadius]}
              onPress={props.handleClose}>
              <Text style={styles.textButton}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
