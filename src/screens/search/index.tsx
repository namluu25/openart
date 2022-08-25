import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';

export const SearchPopup = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <ScrollView style={styles.searchPopup}>
        <View
          style={[
            globalStyle.flexRow,
            globalStyle.itemCenter,
            globalStyle.justifyBetween,
          ]}>
          {/* first row */}
          <View style={styles.inputBoxView}>
            <TextInput
              style={styles.inputBox}
              placeholderTextColor="#FCFCFC"
              placeholder=" "
              autoFocus={true}
            />
            <TouchableOpacity style={styles.seachIconButton}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeIconButton}>
              <FontAwesomeIcon icon={faXmark} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home' as never, {} as never);
            }}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.secondRowView}>
          <Text style={styles.itemTitle}>People</Text>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/ava1.png')} />
            <View style={styles.secondRowItemTextView}>
              <Text style={styles.itemTextLarge}>Microsoft</Text>
              <Text style={styles.itemTextSmall}>@art</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/ava2.png')} />
            <View style={styles.secondRowItemTextView}>
              <Text style={styles.itemTextLarge}>Marbella the Frenchie</Text>
              <Text style={styles.itemTextSmall}>@frenchies</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/ava3.png')} />
            <View style={styles.secondRowItemTextView}>
              <Text style={styles.itemTextLarge}>Oliver</Text>
              <Text style={styles.itemTextSmall}>@oliver</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.itemTitle}>Items</Text>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/image1.png')} />
            <View style={styles.thirdRowItemTextView}>
              <Text style={styles.itemTextLarge}>Epic: Fight (1/4) (2009)</Text>
              <Text style={styles.itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/image2.png')} />
            <View style={styles.thirdRowItemTextView}>
              <Text style={styles.itemTextLarge}>Chamomile LTR (2021)</Text>
              <Text style={styles.itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Image source={require('../../assets/images/search/image3.png')} />
            <View style={styles.thirdRowItemTextView}>
              <Text style={styles.itemTextLarge}>Bliss (2021)</Text>
              <Text style={styles.itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
