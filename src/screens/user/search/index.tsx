import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'components';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faMagnifyingGlass,
  faXmark,
  faFilter,
} from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../../hooks/context';

export const SearchPopup = () => {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles(theme).searchPopup}>
        <View
          style={[
            globalStyle(theme).flexRow,
            globalStyle(theme).itemCenter,
            globalStyle(theme).justifyBetween,
          ]}>
          {/* first row */}
          <View style={styles(theme).inputBoxView}>
            <TextInput
              style={styles(theme).inputBox}
              placeholderTextColor="#FCFCFC"
              placeholder=" "
              autoFocus={true}
              value={search}
              onChangeText={setSearch}
            />
            <TouchableOpacity style={styles(theme).seachIconButton}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={styles(theme).icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles(theme).closeIconButton}
              onPress={() => setSearch('')}>
              <FontAwesomeIcon icon={faXmark} style={styles(theme).icon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SearchFilter' as never);
            }}>
            <FontAwesomeIcon icon={faFilter} style={styles(theme).icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home' as never);
            }}>
            <Text style={styles(theme).cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles(theme).secondRowView}>
          <Text style={styles(theme).itemTitle}>People</Text>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/ava1.png')} />
            <View style={styles(theme).secondRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>Microsoft</Text>
              <Text style={styles(theme).itemTextSmall}>@art</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/ava2.png')} />
            <View style={styles(theme).secondRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>
                Marbella the Frenchie
              </Text>
              <Text style={styles(theme).itemTextSmall}>@frenchies</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/ava3.png')} />
            <View style={styles(theme).secondRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>Oliver</Text>
              <Text style={styles(theme).itemTextSmall}>@oliver</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles(theme).itemTitle}>Items</Text>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/image1.png')} />
            <View style={styles(theme).thirdRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>
                Epic: Fight (1/4) (2009)
              </Text>
              <Text style={styles(theme).itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/image2.png')} />
            <View style={styles(theme).thirdRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>
                Chamomile LTR (2021)
              </Text>
              <Text style={styles(theme).itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles(theme).item}>
            <Image source={require('@images/search/image3.png')} />
            <View style={styles(theme).thirdRowItemTextView}>
              <Text style={styles(theme).itemTextLarge}>Bliss (2021)</Text>
              <Text style={styles(theme).itemTextSmall}>@lovetherobot</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
