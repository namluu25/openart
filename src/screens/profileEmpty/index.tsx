import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Items } from 'screens/profileMock';
import { authentication } from 'firebase/config';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import Copy from '@images/icon/Copy.svg';
import Edit from '@images/icon/Edit.svg';
import More from '@images/icon/More.svg';

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
}

export const ProfileEmpty = () => {
  const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
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
  const navigation = useNavigation();
  const userFullName =
    authentication.currentUser?.displayName || auth().currentUser?.displayName;
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={{ uri: apiData[0]?.coverImage }}
          />
          <View style={styles.coverButtonView}>
            {/* button */}
            <TouchableOpacity
              style={styles.coverButtonMenu}
              onPress={() => {
                navigation.navigate('ProfileMock' as never);
              }}>
              <More style={styles.coverButtonIcon} />
            </TouchableOpacity>
            <ShareButton style={styles.coverButtonShare} />
          </View>
          <Image
            style={styles.avatar}
            source={
              !userData.avatar
                ? require('@images/avatar/blank.png')
                : { uri: userData.avatar }
            }
          />

          <Text style={styles.userName}>{userFullName}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>52fs5ge5g45sov45a</Text>
            <TouchableOpacity style={styles.copyIcon}>
              <Copy />
            </TouchableOpacity>
          </View>

          <View style={styles.followRow}>
            <View>
              <Text style={styles.followRowNumber}>150</Text>
              <Text style={styles.followRowText}>Following</Text>
            </View>
            <View style={{}}>
              <Text style={styles.followRowNumber}>2024</Text>
              <Text style={styles.followRowText}>Followers</Text>
            </View>
            <TouchableOpacity
              style={styles.followRowButton}
              onPress={() => {
                navigation.navigate('ProfileEdit' as never);
              }}>
              <Edit style={styles.followRowButtonImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles.thirdRowText}>Member since 2021</Text>
          <Text style={styles.forthRowTextLarge}>
            Your collection is empty.
          </Text>
          <Text style={styles.forthRowTextSmall}>
            Start building your collection by placing bids on artwork.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => {
            navigation.navigate('Home' as never);
          }}>
          <Text style={styles.exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
