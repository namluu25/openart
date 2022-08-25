import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header } from 'components';
import { Footer } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileEmpty = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={styles.coverImage}
            source={require('@images/profile/cover.png')}
          />
          <View style={styles.coverButtonView}>
            {/* button */}
            <TouchableOpacity style={styles.coverButtonMenu}>
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
          <Image
            style={styles.avatar}
            source={require('@images/profile/ava.png')}
          />

          <Text style={styles.userName}>Gift Habeshaw</Text>
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
            <TouchableOpacity style={styles.followRowButton}>
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
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Explore OpenArt</Text>
        </TouchableOpacity>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
