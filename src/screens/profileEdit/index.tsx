import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { authentication } from 'firebase/firebase';
import { Items } from 'screens/profileMock';
import auth from '@react-native-firebase/auth';

export const ProfileEdit = () => {
  const [apiData, setApiData] = useState<Array<Items>>([]);
  const userFullName =
    authentication.currentUser?.displayName || auth().currentUser?.displayName;
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
            <TouchableOpacity style={styles.coverButtonMenu}>
              <Image
                style={styles.coverButtonIcon}
                source={require('@images/icon/more-icon.png')}
              />
            </TouchableOpacity>
            <ShareButton style={styles.coverButtonShare} />
          </View>
          <Image style={styles.avatar} source={{ uri: apiData[0]?.avatar }} />

          <Text style={styles.userName}>{userFullName}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>52fs5ge5g45sov45a</Text>
            <TouchableOpacity>
              <Image source={require('@images/icon/copy-icon.png')} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputView}>
          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Enter your details</Text>
            <TextInput
              style={styles.firstCategoryInputBox}
              placeholderTextColor="#FCFCFC"
              placeholder="Name"
            />
            <TextInput
              style={styles.inputBox}
              placeholderTextColor="#FCFCFC"
              placeholder="User Name"
            />
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Enter your details</Text>
            <TextInput
              style={[styles.inputBox]}
              placeholderTextColor="#FCFCFC"
              placeholder="Email"
            />
            <Text style={styles.secondCategoryText}>
              Add your email address to receive notifications about your
              activity on Foundation. This will not be shown on your profile.
            </Text>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Enter your bio</Text>
            <View>
              <TextInput
                style={styles.thirdCategoryInputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Enter your bio here"
              />
              <Image
                style={styles.thirdCategoryIcon}
                source={require('@images/icon/form-icon.png')}
              />
            </View>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Upload a profile image</Text>
            <TouchableOpacity style={styles.forthCategoryButton}>
              <Image source={require('@images/icon/picture-icon.png')} />
              <Text style={styles.forthButtonTextLarge}>
                Drag and drop or browce a file
              </Text>
              <Text style={styles.forthButtonTextSmall}>
                Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Verify your profile</Text>
            <Text style={styles.fifthDescription}>
              Show the Foundation community that your profile is authentic.
            </Text>
            <TouchableOpacity style={styles.fifthButtonTwitter}>
              <Image
                source={require('@images/icon/twitter-icon-gradient.png')}
              />
              <Text style={styles.fifthButtonText}>Verify via Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fifthButtonInstagram}>
              <Image
                source={require('@images/icon/instagram-icon-gradient.png')}
              />
              <Text style={styles.fifthButtonText}>Verify via Instagram</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>
              Add links to your social media profiles.
            </Text>
            <TouchableOpacity style={styles.sixthButton}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/link-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/discord-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/instagram-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/youtube-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Youtube channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/facebook-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButtonTiktok}>
              <Image
                style={styles.sixthButtonIcon}
                source={require('@images/icon/tiktok-icon.png')}
              />
              <Text style={styles.sixthButtonText}>Tiktok</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={globalStyle.buttonRadius}>
              <Text style={styles.saveButtonText}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View
          // separator line
          style={styles.separatorLine}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
