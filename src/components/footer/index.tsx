import React, { useContext } from 'react';
import { View, TouchableOpacity, Text, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { ThemeContext } from '../../hooks/context';
import Logo from '@images/icon/Logo.svg';

export const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={[
          globalStyle().flexRow,
          globalStyle().justifyStart,
          styles().logo,
        ]}
        onPress={() => {
          navigation.navigate('Home' as never);
        }}>
        <Text style={globalStyle(theme).logoTextCap}>Open</Text>
        <Logo height={45} />
      </TouchableOpacity>
      <Text style={styles(theme).slogan300}>
        The{' '}
        <Text style={styles(theme).sloganSemiBold}>
          New{' '}
          <Text style={styles(theme).slogan600}>
            Creative <Text style={styles(theme).slogan700}>Economy</Text>
          </Text>
        </Text>
      </Text>
      <View style={styles(theme).buttonView}>
        {/* button */}
        <TouchableOpacity style={styles(theme).buttonEarnNow}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={globalStyle(theme).buttonRadius}>
            <Text style={styles(theme).buttonText}>Earn now</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            globalStyle(theme).buttonRadius,
            styles(theme).buttonDiscover,
          ]}
          onPress={() => {
            navigation.navigate('DiscoverCreator' as never);
          }}>
          <Text
            style={[styles(theme).buttonText, styles(theme).buttonTextBlack]}>
            Discover more
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles(theme).footerBottom}>
        <View style={styles(theme).footerContact}>
          {/* info section */}
          <View>
            {/* insta */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/elonmusk/')
              }>
              <Text style={styles(theme).aboutText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/elonmusk')}>
              <Text style={styles(theme).aboutText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://discord.gg/MtuYEAHEnD')}>
              <Text style={styles(theme).aboutText}>Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JoinCommunity' as never);
              }}>
              <Text style={styles(theme).aboutText}>Blog</Text>
            </TouchableOpacity>
          </View>
          <View style={styles(theme).infoSecondColumn}>
            {/* about */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About' as never);
              }}>
              <Text style={styles(theme).aboutText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles(theme).aboutText}>Community Guidelines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles(theme).aboutText}>Terms of Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles(theme).aboutText}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles(theme).aboutText}>Careers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FAQ' as never);
              }}>
              <Text style={styles(theme).aboutText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={styles(theme).separatorLine}
          // separator line
        />
        <Text style={styles(theme).openartText}>© 2021 Openart</Text>
      </View>
    </View>
  );
};
