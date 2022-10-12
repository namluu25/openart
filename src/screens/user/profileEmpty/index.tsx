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
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Copy from '@images/icon/Copy.svg';
import Edit from '@images/icon/Edit.svg';
import More from '@images/icon/More.svg';
import { useFetchData } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const ProfileEmpty = () => {
  const { theme } = useContext(ThemeContext);
  const { profileData, userData } = useFetchData();
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles(theme).coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <View style={styles(theme).coverButtonView}>
            {/* button */}
            <TouchableOpacity
              style={styles(theme).coverButtonMenu}
              onPress={() => {
                navigation.navigate('ProfileMock' as never);
              }}>
              <More style={styles(theme).coverButtonIcon} />
            </TouchableOpacity>
            <ShareButton style={styles(theme).coverButtonShare} />
          </View>
          <Image
            style={styles(theme).avatar}
            source={
              !userData.avatar
                ? require('@images/avatar/blank.png')
                : { uri: userData.avatar }
            }
          />

          <Text style={styles(theme).userName}>{userData.name}</Text>
          <View
            style={[globalStyle(theme).flexRow, globalStyle(theme).selfCenter]}>
            <Text style={styles(theme).userHash}>{userData.hash}</Text>
            <TouchableOpacity style={styles(theme).copyIcon}>
              <Copy style={styles(theme).svg as StyleProp<ViewProps>} />
            </TouchableOpacity>
          </View>

          <View style={styles(theme).followRow}>
            <View>
              <Text style={styles(theme).followRowNumber}>150</Text>
              <Text style={styles(theme).followRowText}>Following</Text>
            </View>
            <View style={{}}>
              <Text style={styles(theme).followRowNumber}>2024</Text>
              <Text style={styles(theme).followRowText}>Followers</Text>
            </View>
            <TouchableOpacity
              style={styles(theme).followRowButton}
              onPress={() => {
                navigation.navigate('ProfileEdit' as never);
              }}>
              <Edit style={styles(theme).followRowButtonImage} />
            </TouchableOpacity>
          </View>
          <Text style={styles(theme).thirdRowText}>Member since 2021</Text>
          <Text style={styles(theme).forthRowTextLarge}>
            Your collection is empty.
          </Text>
          <Text style={styles(theme).forthRowTextSmall}>
            Start building your collection by placing bids on artwork.
          </Text>
        </View>
        <TouchableOpacity
          style={styles(theme).exploreButton}
          onPress={() => {
            navigation.navigate('Home' as never);
          }}>
          <Text style={styles(theme).exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
