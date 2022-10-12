import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'components';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ConnectWallet } from '@modal/connectWallet';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../../hooks/context';

export const Menu = () => {
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />

      <View style={styles(theme).menu}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('About' as never);
          }}
          style={styles(theme).textMargin}>
          <Text style={styles(theme).menuText}>About OpenArt</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('JoinCommunity' as never);
          }}
          style={styles(theme).textMargin}>
          <Text style={styles(theme).menuText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('FAQ' as never);
          }}
          style={styles(theme).textMargin}>
          <Text style={styles(theme).menuText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles(theme).textMargin}>
          <Text style={styles(theme).menuText}>Contact</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={styles(theme).marginButton}>
        <LinearGradient
          colors={['#0038F5', '#9F03FF']}
          useAngle={true}
          angle={114.44}
          style={styles(theme).button}>
          <Text style={styles(theme).buttonText}>Connect wallet</Text>
        </LinearGradient>
      </TouchableOpacity>
      <ConnectWallet visbile={visible} handleClose={() => setVisible(false)} />
    </SafeAreaView>
  );
};
