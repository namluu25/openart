import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Footer } from 'components';
import { Header } from 'components';
import styles from './styles';

export const FAQ = () => {
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles.faq}>
          <Text style={styles.title}>Frequently asked questions</Text>
          <Text style={styles.description}>
            Join our community now to get free updates and also alot of freebies
            are waiting for you or{' '}
            <Text style={styles.underlineDescription}>Contact Support</Text>
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>General</Text>
            <Image source={require('@images/icon/arrow-down-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>How does it work</Text>
            <Image source={require('@images/icon/arrow-down-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>How to start</Text>
            <Image source={require('@images/icon/arrow-down-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>How to payment</Text>
            <Image source={require('@images/icon/arrow-down-icon.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>How to bid</Text>
            <Image source={require('@images/icon/arrow-down-icon.png')} />
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
