/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  // ScrollView,
  //   TouchableOpacity,
  FlatList,
  Image,
  // ScrollView,
} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import axios from 'axios';

interface Items {
  id: number;
  name: string;
  avatar: string;
  creator_name: string;
  image: string;
}

export default function TestAPI() {
  const [apiData, setApiData] = useState<Array<Items>>([
    {
      id: 0,
      name: '',
      avatar: '',
      creator_name: '',
      image: '',
    },
  ]);

  useEffect(() => {
    axios
      .get('https://62f0be8a57311485d135dee1.mockapi.io/homepage')
      .then(res => {
        setApiData(res.data);
      });
  }, []);
  return (
    <View
      style={[
        styles.AndroidSafeArea,
        {
          backgroundColor: '#222222',
          flex: 1,
        },
      ]}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" translucent={true} />

        <Header />
        <FlatList
          data={apiData}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={Footer}
          renderItem={({item}: {item: Items}) => {
            return (
              <View key={item.id}>
                <Text style={{flex: 1, backgroundColor: 'red'}}>
                  {item.name}
                </Text>
                <Image
                  source={{uri: `${item.image}`}}
                  style={{width: 100, height: 100, flexDirection: 'row'}}
                />
              </View>
            );
          }}
        />
        {/* <View>
          <Text>{apiData[2].name}</Text>
        </View> */}
        {/* <ScrollView>
          {apiData.map((item: Items) => {
            return (
              <View key={item.id}>
                <Text style={{flex: 1, backgroundColor: 'red'}}>
                  {item.name}
                </Text>
                <Image
                  source={{uri: `${item.image}`}}
                  style={{width: 100, height: 100, flexDirection: 'row'}}
                />
              </View>
            );
          })}
        </ScrollView> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
});
