import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewProps,
} from 'react-native';
import { Header, ItemContainer, ShareButton, Footer } from 'components';
import globalStyle from 'theme/globalStyle';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Copy from '@images/icon/Copy.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Card from '@images/icon/Card.svg';
import Call from '@images/icon/Call.svg';
import Mail from '@images/icon/Mail.svg';
import Edit from '@images/icon/Edit.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useFetchData, ProfileCreatedArt } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const Profile = () => {
  const { theme } = useContext(ThemeContext);
  const { profileData, profileArtData, userData } = useFetchData();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles(theme).coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <Image
            style={styles(theme).avatar}
            source={{ uri: userData.avatar }}
          />

          <Text style={styles(theme).userName}>{userData.name}</Text>
          <View
            style={[globalStyle(theme).flexRow, globalStyle(theme).selfCenter]}>
            <Text style={styles(theme).userHash}>{userData.hash}</Text>
            <TouchableOpacity style={styles(theme).copyIcon}>
              <Copy style={styles(theme).svg as StyleProp<ViewProps>} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles(theme).secondView}>
          <TouchableOpacity style={styles(theme).box}>
            <View style={styles(theme).boxInner}>
              <View
                style={[
                  globalStyle(theme).flexRow,
                  globalStyle(theme).itemCenter,
                  styles(theme).boxMargin,
                ]}>
                <Mail style={styles(theme).svg as StyleProp<ViewProps>} />
                <Text style={styles(theme).boxText}>{userData.email}</Text>
              </View>
              <View
                style={[
                  globalStyle(theme).flexRow,
                  globalStyle(theme).itemCenter,
                  styles(theme).boxMargin,
                ]}>
                <Card style={styles(theme).svg as StyleProp<ViewProps>} />
                <Text
                  style={[
                    styles(theme).boxText,
                    styles(theme).boxTextUnderline,
                  ]}>
                  Linked
                </Text>
              </View>
              <View
                style={[
                  globalStyle(theme).flexRow,
                  globalStyle(theme).itemCenter,
                  styles(theme).boxMargin,
                ]}>
                <Call style={styles(theme).svg as StyleProp<ViewProps>} />
                <Text style={styles(theme).boxText}>(+60) 264 859 62</Text>
              </View>
              <View
                style={[
                  globalStyle(theme).flexRow,
                  globalStyle(theme).itemCenter,
                ]}>
                <Link style={styles(theme).svg as StyleProp<ViewProps>} />
                <Text style={styles(theme).boxText}>OpenArt.design</Text>
              </View>
              <View
                style={[
                  globalStyle(theme).justifyCenter,
                  globalStyle(theme).flexRow,
                  styles(theme).boxButtonMargin,
                ]}>
                <TouchableOpacity style={styles(theme).followButton}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    size={24}
                    color={theme === 'light' ? 'black' : 'white'}
                  />
                  <Text style={styles(theme).followButtonText}>Follow</Text>
                </TouchableOpacity>
                <ShareButton style={styles(theme).coverButtonShare} />
                <TouchableOpacity style={styles(theme).coverButtonMenu}>
                  <More style={styles(theme).coverButtonIcon} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles(theme).followRowButton}>
                <Edit style={styles(theme).followRowButtonImage} />
              </TouchableOpacity>
              <Text style={styles(theme).memberText}>Member since 2021</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles(theme).title}>My items</Text>

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

          <TouchableOpacity style={styles(theme).loadMoreButton}>
            <Text style={styles(theme).loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
