import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Header from '../../components/header';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Connect_wallet from '../../components/modal-connect-wallet';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

export default function Menu() {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={globalStyle.AndroidSafeArea}>
      <SafeAreaView style={globalStyle.flex}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('About' as never, {} as never);
            }}>
            <Text style={styles.menuText}>About OpenArt</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('JoinCommunity' as never, {} as never);
            }}>
            <Text style={styles.menuText}>Blog</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FAQ' as never, {} as never);
            }}>
            <Text style={styles.menuText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={styles.button}>
            <Text style={styles.buttonText}>Connect wallet</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Connect_wallet
          visbile={visible}
          handleClose={() => setVisible(false)}
        />
      </SafeAreaView>
    </View>
  );
}
