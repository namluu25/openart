import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Copy from '@images/icon/Copy.svg';
import Edit from '@images/icon/Edit.svg';
import More from '@images/icon/More.svg';
import { useFetchData } from 'hooks/useFetchData';

export const ProfileEmpty = () => {
  const { profileData, userData } = useFetchData();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles().coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <View style={styles().coverButtonView}>
            {/* button */}
            <TouchableOpacity
              style={styles().coverButtonMenu}
              onPress={() => {
                navigation.navigate('ProfileMock' as never);
              }}>
              <More style={styles().coverButtonIcon} />
            </TouchableOpacity>
            <ShareButton style={styles().coverButtonShare} />
          </View>
          <Image
            style={styles().avatar}
            source={
              !userData.avatar
                ? require('@images/avatar/blank.png')
                : { uri: userData.avatar }
            }
          />

          <Text style={styles().userName}>{userData.name}</Text>
          <View style={[globalStyle().flexRow, globalStyle().selfCenter]}>
            <Text style={styles().userHash}>{userData.hash}</Text>
            <TouchableOpacity style={styles().copyIcon}>
              <Copy />
            </TouchableOpacity>
          </View>

          <View style={styles().followRow}>
            <View>
              <Text style={styles().followRowNumber}>150</Text>
              <Text style={styles().followRowText}>Following</Text>
            </View>
            <View style={{}}>
              <Text style={styles().followRowNumber}>2024</Text>
              <Text style={styles().followRowText}>Followers</Text>
            </View>
            <TouchableOpacity
              style={styles().followRowButton}
              onPress={() => {
                navigation.navigate('ProfileEdit' as never);
              }}>
              <Edit style={styles().followRowButtonImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles().thirdRowText}>Member since 2021</Text>
          <Text style={styles().forthRowTextLarge}>
            Your collection is empty.
          </Text>
          <Text style={styles().forthRowTextSmall}>
            Start building your collection by placing bids on artwork.
          </Text>
        </View>
        <TouchableOpacity
          style={styles().exploreButton}
          onPress={() => {
            navigation.navigate('Home' as never);
          }}>
          <Text style={styles().exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
