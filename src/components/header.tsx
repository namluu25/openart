/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Account from './modal-account';
import Notification from './modal-notification';

export default function Header() {
  const navigation = useNavigation();
  const [visibleAccount, setVisibleAccount] = useState(false);
  const [visibleNotification, setVisibleNotification] = useState(false);
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16.55,
        marginBottom: 17,
        marginTop: 3,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home' as never, {} as never);
        }}>
        <Image source={require('openart/src/assets/images/icon/Logo.png')} />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => setVisibleNotification(true)}
          style={
            visibleNotification
              ? {
                  backgroundColor: '#555555',
                  marginRight: 31,
                  borderRadius: 50,
                }
              : {
                  backgroundColor: '#222222',
                  marginRight: 31,
                  borderRadius: 50,
                }
          }>
          <Image
            source={require('openart/src/assets/images/icon/notification-icon.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisibleAccount(true)}
          style={
            visibleAccount
              ? {
                  backgroundColor: '#555555',
                  marginRight: 31,
                  borderRadius: 10,
                }
              : {
                  backgroundColor: '#222222',
                  marginRight: 31,
                  borderRadius: 10,
                }
          }>
          <Image
            source={require('openart/src/assets/images/icon/people-icon.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Menu' as never, {} as never);
          }}>
          <Image source={require('openart/src/assets/images/icon/Menu.png')} />
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
}
