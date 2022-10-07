import axios from 'axios';
import { useEffect, useState } from 'react';
import { authentication } from 'firebase/config';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export interface HomeItems {
  id: number;
  name: string;
  avatar: string;
  creator_name: string;
  image: string;
  sold_state: boolean;
}
export interface ProfileItems {
  id?: number;
  name?: string;
  following?: string;
  followers?: string;
  description?: string;
  avatar?: string;
  coverImage?: string;
  hash?: string;
}

export interface ProfileCreatedArt {
  id: number;
  image: string;
  name: string;
  avatar: string;
  creatorName: string;
}

export interface CreatorItems {
  id: number;
  name: string;
  avatar: string;
  coverImage: string;
  description: string;
  followers: string;
}

interface DocumentData {
  avatar?: string;
  email?: string;
  name?: string;
  username?: string;
  hash?: string;
}

export const useFetchData = () => {
  const userID = authentication.currentUser?.uid || auth().currentUser?.uid;
  const [userData, setUserData] = useState<DocumentData>({});
  const [creatorData, setCreatorData] = useState<Array<CreatorItems>>([]);
  const [homeData, setHomeData] = useState<Array<HomeItems>>([]);
  const [profileData, setProfileData] = useState<Array<ProfileItems>>([]);
  const [profileArtData, setProfileArtData] = useState<
    Array<ProfileCreatedArt>
  >([]);
  useEffect(() => {
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/homepage')
      .then(res => {
        setHomeData(res.data);
      })
      .catch(error => console.log(error));
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/profile')
      .then(res => {
        setProfileData(res.data);
        setProfileArtData(res.data[0].createdArt);
      })
      .catch(error => console.log(error));
    axios
      .get('https://62fa6791ffd7197707ebe3f2.mockapi.io/creator')
      .then(res => {
        setCreatorData(res.data);
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
  return { homeData, profileArtData, profileData, creatorData, userData };
};
