import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Header, ItemContainer, ShareButton, Footer } from 'components';
import { globalStyle } from 'theme/globalStyle';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Copy from '@images/icon/Copy.svg';
import Instagram from '@images/icon/Instagram.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Plus from '@images/icon/Plus.svg';
import Twitter from '@images/icon/Twitter.svg';
import { useFetchData, ProfileCreatedArt } from 'hooks/useFetchData';

export const ProfileMock = () => {
  const { profileData, profileArtData, userData } = useFetchData();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <View style={styles.buttonView}>
            {/* button */}
            <TouchableOpacity style={styles.buttonMenuBorder}>
              <More style={styles.icon} />
            </TouchableOpacity>
            <ShareButton style={styles.buttonShareBorder} />
          </View>
          <Image style={styles.avatar} source={{ uri: userData.avatar }} />

          <Text style={styles.userName}>{userData.name}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>{userData.hash}</Text>
            <TouchableOpacity style={styles.copyIcon}>
              <Copy />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondView}>
          <View>
            <View style={styles.followView}>
              <View>
                <Text style={styles.followNumber}>
                  {profileData[0]?.following}
                </Text>
                <Text style={styles.followText}>Following</Text>
              </View>

              <View>
                <Text style={styles.followNumber}>
                  {profileData[0]?.followers}
                </Text>
                <Text style={styles.followText}>Followers</Text>
              </View>

              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.listFollowTitle}>Followed by</Text>
            <View>
              <Image
                style={styles.listFollow1}
                source={require('@images/user-profile/ava-2.png')}
              />
              <Image
                style={styles.listFollow2}
                source={require('@images/user-profile/ava-3.png')}
              />
              <Image
                style={styles.listFollow3}
                source={require('@images/user-profile/ava-4.png')}
              />
              <Image
                style={styles.listFollow4}
                source={require('@images/user-profile/ava-5.png')}
              />
              <Image
                style={styles.listFollow5}
                source={require('@images/user-profile/ava-3.png')}
              />
            </View>

            <Text style={styles.userDescription}>
              {profileData[0]?.description}
            </Text>
            <Text style={styles.memberSinceText}>Member since 2021</Text>
            <View style={[globalStyle.flexRow, globalStyle.justifyStart]}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() =>
                  Linking.openURL('https://www.twitter.com/elonmusk/')
                }>
                <Twitter style={styles.socialButtonIcon} />
                <Text style={styles.socialButtonText}>@openart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/elonmusk/')
                }>
                <Instagram style={styles.socialButtonIcon} />
                <Text style={styles.socialButtonText}>@openart.design</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.socialButtonSecondRow}
              onPress={() => Linking.openURL('https://www.google.com')}>
              <Link style={styles.socialButtonIcon} />
              <Text style={styles.socialButtonText}>Openart.design</Text>
            </TouchableOpacity>
            <View style={styles.productTitleView}>
              <TouchableOpacity>
                <Text style={styles.productTitleHighlighted}>Created</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.collectedTextMargin}>
                <Text style={styles.productTitleNormal}>Collected</Text>
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
                <TouchableOpacity style={styles.productButton}>
                  <Text style={styles.productButtonTextSmall}>
                    Sold For
                    <Text style={styles.productButtonTextLarge}> 2.00 ETH</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

          <TouchableOpacity style={styles.loadMoreButton}>
            <Plus style={styles.plusIcon} />
            <Text style={styles.loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
