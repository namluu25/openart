import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Header, ItemContainer } from 'components';
import { Footer } from 'components';
import axios from 'axios';
import { globalStyle } from 'theme/globalStyle';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from 'firebase/firebase';
import auth from '@react-native-firebase/auth';

export interface Items {
  id?: number;
  name?: string;
  following?: string;
  followers?: string;
  description?: string;
  avatar?: string;
  coverImage?: string;
  hash?: string;
}

export interface CreatedArt {
  id: number;
  image: string;
  name: string;
  avatar: string;
  creatorName: string;
}

export const ProfileMock = () => {
  const userEmail =
    authentication.currentUser?.email || auth().currentUser?.email;
  const [apiData, setApiData] = useState<Array<Items>>([]);
  const [artData, setArtData] = useState<Array<CreatedArt>>([]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
        setArtData(res.data[0].createdArt);
      })
      .catch(error => console.log(error));
  }, []);
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={{ uri: apiData[0]?.coverImage }}
          />
          <View style={styles.buttonView}>
            {/* button */}
            <TouchableOpacity style={styles.buttonMenuBorder}>
              <Image
                style={styles.icon}
                source={require('@images/icon/more-icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonShareBorder}>
              <Image
                style={styles.icon}
                source={require('@images/icon/export-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <Image style={styles.avatar} source={{ uri: apiData[0]?.avatar }} />

          <Text style={styles.userName}>{userEmail}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>{apiData[0]?.hash}</Text>
            <TouchableOpacity>
              <Image source={require('@images/icon/copy-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.secondView}>
          <View>
            <View style={styles.followView}>
              <View>
                <Text style={styles.followNumber}>{apiData[0]?.following}</Text>
                <Text style={styles.followText}>Following</Text>
              </View>

              <View>
                <Text style={styles.followNumber}>{apiData[0]?.followers}</Text>
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
              {apiData[0]?.description}
            </Text>
            <Text style={styles.memberSinceText}>Member since 2021</Text>
            <View style={[globalStyle.flexRow, globalStyle.justifyStart]}>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() =>
                  Linking.openURL('https://www.twitter.com/elonmusk/')
                }>
                <Image
                  style={styles.socialButtonIcon}
                  source={require('@images/icon/twitter-icon.png')}
                />
                <Text style={styles.socialButtonText}>@openart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.socialButton}
                onPress={() =>
                  Linking.openURL('https://www.instagram.com/elonmusk/')
                }>
                <Image
                  style={styles.socialButtonIcon}
                  source={require('@images/icon/instagram-icon.png')}
                />
                <Text style={styles.socialButtonText}>@openart.design</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.socialButtonSecondRow}
              onPress={() => Linking.openURL('https://www.google.com')}>
              <Image
                style={styles.socialButtonIcon}
                source={require('@images/icon/link-icon.png')}
              />
              <Text style={styles.socialButtonText}>Openart.design</Text>
            </TouchableOpacity>
            <View style={styles.productTitleView}>
              <TouchableOpacity>
                <Text style={styles.productTitleHighlighted}>Created</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.productTitleNormal}>Collected</Text>
              </TouchableOpacity>
            </View>
          </View>

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

          <TouchableOpacity style={styles.loadMoreButton}>
            <Image source={require('@images/icon/plus-icon.png')} />
            <Text style={styles.loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
