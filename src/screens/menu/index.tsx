import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'components';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ConnectWallet } from '@modal/connectWallet';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Menu = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />

      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About' as never);
          }}>
          <Text style={styles.menuText}>About OpenArt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('JoinCommunity' as never);
          }}>
          <Text style={styles.menuText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FAQ' as never);
          }}>
          <Text style={styles.menuText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles.marginButton}>
        <LinearGradient
          colors={['#0038F5', '#9F03FF']}
          useAngle={true}
          angle={114.44}
          style={styles.button}>
          <Text style={styles.buttonText}>Connect wallet</Text>
        </LinearGradient>
      </TouchableOpacity>
      <ConnectWallet visbile={visible} handleClose={() => setVisible(false)} />
    </SafeAreaView>
  );
};
