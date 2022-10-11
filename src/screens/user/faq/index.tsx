import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Footer } from 'components';
import styles from './styles';
import ArrowDown from '@images/icon/ArrowDown.svg';

export const FAQ = () => {
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles().faq}>
          <Text style={styles().title}>Frequently asked questions</Text>
          <Text style={styles().description}>
            Join our community now to get free updates and also alot of freebies
            are waiting for you or{' '}
            <Text style={styles().underlineDescription}>Contact Support</Text>
          </Text>
          <TouchableOpacity style={styles().button}>
            <Text style={styles().buttonText}>General</Text>
            <ArrowDown />
          </TouchableOpacity>

          <TouchableOpacity style={styles().button}>
            <Text style={styles().buttonText}>How does it work</Text>
            <ArrowDown />
          </TouchableOpacity>

          <TouchableOpacity style={styles().button}>
            <Text style={styles().buttonText}>How to start</Text>
            <ArrowDown />
          </TouchableOpacity>

          <TouchableOpacity style={styles().button}>
            <Text style={styles().buttonText}>How to payment</Text>
            <ArrowDown />
          </TouchableOpacity>

          <TouchableOpacity style={styles().button}>
            <Text style={styles().buttonText}>How to bid</Text>
            <ArrowDown />
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
