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
import Footer from '../../components/footer';
import Header from '../../components/header';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

export default function FAQ() {
  return (
    <View style={globalStyle.AndroidSafeArea}>
      <SafeAreaView style={globalStyle.flex}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />

        <ScrollView>
          <View style={styles.faq}>
            <Text style={styles.title}>Frequently asked questions</Text>
            <Text style={styles.description}>
              Join our community now to get free updates and also alot of
              freebies are waiting for you or{' '}
              <Text style={styles.underlineDescription}>Contact Support</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>General</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>How does it work</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>How to start</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>How to payment</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>How to bid</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>
          </View>

          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
