import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import { globalStyle } from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { authentication } from 'firebase/config';
import { Items } from 'screens/profileMock';
import auth from '@react-native-firebase/auth';
import { onAuthStateChanged, updateEmail, updateProfile } from 'firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-crop-picker';
import Copy from '@images/icon/Copy.svg';
import Discord from '@images/icon/Discord.svg';
import Facebook from '@images/icon/Facebook.svg';
import Instagram from '@images/icon/Instagram.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Picture from '@images/icon/Picture.svg';
import Tiktok from '@images/icon/Tiktok.svg';
import Youtube from '@images/icon/Youtube.svg';

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
  hash?: string;
}

export const ProfileEdit = () => {
  const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setApiData(res.data);
      })
      .catch(error => console.log(error));
    firestore()
      .collection('Users')
      .doc(userID)
      .get()
      .then(documentSnapshot => {
        setUserData(documentSnapshot.data()!);
      });
    // return () => subscriber();r
  }, [userID]);
  const [userData, setUserData] = useState<DocumentData>({});
  const [apiData, setApiData] = useState<Array<Items>>([]);
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const updateInfo = () => {
    onAuthStateChanged(authentication, user => {
      if (user) {
        updateProfile(user, { displayName: name }).then(() => {
          updateEmail(user, email).then(() => {
            firestore()
              .collection('Users')
              .doc(userID)
              .update({ username, name, email, avatar })
              .then(() => {
                console.log('User updated!');
              });
            Toast.show({
              type: 'success',
              text1: 'Update successful!',
            });
            navigation.navigate('Home' as never);
          });
        });
      } else {
        auth()
          .currentUser?.updateProfile({ displayName: name })
          .then(() => {
            auth()
              .currentUser?.updateEmail(email)
              .then(() => {
                firestore()
                  .collection('Users')
                  .doc(userID)
                  .update({ username, name, email, avatar })
                  .then(() => {
                    console.log('User updated!');
                  });
                Toast.show({
                  type: 'success',
                  text1: 'Update successful!',
                });
                navigation.navigate('Home' as never);
              });
          });
      }
    });
  };
  const avatarUpload = () => {
    ImagePicker.openPicker({
      width: 390,
      height: 390,
      cropping: true,
    })
      .then(async image => {
        const imageUri = Platform.OS === 'ios' ? image.sourceURL! : image.path;
        let fileName = imageUri.substring(imageUri.lastIndexOf('/') + 1);
        fileName = userID + '-' + fileName;
        await storage().ref(fileName).putFile(imageUri);
        const url = await storage().ref(fileName).getDownloadURL();
        setAvatar(url);
        Toast.show({
          type: 'success',
          text1: 'Upload avatar successfully!',
        });
      })
      .catch(error => console.log(error));
  };
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
          <Text style={styles.userName}>{userData.name}</Text>
          <View style={[globalStyle.flexRow, globalStyle.selfCenter]}>
            <Text style={styles.userHash}>{userData.hash}</Text>
            <TouchableOpacity style={styles.copyIcon}>
              <Copy />
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
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.inputBox}
              placeholderTextColor="#FCFCFC"
              placeholder="User Name"
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Enter your details</Text>
            <TextInput
              style={[styles.inputBox]}
              placeholderTextColor="#FCFCFC"
              placeholder="Email"
              onChangeText={text => setEmail(text)}
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
                source={require('@images/icon/form.png')}
              />
            </View>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>Upload a profile image</Text>
            <TouchableOpacity
              style={styles.forthCategoryButton}
              onPress={avatarUpload}>
              <Picture />
              <Text style={styles.forthButtonTextLarge}>
                Drag and drop or browse a file
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
              <Image source={require('@images/icon/twitter-gradient.png')} />
              <Text style={styles.fifthButtonText}>Verify via Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fifthButtonInstagram}>
              <Image source={require('@images/icon/instagram-gradient.png')} />
              <Text style={styles.fifthButtonText}>Verify via Instagram</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputCategory}>
            <Text style={styles.inputTitle}>
              Add links to your social media profiles.
            </Text>
            <TouchableOpacity style={styles.sixthButton}>
              <Link style={styles.sixthButtonIcon} />
              <Text style={styles.sixthButtonText}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Discord style={styles.sixthButtonIcon} />
              <Text style={styles.sixthButtonText}>Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Instagram style={styles.sixthButtonIcon} />
              <Text style={styles.sixthButtonText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Youtube style={styles.youtubeIcon} />
              <Text style={styles.sixthButtonText}>Youtube channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButton}>
              <Facebook style={styles.sixthButtonIcon} />
              <Text style={styles.sixthButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sixthButtonTiktok}>
              <Tiktok style={styles.sixthButtonIcon} />
              <Text style={styles.sixthButtonText}>Tiktok</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={updateInfo}>
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
