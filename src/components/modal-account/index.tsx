import React, { useState } from 'react';
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';

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
          style={styles.centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles.triangle]} />
          <View style={[styles.modalView]}>
            <View style={styles.firstRow}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never, {} as never);
                  setVisibleAccount(false);
                }}>
                <Image
                  style={styles.avatar}
                  source={require('../../assets/images/avatar/ava12.png')}
                />
              </TouchableOpacity>
              <View style={globalStyle.selfCenter}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('UserProfile' as never, {} as never);
                    setVisibleAccount(false);
                  }}>
                  <Text style={styles.username}>Gift Habeshaw</Text>
                </TouchableOpacity>
                <View style={globalStyle.flexRow}>
                  <TouchableOpacity>
                    <Text style={styles.hash}>52fs5ge5g45sov45a</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/icon/copy-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.secondRow}>
              <TouchableOpacity style={styles.walletBorder}>
                <Image
                  style={styles.walletIcon}
                  source={require('openart/src/assets/images/icon/wallet-icon.png')}
                />
              </TouchableOpacity>
              <View style={globalStyle.flexColumn}>
                <Text style={styles.balanceText}>Balance</Text>
                <View style={styles.secondRowBalance}>
                  <Text style={styles.balance}>5.000 ETH</Text>
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/images/icon/hide-icon.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserProfile' as never);
                  setVisibleAccount(false);
                }}
                style={styles.touchableLine}>
                <Image
                  source={require('../../assets/images/icon/people-icon.png')}
                />
                <Text style={styles.titleLine}>My account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableLine}>
                <Image
                  source={require('../../assets/images/icon/picture-icon.png')}
                />
                <Text style={styles.titleLine}>My items</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableLine}>
                <Image
                  source={require('../../assets/images/icon/invoice-icon.png')}
                />
                <Text style={styles.titleLine}>My invoice</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableLine}>
                <Image
                  source={require('../../assets/images/icon/back-arrow.png')}
                />
                <Text style={styles.titleLine}>Sign out</Text>
              </TouchableOpacity>
            </View>
            <View
              // separator line
              style={styles.separatorLine}
            />
            <View style={styles.lastRow}>
              <Text style={styles.lastRowText}>Dark mode</Text>
              <Switch
                style={styles.switch}
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
