import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  StyleProp,
  ViewProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Header, ShareButton, Footer } from 'components';
import styles from './styles';
import globalStyle from 'theme/globalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authentication } from 'firebase/config';
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
import { useFetchData } from 'hooks/useFetchData';
import { ThemeContext } from '../../../hooks/context';

export const ProfileEdit = () => {
  const { theme } = useContext(ThemeContext);
  const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
  const { profileData, userData } = useFetchData();
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
            style={styles(theme).coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <View style={styles(theme).coverButtonView}>
            {/* button */}
            <TouchableOpacity style={styles(theme).coverButtonMenu}>
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
        </View>

        <View style={styles(theme).inputView}>
          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>Enter your details</Text>
            <TextInput
              style={styles(theme).firstCategoryInputBox}
              placeholderTextColor="#FCFCFC"
              placeholder="Name"
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles(theme).inputBox}
              placeholderTextColor="#FCFCFC"
              placeholder="User Name"
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>Enter your details</Text>
            <TextInput
              style={[styles(theme).inputBox]}
              placeholderTextColor="#FCFCFC"
              placeholder="Email"
              onChangeText={text => setEmail(text)}
            />
            <Text style={styles(theme).secondCategoryText}>
              Add your email address to receive notifications about your
              activity on Foundation. This will not be shown on your profile.
            </Text>
          </View>

          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>Enter your bio</Text>
            <View>
              <TextInput
                style={styles(theme).thirdCategoryInputBox}
                placeholderTextColor="#FCFCFC"
                placeholder="Enter your bio here"
              />
              <Image
                style={styles(theme).thirdCategoryIcon}
                source={require('@images/icon/form.png')}
              />
            </View>
          </View>

          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>Upload a profile image</Text>
            <TouchableOpacity
              style={styles(theme).forthCategoryButton}
              onPress={avatarUpload}>
              <Picture />
              <Text style={styles(theme).forthButtonTextLarge}>
                Drag and drop or browse a file
              </Text>
              <Text style={styles(theme).forthButtonTextSmall}>
                Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>Verify your profile</Text>
            <Text style={styles(theme).fifthDescription}>
              Show the Foundation community that your profile is authentic.
            </Text>
            <TouchableOpacity style={styles(theme).fifthButtonTwitter}>
              <Image source={require('@images/icon/twitter-gradient.png')} />
              <Text style={styles(theme).fifthButtonText}>
                Verify via Twitter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).fifthButtonInstagram}>
              <Image source={require('@images/icon/instagram-gradient.png')} />
              <Text style={styles(theme).fifthButtonText}>
                Verify via Instagram
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles(theme).inputCategory}>
            <Text style={styles(theme).inputTitle}>
              Add links to your social media profiles.
            </Text>
            <TouchableOpacity style={styles(theme).sixthButton}>
              <Link style={styles(theme).sixthButtonIcon} />
              <Text style={styles(theme).sixthButtonText}>Website</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).sixthButton}>
              <Discord style={styles(theme).sixthButtonIcon} />
              <Text style={styles(theme).sixthButtonText}>Discord</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).sixthButton}>
              <Instagram style={styles(theme).sixthButtonIcon} />
              <Text style={styles(theme).sixthButtonText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).sixthButton}>
              <Youtube style={styles(theme).youtubeIcon} />
              <Text style={styles(theme).sixthButtonText}>Youtube channel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).sixthButton}>
              <Facebook style={styles(theme).sixthButtonIcon} />
              <Text style={styles(theme).sixthButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles(theme).sixthButtonTiktok}>
              <Tiktok style={styles(theme).sixthButtonIcon} />
              <Text style={styles(theme).sixthButtonText}>Tiktok</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={updateInfo}>
            <LinearGradient
              colors={['#0038F5', '#9F03FF']}
              useAngle={true}
              angle={114.44}
              style={globalStyle(theme).buttonRadius}>
              <Text style={styles(theme).saveButtonText}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View
          // separator line
          style={styles(theme).separatorLine}
        />

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
