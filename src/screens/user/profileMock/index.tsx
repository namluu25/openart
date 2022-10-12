import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
  StyleProp,
  ViewProps,
} from 'react-native';
import { Header, ItemContainer, ShareButton, Footer } from 'components';
import globalStyle from 'theme/globalStyle';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Copy from '@images/icon/Copy.svg';
import Instagram from '@images/icon/Instagram.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Plus from '@images/icon/Plus.svg';
import Twitter from '@images/icon/Twitter.svg';
import { useFetchData, ProfileCreatedArt } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const ProfileMock = () => {
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
          <View style={styles(theme).buttonView}>
            {/* button */}
            <TouchableOpacity style={styles(theme).buttonMenuBorder}>
              <More style={styles(theme).icon} />
            </TouchableOpacity>
            <ShareButton style={styles(theme).buttonShareBorder} />
          </View>
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
          <View>
            <View style={styles(theme).followView}>
              <View>
                <Text style={styles(theme).followNumber}>
                  {profileData[0]?.following}
                </Text>
                <Text style={styles(theme).followText}>Following</Text>
              </View>

              <View>
                <Text style={styles(theme).followNumber}>
                  {profileData[0]?.followers}
                </Text>
                <Text style={styles(theme).followText}>Followers</Text>
              </View>

              <TouchableOpacity style={styles(theme).followButton}>
                <Text style={styles(theme).followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles(theme).listFollowTitle}>Followed by</Text>
            <View>
              <Image
                style={styles(theme).listFollow1}
                source={require('@images/user-profile/ava-2.png')}
              />
              <Image
                style={styles(theme).listFollow2}
                source={require('@images/user-profile/ava-3.png')}
              />
              <Image
                style={styles(theme).listFollow3}
                source={require('@images/user-profile/ava-4.png')}
              />
              <Image
                style={styles(theme).listFollow4}
                source={require('@images/user-profile/ava-5.png')}
              />
              <Image
                style={styles(theme).listFollow5}
                source={require('@images/user-profile/ava-3.png')}
              />
            </View>

            <Text style={styles(theme).userDescription}>
              {profileData[0]?.description}
            </Text>
            <Text style={styles(theme).memberSinceText}>Member since 2021</Text>
            <View
              style={[
                globalStyle(theme).flexRow,
                globalStyle(theme).justifyStart,
              ]}>
              <TouchableOpacity
                style={styles(theme).socialButton}
                onPress={() =>
                  Linking.openURL('https://www.twitter.com/elonmusk/')
                }>
                <Twitter style={styles(theme).socialButtonIcon} />
                <Text style={styles(theme).socialButtonText}>@openart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles(theme).socialButton}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/elonmusk/')
                }>
                <Instagram style={styles(theme).socialButtonIcon} />
                <Text style={styles(theme).socialButtonText}>
                  @openart.design
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles(theme).socialButtonSecondRow}
              onPress={() => Linking.openURL('https://www.google.com')}>
              <Link style={styles(theme).socialButtonIcon} />
              <Text style={styles(theme).socialButtonText}>Openart.design</Text>
            </TouchableOpacity>
            <View style={styles(theme).productTitleView}>
              <TouchableOpacity>
                <Text style={styles(theme).productTitleHighlighted}>
                  Created
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles(theme).collectedTextMargin}>
                <Text style={styles(theme).productTitleNormal}>Collected</Text>
              </TouchableOpacity>
            </View>
          </View>

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
            <Plus style={styles(theme).plusIcon} />
            <Text style={styles(theme).loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
