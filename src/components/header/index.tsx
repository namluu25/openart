import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Account } from '@modal/account';
import { Notification } from '@modal/notification';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';

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
        <Image source={require('@images/icon/Logo.png')} />
      </TouchableOpacity>
      <View style={globalStyle.flexRow}>
        <TouchableOpacity
          onPress={() => setVisibleNotification(true)}
          style={
            visibleNotification ? styles.buttonBefore : styles.buttonAfter
          }>
          <Image source={require('@images/icon/notification-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleAccount(true)}
          style={visibleAccount ? styles.buttonBefore : styles.buttonAfter}>
          <Image source={require('@images/icon/people-icon.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu' as never);
          }}>
          <Image source={require('@images/icon/Menu.png')} />
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
