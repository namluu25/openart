import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Account } from '@modal/account';
import { Notification } from '@modal/notification';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import Menu from '../../assets/images/icon/Menu.svg';
import Notifications from '@images/icon/Notifications.svg';
import People from '@images/icon/People.svg';

export const Header = () => {
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState(false);
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home' as never);
        }}>
        <Image
          source={require('@images/icon/logo-header.png')}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={[globalStyle.flexRow, globalStyle.justifyCenter]}>
        <TouchableOpacity
          onPress={() => setVisibleNotification(true)}
          style={
            visibleNotification ? styles.buttonBefore : styles.buttonAfter
          }>
          <Notifications style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleAccount(true)}
          style={visibleAccount ? styles.buttonBefore : styles.buttonAfter}>
          <People style={styles.headerIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu' as never);
          }}>
          <Menu style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
      <Account
        visbile={visibleAccount}
        handleClose={() => setVisibleAccount(false)}
      />
      <Notification
        visibile={visibleNotification}
        handleClose={() => setVisibleNotification(false)}
      />
    </View>
  );
};
