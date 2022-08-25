import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from './styles';
import globalStyle from '../../theme/globalStyle';

export const ProfileEmpty = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={require('../../assets/images/profile/cover.png')}
          />
          <View style={styles.coverButtonView}>
            {/* button */}
            <TouchableOpacity style={styles.coverButtonMenu}>
              <Image
                style={styles.coverButtonIcon}
                source={require('openart/src/assets/images/icon/more-icon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.coverButtonShare}>
              <Image
                style={styles.coverButtonIcon}
                source={require('openart/src/assets/images/icon/export-icon.png')}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/profile/ava.png')}
          />

          <Text style={styles.userName}>Gift Habeshaw</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>52fs5ge5g45sov45a</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/icon/copy-icon.png')}
              />
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
            <TouchableOpacity style={styles.followRowButton}>
              <Image
                style={styles.followRowButtonImage}
                source={require('../../assets/images/icon/edit-icon.png')}
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
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </View>
  );
};
