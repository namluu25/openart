import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Header, ItemContainer, ShareButton, Footer } from 'components';
import globalStyle from 'theme/globalStyle';
import { Styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Copy from '@images/icon/Copy.svg';
import Link from '@images/icon/Link.svg';
import More from '@images/icon/More.svg';
import Card from '@images/icon/Card.svg';
import Call from '@images/icon/Call.svg';
import Mail from '@images/icon/Mail.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Edit from '@images/icon/Edit.svg';
import { useFetchData, ProfileCreatedArt } from 'hooks/useFetchData';

export const Profile = () => {
  const { profileData, profileArtData, userData } = useFetchData();
  return (
    <SafeAreaView>
      <Header />
      <ScrollView>
        <View>
          <Image
            style={Styles().coverImage}
            source={{ uri: profileData[0]?.coverImage }}
          />
          <Image style={Styles().avatar} source={{ uri: userData.avatar }} />

          <Text style={Styles().userName}>{userData.name}</Text>
          <View style={[globalStyle().flexRow, globalStyle().selfCenter]}>
            <Text style={Styles().userHash}>{userData.hash}</Text>
            <TouchableOpacity style={Styles().copyIcon}>
              <Copy />
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles().secondView}>
          <TouchableOpacity style={Styles().box}>
            <View style={Styles().boxInner}>
              <View
                style={[
                  globalStyle().flexRow,
                  globalStyle().itemCenter,
                  Styles().boxMargin,
                ]}>
                <Mail />
                <Text style={Styles().boxText}>{userData.email}</Text>
              </View>
              <View
                style={[
                  globalStyle().flexRow,
                  globalStyle().itemCenter,
                  Styles().boxMargin,
                ]}>
                <Card />
                <Text style={[Styles().boxText, Styles().boxTextUnderline]}>
                  Linked
                </Text>
              </View>
              <View
                style={[
                  globalStyle().flexRow,
                  globalStyle().itemCenter,
                  Styles().boxMargin,
                ]}>
                <Call />
                <Text style={Styles().boxText}>(+60) 264 859 62</Text>
              </View>
              <View style={[globalStyle().flexRow, globalStyle().itemCenter]}>
                <Link />
                <Text style={Styles().boxText}>OpenArt.design</Text>
              </View>
              <View
                style={[
                  globalStyle().justifyCenter,
                  globalStyle().flexRow,
                  Styles().boxButtonMargin,
                ]}>
                <TouchableOpacity style={Styles().followButton}>
                  <FontAwesomeIcon icon={faHeart} size={24} color={'white'} />
                  <Text style={Styles().followButtonText}>Follow</Text>
                </TouchableOpacity>
                <ShareButton style={Styles().coverButtonShare} />
                <TouchableOpacity style={Styles().coverButtonMenu}>
                  <More style={Styles().coverButtonIcon} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={Styles().followRowButton}>
                <Edit style={Styles().followRowButtonImage} />
              </TouchableOpacity>
              <Text style={Styles().memberText}>Member since 2021</Text>
            </View>
          </TouchableOpacity>
          <Text style={Styles().title}>My items</Text>

          {profileArtData.map((art: ProfileCreatedArt) => {
            return (
              <View key={art.id}>
                <ItemContainer
                  image={art.image}
                  name={art.name}
                  avatar={art.avatar}
                  creator_name={art.creatorName}
                  navi={'DetailsSold'}
                />
                <TouchableOpacity style={Styles().productButton}>
                  <Text style={Styles().productButtonTextSmall}>
                    Sold For
                    <Text style={Styles().productButtonTextLarge}>
                      {' '}
                      2.00 ETH
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}

          <TouchableOpacity style={Styles().loadMoreButton}>
            <Text style={Styles().loadMoreButtonText}>Load more</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};
