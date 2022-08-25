import React from 'react';
import { Modal, Text, Image, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from '../../theme/globalStyle';
import styles from './styles';

interface Props {
  visibile?: boolean;
  handleClose?: () => void;
}

export const Notification = (props: Props) => {
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visibile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles.triangle]} />
          <View style={[styles.modalView]}>
            <Text style={styles.firstRow}>Notification</Text>

            <View style={styles.secondRow}>
              <TouchableOpacity style={globalStyle.flexRow}>
                <Image
                  source={require('../../assets/images/notification/noti-1.png')}
                />
                <View style={styles.item}>
                  <Text style={styles.itemText}>ETH received</Text>
                  <Text style={styles.itemPrice}>1.05 ETH recived</Text>
                  <Text style={styles.itemDate}>1 day ago</Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={styles.separatorLine}
              />
            </View>

            <View style={styles.secondRow}>
              <TouchableOpacity style={globalStyle.flexRow}>
                <Image
                  source={require('../../assets/images/notification/noti-2.png')}
                />
                <View style={styles.item}>
                  <Text style={styles.itemText}>Upload success</Text>
                  <Text style={styles.itemPrice}>ready to sell</Text>
                  <Text style={styles.itemDate}>1 day ago</Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={styles.separatorLine}
              />
            </View>

            <View style={styles.secondRow}>
              <TouchableOpacity style={globalStyle.flexRow}>
                <Image
                  source={require('../../assets/images/notification/noti-3.png')}
                />
                <View style={styles.item}>
                  <Text style={styles.itemText}>
                    Eric follow your collection
                  </Text>
                  <Text style={styles.itemPrice}>Supper wave collection</Text>
                  <Text style={styles.itemDate}>2 day ago</Text>
                </View>
              </TouchableOpacity>
              <View
                // separator line
                style={styles.separatorLine}
              />
            </View>

            <View style={styles.secondRow}>
              <TouchableOpacity style={globalStyle.flexRow}>
                <Image
                  source={require('../../assets/images/notification/noti-4.png')}
                />
                <View style={styles.item}>
                  <Text style={styles.itemText}>ETH received</Text>
                  <Text style={styles.itemPrice}>1.05 ETH recived</Text>
                  <Text style={styles.itemDate}>1 day ago</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.lastRow}>
              <TouchableOpacity>
                <LinearGradient
                  colors={['#0038F5', '#9F03FF']}
                  useAngle={true}
                  angle={114.44}
                  style={[styles.gradientButton, globalStyle.buttonRadius]}>
                  <Text style={styles.textButton}>View all</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.normalButton, globalStyle.buttonRadius]}>
                <Text style={styles.textButton}>Mark as all read</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
