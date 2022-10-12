import React, { useContext } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Footer } from 'components';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { ThemeContext } from '../../../hooks/context';

export const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View>
          <View
            style={[globalStyle(theme).flex, globalStyle(theme).itemCenter]}>
            <Text style={styles(theme).titleText}>About OpenArt</Text>
            <Image source={require('@images/icon/about-1.png')} />
            <Text style={styles(theme).firstParagraph}>
              OpenArt help anyone create a beautiful website, landing page, app
              to collect NFTs digital art
            </Text>
          </View>
          <Text style={styles(theme).secondParagraph}>
            NFTs—non-fungible tokens—are empowering artists, musicians, and all
            kinds of genre-defying digital creators to invent a new cultural
            paradigm. How this emerging culture of digital art ownership looks
            is up to all of us.
          </Text>
          <View style={styles(theme).secondView}>
            <Text style={styles(theme).secondTitle}>How it work</Text>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).justifyBetween,
              ]}>
              <View style={styles(theme).boxView}>
                <Image
                  style={styles(theme).boxImage1}
                  source={require('@images/icon/about-2.png')}
                />
                <Text style={styles(theme).boxText}>Build together</Text>
              </View>
              <View style={styles(theme).boxView}>
                <Image
                  style={styles(theme).boxImage}
                  source={require('@images/icon/about-3.png')}
                />
                <Text style={styles(theme).boxText}>Trust</Text>
              </View>
            </View>
          </View>
          <View style={styles(theme).thirdView}>
            <Text style={styles(theme).thirdTitleText}>For Creators</Text>
            <Text style={styles(theme).thirdParagraph}>
              Creators are invited to join Foundation by members of the
              community. Once you’ve received an invite, you’ll need to set up a
              MetaMask wallet with ETH before you can create an artist profile
              and mint an NFT—which means uploading your JPG, PNG, or video file
              to IPFS, a decentralized peer-to-peer storage network. It will
              then be an NFT you can price in ETH and put up for auction on
              Foundation.
            </Text>
            <Text style={styles(theme).thirdTitleText}>For Collectors</Text>
            <Text style={styles(theme).thirdParagraph}>
              On Foundation, anyone can create a profile to start collecting
              NFTs. All you’ll need is a MetaMask wallet and ETH, the
              cryptocurrency used to pay for all transactions on Ethereum.
              Artists list NFTs for auction at a reserve price, and once the
              first bid is placed, a 24-hour auction countdown begins. If a bid
              is placed within the last 15 minutes, the auction extends for
              another 15 minutes.
            </Text>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
