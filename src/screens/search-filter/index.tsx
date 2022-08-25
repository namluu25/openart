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
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import Slider from '@react-native-community/slider';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';

export const SearchFilter = () => {
  const navigation = useNavigation();
  return (
    <View>
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
            <View style={styles.secondItemView}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={styles.secondGradientItemButton}>
                  <Text style={styles.secondItemButtonText}>All items</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Game</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Video</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.secondItemView}>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Animation</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Photography</Text>
              </TouchableOpacity>
            </View>
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
            <View style={styles.secondItemView}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={styles.secondGradientItemButton}>
                  <Text style={styles.secondItemButtonText}>Ethereum</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Matic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>Klaytn</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.fifthView}>
            <Text style={styles.titleItem}>Onsale in</Text>
            <View style={styles.secondItemView}>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>ETH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>WETH</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>0xBTC</Text>
              </TouchableOpacity>
            </View>
            <View style={globalStyle.flexRow}>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>1337</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondItemButton}>
                <Text style={styles.secondItemButtonText}>1MT</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.sixthView}>
            <Text style={styles.titleItem}>Creator</Text>
            <TouchableOpacity style={styles.sixthRowDropdown}>
              <Text style={styles.sixthRowDropdownText}>Verified only</Text>
              <Image
                source={require('../../assets/images/icon/arrow-down-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            // separator line
            style={styles.separatorLine}
          />
          <TouchableOpacity style={styles.resetButton}>
            <Image
              source={require('../../assets/images/icon/close-icon.png')}
            />
            <Text style={styles.resetButtonText}>Reset all filter</Text>
          </TouchableOpacity>
          <View style={styles.productView}>
            <View>
              <View style={globalStyle.container}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailSold' as never, {} as never);
                    }}>
                    <Image
                      style={globalStyle.containerImage}
                      source={require('../../assets/images/user-profile/art-1.png')}
                    />
                  </TouchableOpacity>

                  <Text style={globalStyle.containerTitle}>Silent Color</Text>
                  <View style={globalStyle.containerCreatorInfoView}>
                    <Image
                      style={globalStyle.containerAvatar}
                      source={require('openart/src/assets/images/avatar/ava1.png')}
                    />
                    <View style={globalStyle.containerCreatorNameView}>
                      <Text style={globalStyle.containerCreatorName}>
                        Pawel Czerwinski
                      </Text>
                      <Text style={globalStyle.containerCreatorInfo}>
                        Creator
                      </Text>
                    </View>
                    <Image
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.productButton}>
                <Text style={styles.productButtonTextSmall}>
                  Sold For
                  <Text style={styles.productButtonTextLarge}> 2.00 ETH</Text>
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={globalStyle.container}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailSold' as never, {} as never);
                    }}>
                    <Image
                      style={globalStyle.containerImage}
                      source={require('../../assets/images/user-profile/art-2.png')}
                    />
                  </TouchableOpacity>

                  <Text style={globalStyle.containerTitle}>George</Text>
                  <View style={globalStyle.containerCreatorInfoView}>
                    <Image
                      style={globalStyle.containerAvatar}
                      source={require('openart/src/assets/images/avatar/ava1.png')}
                    />
                    <View style={globalStyle.containerCreatorNameView}>
                      <Text style={globalStyle.containerCreatorName}>
                        Pawel Czerwinski
                      </Text>
                      <Text style={globalStyle.containerCreatorInfo}>
                        Creator
                      </Text>
                    </View>
                    <Image
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.productButton}>
                <Text style={styles.productButtonTextSmall}>
                  Sold For
                  <Text style={styles.productButtonTextLarge}> 2.00 ETH</Text>
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <View style={globalStyle.container}>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailSold' as never, {} as never);
                    }}>
                    <Image
                      style={globalStyle.containerImage}
                      source={require('../../assets/images/user-profile/art-3.png')}
                    />
                  </TouchableOpacity>

                  <Text style={globalStyle.containerTitle}>Ocean</Text>
                  <View style={globalStyle.containerCreatorInfoView}>
                    <Image
                      style={globalStyle.containerAvatar}
                      source={require('openart/src/assets/images/avatar/ava1.png')}
                    />
                    <View style={globalStyle.containerCreatorNameView}>
                      <Text style={globalStyle.containerCreatorName}>
                        Pawel Czerwinski
                      </Text>
                      <Text style={globalStyle.containerCreatorInfo}>
                        Creator
                      </Text>
                    </View>
                    <Image
                      source={require('openart/src/assets/images/icon/heart-icon.png')}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.productButton}>
                <Text style={styles.productButtonTextSmall}>
                  Sold For
                  <Text style={styles.productButtonTextLarge}> 2.00 ETH</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.loadMoreButton}>
          <Image source={require('../../assets/images/icon/plus-icon.png')} />
          <Text style={styles.loadMoreButtonText}>Load more</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </View>
  );
};
