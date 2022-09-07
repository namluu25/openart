import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header, ItemContainer, Footer, GradientButton } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Slider from '@react-native-community/slider';
import styles from './styles';
import axios from 'axios';
import { CreatedArt } from 'screens/profileMock';

export const SearchFilter = () => {
  const [artData, setArtData] = useState<Array<CreatedArt>>([]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setArtData(res.data[0].createdArt);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View style={styles.searchFilter}>
          <View style={styles.inputBoxView}>
            <TextInput
              style={styles.inputBox}
              placeholderTextColor="#888888"
              placeholder="Search item"
            />
            <TouchableOpacity style={styles.searchIconButton}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.voiceIconButton}>
              <FontAwesomeIcon icon={faMicrophone} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.secondView}>
            <Text style={styles.titleItem}>Type</Text>
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

          <View style={styles.thirdView}>
            <Text style={styles.titleItem}>Price range</Text>

            <Slider
              style={styles.slider}
              minimumValue={0.01}
              maximumValue={100}
              minimumTrackTintColor="#0038F5"
              maximumTrackTintColor="#F0F0F0"
              step={0.2}
              // value=
            />
            <View style={styles.thirdRowTextView}>
              <Text style={styles.thirdRowText}>0.01 ETH</Text>
              <Text style={styles.thirdRowText}>100 ETH</Text>
            </View>
          </View>

          <View style={styles.forthView}>
            <Text style={styles.titleItem}>Chains</Text>
            <GradientButton
              value={[
                { name: 'Ethereum' },
                { name: 'Matic' },
                { name: 'Klaytn' },
              ]}
            />
          </View>

          <View style={styles.fifthView}>
            <Text style={styles.titleItem}>Onsale in</Text>
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

          <View style={styles.sixthView}>
            <Text style={styles.titleItem}>Creator</Text>
            <TouchableOpacity style={styles.sixthRowDropdown}>
              <Text style={styles.sixthRowDropdownText}>Verified only</Text>
              <Image source={require('@images/icon/arrow-down-icon.png')} />
            </TouchableOpacity>
          </View>
          <View
            // separator line
            style={styles.separatorLine}
          />
          <TouchableOpacity style={styles.resetButton}>
            <Image source={require('@images/icon/close-icon.png')} />
            <Text style={styles.resetButtonText}>Reset all filter</Text>
          </TouchableOpacity>
          {artData.map((art: CreatedArt) => {
            return (
              <View key={art.id}>
                <ItemContainer
                  image={art.image}
                  name={art.name}
                  avatar={art.avatar}
                  creator_name={art.creatorName}
                  navi={'DetailsSold'}
                />
                <TouchableOpacity style={styles.productButton}>
                  <Text style={styles.productButtonTextSmall}>
                    Sold For
                    <Text style={styles.productButtonTextLarge}> 2.00 ETH</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <TouchableOpacity style={styles.loadMoreButton}>
          <Image source={require('@images/icon/plus-icon.png')} />
          <Text style={styles.loadMoreButtonText}>Load more</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
