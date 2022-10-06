import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, ItemContainer, ShareButton, Footer } from 'components';
import axios from 'axios';
import { globalStyle } from 'theme/globalStyle';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Copy from '@images/icon/Copy.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Plus from '@images/icon/Plus.svg';
import Card from '@images/icon/Card.svg';
import Call from '@images/icon/Call.svg';
import Mail from '@images/icon/Mail.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Edit from '@images/icon/Edit.svg';

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

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
  hash?: string;
}

export const Profile = () => {
  const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
        setArtData(res.data[0].createdArt);
      })
      .catch(error => console.log(error));
    const subscriber = firestore()
      .collection('Users')
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        setUserData(documentSnapshot.data()!);
      });
    return () => subscriber();
  }, [userID]);
  const [userData, setUserData] = useState<DocumentData>({});
  const [apiData, setApiData] = useState<Array<Items>>([]);
  const [artData, setArtData] = useState<Array<CreatedArt>>([]);
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={{ uri: apiData[0]?.coverImage }}
          />
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
          <TouchableOpacity style={styles.box}>
            <View style={styles.boxInner}>
              <View
                style={[
                  globalStyle.flexRow,
                  globalStyle.itemCenter,
                  styles.boxMargin,
                ]}>
                <Mail />
                <Text style={styles.boxText}>{userData.email}</Text>
              </View>
              <View
                style={[
                  globalStyle.flexRow,
                  globalStyle.itemCenter,
                  styles.boxMargin,
                ]}>
                <Card />
                <Text style={[styles.boxText, styles.boxTextUnderline]}>
                  Linked
                </Text>
              </View>
              <View
                style={[
                  globalStyle.flexRow,
                  globalStyle.itemCenter,
                  styles.boxMargin,
                ]}>
                <Call />
                <Text style={styles.boxText}>(+60) 264 859 62</Text>
              </View>
              <View style={[globalStyle.flexRow, globalStyle.itemCenter]}>
                <Link />
                <Text style={styles.boxText}>OpenArt.design</Text>
              </View>
              <View
                style={[
                  globalStyle.justifyCenter,
                  globalStyle.flexRow,
                  styles.boxButtonMargin,
                ]}>
                <TouchableOpacity style={styles.followButton}>
                  <FontAwesomeIcon icon={faHeart} size={24} color={'white'} />
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
                <ShareButton style={styles.coverButtonShare} />
                <TouchableOpacity style={styles.coverButtonMenu}>
                  <More style={styles.coverButtonIcon} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.followRowButton}>
                <Edit style={styles.followRowButtonImage} />
              </TouchableOpacity>
              <Text style={styles.memberText}>Member since 2021</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>My items</Text>

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
            <Text style={styles.loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
