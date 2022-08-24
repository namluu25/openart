import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Footer from '../../components/footer';
import Header from '../../components/header';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

export default function JoinCommunity() {
  return (
    <View style={globalStyle.AndroidSafeArea}>
      <SafeAreaView style={globalStyle.flex}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView style={{}}>
          <View style={styles.joinCommunity}>
            <Text style={styles.title}>
              Join the Community Upvote to access creator tools.
            </Text>
            <Text style={styles.description}>
              With the Community Upvote, artists are encouraged to support other
              artists and to set the stage for a model of community-led curation
              that puts power in the hands of creators.
            </Text>

            <TouchableOpacity>
              <LinearGradient
                colors={['#0038F5', '#9F03FF']}
                useAngle={true}
                angle={114.44}
                style={styles.button}>
                <Text style={styles.buttonText}>Join Community Upvote</Text>
              </LinearGradient>
            </TouchableOpacity>
            <Image
              style={globalStyle.selfCenter}
              source={require('../../assets/images/icon/join-community-icon.png')}
            />
            <Text style={styles.lastRowText}>
              Current number of profiles on the Community Upvote:
            </Text>
            <Text style={styles.lastRowNumber}>52.000</Text>
          </View>

          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
