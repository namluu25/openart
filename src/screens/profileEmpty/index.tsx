import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header } from 'components';
import { Footer } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Items } from 'screens/profileMock';
import { authentication } from 'firebase/firebase';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export const ProfileEmpty = () => {
  const navigation = useNavigation();
  const userEmail = authentication.currentUser?.email;
  const [apiData, setApiData] = useState<Array<Items>>([]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
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
          <View style={styles.coverButtonView}>
            {/* button */}
            <TouchableOpacity
              style={styles.coverButtonMenu}
              onPress={() => {
                navigation.navigate('ProfileMock' as never, {} as never);
              }}>
              <Image
                style={styles.coverButtonIcon}
                source={require('@images/icon/more-icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.coverButtonShare}>
              <Image
                style={styles.coverButtonIcon}
                source={require('@images/icon/export-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <Image style={styles.avatar} source={{ uri: apiData[0]?.avatar }} />

          <Text style={styles.userName}>{userEmail}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>52fs5ge5g45sov45a</Text>
            <TouchableOpacity>
              <Image source={require('@images/icon/copy-icon.png')} />
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
                navigation.navigate('ProfileEdit' as never, {} as never);
              }}>
              <Image
                style={styles.followRowButtonImage}
                source={require('@images/icon/edit-icon.png')}
              />
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
            navigation.navigate('Home' as never, {} as never);
          }}>
          <Text style={styles.exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
