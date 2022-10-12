import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleProp,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, ItemContainer, Footer, GradientButton } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { useFetchData, ProfileCreatedArt } from 'hooks/useFetchData';
import Slider from '@react-native-community/slider';
import styles from './styles';
import Close from '@images/icon/Close.svg';
import ArrowDown from '@images/icon/ArrowDown.svg';
import Plus from '@images/icon/Plus.svg';
import { ThemeContext } from '../../../hooks/context';

export const SearchFilter = () => {
  const { theme } = useContext(ThemeContext);
  const { profileArtData } = useFetchData();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles(theme).searchFilter}>
          <View style={styles(theme).inputBoxView}>
            <TextInput
              style={styles(theme).inputBox}
              placeholderTextColor="#888888"
              placeholder="Search item"
            />
            <TouchableOpacity style={styles(theme).searchIconButton}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={styles(theme).icon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).voiceIconButton}>
              <FontAwesomeIcon icon={faMicrophone} style={styles(theme).icon} />
            </TouchableOpacity>
          </View>
          <View style={styles(theme).secondView}>
            <Text style={styles(theme).titleItem}>Type</Text>
            <GradientButton
              value={[
                { name: 'All items' },
                { name: 'Game' },
                { name: 'Video' },
                { name: 'Animation' },
                { name: 'Photography' },
              ]}
            />
          </View>

          <View style={styles(theme).thirdView}>
            <Text style={styles(theme).titleItem}>Price range</Text>

            <Slider
              style={styles(theme).slider}
              minimumValue={0.01}
              maximumValue={100}
              minimumTrackTintColor="#0038F5"
              maximumTrackTintColor="#F0F0F0"
              step={0.2}
            />
            <View style={styles(theme).thirdRowTextView}>
              <Text style={styles(theme).thirdRowText}>0.01 ETH</Text>
              <Text style={styles(theme).thirdRowText}>100 ETH</Text>
            </View>
          </View>

          <View style={styles(theme).forthView}>
            <Text style={styles(theme).titleItem}>Chains</Text>
            <GradientButton
              value={[
                { name: 'Ethereum' },
                { name: 'Matic' },
                { name: 'Klaytn' },
              ]}
            />
          </View>

          <View style={styles(theme).fifthView}>
            <Text style={styles(theme).titleItem}>Onsale in</Text>
            <GradientButton
              value={[
                { name: 'ETH' },
                { name: 'WETH' },
                { name: '0xBTC' },
                { name: '1337' },
                { name: '1MT' },
              ]}
            />
          </View>

          <View style={styles(theme).sixthView}>
            <Text style={styles(theme).titleItem}>Creator</Text>
            <TouchableOpacity style={styles(theme).sixthRowDropdown}>
              <Text style={styles(theme).sixthRowDropdownText}>
                Verified only
              </Text>
              <ArrowDown style={styles(theme).svg as StyleProp<ViewProps>} />
            </TouchableOpacity>
          </View>
          <View
            // separator line
            style={styles(theme).separatorLine}
          />
          <TouchableOpacity style={styles(theme).resetButton}>
            <Close style={styles(theme).svg as StyleProp<ViewProps>} />
            <Text style={styles(theme).resetButtonText}>Reset all filter</Text>
          </TouchableOpacity>
          {profileArtData.map((art: ProfileCreatedArt) => {
            return (
              <View key={art.id}>
                <ItemContainer
                  image={art.image}
                  name={art.name}
                  avatar={art.avatar}
                  creator_name={art.creatorName}
                  navi={'DetailsSold'}
                />
                <TouchableOpacity style={styles(theme).productButton}>
                  <Text style={styles(theme).productButtonTextSmall}>
                    Sold For
                    <Text style={styles(theme).productButtonTextLarge}>
                      {' '}
                      2.00 ETH
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles(theme).loadMoreButton}>
          <Plus style={styles(theme).plusIcon} />
          <Text style={styles(theme).loadMoreButtonText}>Load more</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
