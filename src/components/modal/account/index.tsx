import React, { useContext, useState } from 'react';
import {
  Modal,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Switch } from 'react-native-paper';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import { signOut } from 'firebase/auth';
import ArrowBack from '@images/icon/ArrowBack.svg';
import Copy from '@images/icon/Copy.svg';
import Hide from '@images/icon/Hide.svg';
import Invoice from '@images/icon/Invoice.svg';
import People from '@images/icon/People.svg';
import Picture from '@images/icon/Picture.svg';
import Wallet from '@images/icon/Wallet.svg';
import { useFetchData } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

interface Props {
  visbile?: boolean;
  handleClose: () => void;
}

export const Account = (props: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { userData } = useFetchData();
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
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
          style={styles(theme).centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles(theme).triangle]} />
          <TouchableWithoutFeedback>
            <View style={[styles(theme).modalView]}>
              <View style={styles(theme).firstRow}>
                <Image
                  style={styles(theme).avatar}
                  source={
                    !userData.avatar
                      ? require('@images/avatar/blank.png')
                      : { uri: userData.avatar }
                  }
                />
                <View style={globalStyle(theme).selfCenter}>
                  <Text style={styles(theme).username}>{userData.name}</Text>
                  <View style={globalStyle(theme).flexRow}>
                    <Text style={styles(theme).hash}>{userData.hash}</Text>
                    <TouchableOpacity style={styles(theme).copyIcon}>
                      <Copy style={styles(theme).headerIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles(theme).secondRow}>
                <TouchableOpacity style={styles(theme).walletBorder}>
                  <Wallet style={styles(theme).walletIcon} />
                </TouchableOpacity>
                <View style={globalStyle(theme).flexColumn}>
                  <Text style={styles(theme).balanceText}>Balance</Text>
                  <View style={styles(theme).secondRowBalance}>
                    <Text style={styles(theme).balance}>5.000 ETH</Text>
                    <TouchableOpacity>
                      <Hide style={styles(theme).hideIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles(theme).listItem}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ProfileEmpty' as never);
                    props.handleClose();
                  }}
                  style={styles(theme).touchableLine}>
                  <People
                    style={styles(theme).headerIcon as StyleProp<ViewStyle>}
                  />
                  <Text style={styles(theme).titleLine}>My account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles(theme).touchableLine}>
                  <Picture
                    style={styles(theme).headerIcon as StyleProp<ViewStyle>}
                  />
                  <Text style={styles(theme).titleLine}>My items</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles(theme).touchableLine}>
                  <Invoice
                    style={styles(theme).headerIcon as StyleProp<ViewStyle>}
                  />
                  <Text style={styles(theme).titleLine}>My invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles(theme).touchableLine}
                  onPress={signingOut}>
                  <ArrowBack
                    style={styles(theme).headerIcon as StyleProp<ViewStyle>}
                  />
                  <Text style={styles(theme).titleLine}>Sign out</Text>
                </TouchableOpacity>
              </View>
              <View
                // separator line
                style={styles(theme).separatorLine}
              />
              <View style={styles(theme).lastRow}>
                <Text style={styles(theme).lastRowText}>Dark mode</Text>
                <Switch
                  style={styles(theme).switch}
                  color="#004BFB"
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
