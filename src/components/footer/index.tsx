import React from 'react';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';

export const Footer = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require('@images/icon/logo-footer.png')}
        style={styles.logo}
      />
      <Text style={styles.slogan300}>
        The{' '}
        <Text style={styles.sloganSemiBold}>
          New{' '}
          <Text style={styles.slogan600}>
            Creative <Text style={styles.slogan700}>Economy</Text>
          </Text>
        </Text>
      </Text>
      <View style={styles.buttonView}>
        {/* button */}
        <TouchableOpacity style={styles.buttonEarnNow}>
          <LinearGradient
            colors={['#0038F5', '#9F03FF']}
            useAngle={true}
            angle={114.44}
            style={globalStyle.buttonRadius}>
            <Text style={styles.buttonText}>Earn now</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={[globalStyle.buttonRadius, styles.buttonDiscover]}
          onPress={() => {
            navigation.navigate('DiscoverCreator' as never);
          }}>
          <Text style={styles.buttonText}>Discover more</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerBottom}>
        <View style={styles.footerContact}>
          {/* info section */}
          <View>
            {/* insta */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/elonmusk/')
              }>
              <Text style={styles.aboutText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/elonmusk')}>
              <Text style={styles.aboutText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://discord.gg/MtuYEAHEnD')}>
              <Text style={styles.aboutText}>Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JoinCommunity' as never);
              }}>
              <Text style={styles.aboutText}>Blog</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoSecondColumn}>
            {/* about */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About' as never);
              }}>
              <Text style={styles.aboutText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles.aboutText}>Community Guidelines</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles.aboutText}>Terms of Services</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles.aboutText}>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://google.com')}>
              <Text style={styles.aboutText}>Careers</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FAQ' as never);
              }}>
              <Text style={styles.aboutText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={styles.separatorLine}
          // separator line
        />
        <Text style={styles.openartText}>© 2021 Openart</Text>
      </View>
    </View>
  );
};
