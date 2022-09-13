import React, { useEffect, useState } from 'react';
import {
  Modal,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import { signOut } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';

import ArrowBack from '@images/icon/ArrowBack.svg';
import Copy from '@images/icon/Copy.svg';
import Hide from '@images/icon/Hide.svg';
import Invoice from '@images/icon/Invoice.svg';
import People from '@images/icon/People.svg';
import Picture from '@images/icon/Picture.svg';
import Wallet from '@images/icon/Wallet.svg';

interface Props {
  visbile?: boolean;
  handleClose?: () => void;
}

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
  hash?: string;
}

const userID = authentication.currentUser?.uid || auth().currentUser?.uid;

export const Account = (props: Props) => {
  useEffect(() => {
    const getFirestore = async () => {
      await firestore()
        .collection('Users')
        .doc(userID)
        .get()
        .then(documentSnapshot => setUserData(documentSnapshot.data()!));
    };
    getFirestore();
  }, []);
  const [userData, setUserData] = useState<DocumentData>({});
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  const signingOut = () => {
    signOut(authentication).catch(error => console.log(error));
    auth()
      .signOut()
      .catch(error => console.log(error));
  };

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
          <TouchableWithoutFeedback>
            <View style={[styles.modalView]}>
              <View style={styles.firstRow}>
                <Image
                  style={styles.avatar}
                  source={
                    !userData.avatar
                      ? require('@images/avatar/blank.png')
                      : { uri: userData.avatar }
                  }
                />
                <View style={globalStyle.selfCenter}>
                  <Text style={styles.username}>{userData.name}</Text>
                  <View style={globalStyle.flexRow}>
                    <Text style={styles.hash}>{userData.hash}</Text>
                    <TouchableOpacity style={styles.copyIcon}>
                      <Copy />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.secondRow}>
                <TouchableOpacity style={styles.walletBorder}>
                  <Wallet style={styles.walletIcon} />
                </TouchableOpacity>
                <View style={globalStyle.flexColumn}>
                  <Text style={styles.balanceText}>Balance</Text>
                  <View style={styles.secondRowBalance}>
                    <Text style={styles.balance}>5.000 ETH</Text>
                    <TouchableOpacity>
                      <Hide style={styles.hideIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.listItem}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProfileEmpty' as never);
                    setVisibleAccount(false);
                  }}
                  style={styles.touchableLine}>
                  <People />
                  <Text style={styles.titleLine}>My account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableLine}>
                  <Picture />
                  <Text style={styles.titleLine}>My items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableLine}>
                  <Invoice />
                  <Text style={styles.titleLine}>My invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.touchableLine}
                  onPress={signingOut}>
                  <ArrowBack />
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
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
