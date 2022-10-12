import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleProp,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, Footer } from 'components';
import styles from './styles';
import ArrowDown from '@images/icon/ArrowDown.svg';
import { ThemeContext } from '../../../hooks/context';

export const FAQ = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView>
      <Header />

      <ScrollView>
        <View style={styles(theme).faq}>
          <Text style={styles(theme).title}>Frequently asked questions</Text>
          <Text style={styles(theme).description}>
            Join our community now to get free updates and also alot of freebies
            are waiting for you or{' '}
            <Text style={styles(theme).underlineDescription}>
              Contact Support
            </Text>
          </Text>
          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>General</Text>
            <ArrowDown style={styles(theme).icon as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>How does it work</Text>
            <ArrowDown style={styles(theme).icon as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>How to start</Text>
            <ArrowDown style={styles(theme).icon as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>How to payment</Text>
            <ArrowDown style={styles(theme).icon as StyleProp<ViewProps>} />
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).button}>
            <Text style={styles(theme).buttonText}>How to bid</Text>
            <ArrowDown style={styles(theme).icon as StyleProp<ViewProps>} />
          </TouchableOpacity>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
