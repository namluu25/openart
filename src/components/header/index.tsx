import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Account } from '@modal/account';
import { Notification } from '@modal/notification';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import Menu from '../../assets/images/icon/Menu.svg';
import Notifications from '@images/icon/Notifications.svg';
import People from '@images/icon/People.svg';
import Logo from '@images/icon/Logo.svg';
import { ThemeContext } from '../../hooks/context';

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState(false);
  return (
    <View style={styles(theme).header}>
      <TouchableOpacity
        style={[globalStyle().flexRow, globalStyle().justifyStart]}
        onPress={() => {
          navigation.navigate('Home' as never);
        }}>
        <Text style={globalStyle(theme).logoText}>open</Text>
        <Logo height={28} />
      </TouchableOpacity>
      <View
        style={[globalStyle(theme).flexRow, globalStyle(theme).justifyCenter]}>
        <TouchableOpacity
          onPress={() => setVisibleNotification(true)}
          style={
            visibleNotification
              ? styles(theme).buttonBefore
              : styles(theme).buttonAfter
          }>
          <Notifications style={styles(theme).headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleAccount(true)}
          style={
            visibleAccount
              ? styles(theme).buttonBefore
              : styles(theme).buttonAfter
          }>
          <People style={styles(theme).headerIcon} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu' as never);
          }}>
          <Menu style={styles(theme).headerIcon} />
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
