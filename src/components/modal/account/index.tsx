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
import { Items } from 'screens/profileMock';
import axios from 'axios';
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

export const Account = (props: Props) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  const userFullName =
    authentication.currentUser?.displayName || auth().currentUser?.displayName;
  const signingOut = () => {
    signOut(authentication)
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
        console.log({ error });
      });
    auth().signOut();
  };
  const [apiData, setApiData] = useState<Array<Items>>([]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
      })
      .catch(error => console.log(error));
  }, []);
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
                  source={{ uri: apiData[0]?.avatar }}
                />
                <View style={globalStyle.selfCenter}>
                  <Text style={styles.username}>{userFullName}</Text>
                  <View style={globalStyle.flexRow}>
                    <Text style={styles.hash}>52fs5ge5g45sov45a</Text>
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
