import React, { useContext } from 'react';
import {
  Modal,
  Text,
  Image,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from 'theme/globalStyle';
import { ThemeContext } from '../../../hooks/context';
import styles from './styles';

interface Props {
  visibile?: boolean;
  handleClose?: () => void;
}

export const Notification = (props: Props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visibile}
        onRequestClose={props.handleClose}>
        <TouchableOpacity
          style={styles(theme).centeredView}
          onPress={props.handleClose}
          activeOpacity={1}>
          <View style={[styles(theme).triangle]} />
          <TouchableWithoutFeedback>
            <View style={[styles(theme).modalView]}>
              <Text style={styles(theme).firstRow}>Notification</Text>

              <View style={styles(theme).secondRow}>
                <TouchableOpacity style={globalStyle(theme).flexRow}>
                  <Image source={require('@images/notification/noti-1.png')} />
                  <View style={styles(theme).item}>
                    <Text style={styles(theme).itemText}>ETH received</Text>
                    <Text style={styles(theme).itemPrice}>
                      1.05 ETH recived
                    </Text>
                    <Text style={styles(theme).itemDate}>1 day ago</Text>
                  </View>
                </TouchableOpacity>
                <View
                  // separator line
                  style={styles(theme).separatorLine}
                />
              </View>

              <View style={styles(theme).secondRow}>
                <TouchableOpacity style={globalStyle(theme).flexRow}>
                  <Image source={require('@images/notification/noti-2.png')} />
                  <View style={styles(theme).item}>
                    <Text style={styles(theme).itemText}>Upload success</Text>
                    <Text style={styles(theme).itemPrice}>ready to sell</Text>
                    <Text style={styles(theme).itemDate}>1 day ago</Text>
                  </View>
                </TouchableOpacity>
                <View
                  // separator line
                  style={styles(theme).separatorLine}
                />
              </View>

              <View style={styles(theme).secondRow}>
                <TouchableOpacity style={globalStyle(theme).flexRow}>
                  <Image source={require('@images/notification/noti-3.png')} />
                  <View style={styles(theme).item}>
                    <Text style={styles(theme).itemText}>
                      Eric follow your collection
                    </Text>
                    <Text style={styles(theme).itemPrice}>
                      Supper wave collection
                    </Text>
                    <Text style={styles(theme).itemDate}>2 day ago</Text>
                  </View>
                </TouchableOpacity>
                <View
                  // separator line
                  style={styles(theme).separatorLine}
                />
              </View>

              <View style={styles(theme).secondRow}>
                <TouchableOpacity style={globalStyle(theme).flexRow}>
                  <Image source={require('@images/notification/noti-4.png')} />
                  <View style={styles(theme).item}>
                    <Text style={styles(theme).itemText}>ETH received</Text>
                    <Text style={styles(theme).itemPrice}>
                      1.05 ETH recived
                    </Text>
                    <Text style={styles(theme).itemDate}>1 day ago</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles(theme).lastRow}>
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#0038F5', '#9F03FF']}
                    useAngle={true}
                    angle={114.44}
                    style={[
                      styles(theme).gradientButton,
                      globalStyle(theme).buttonRadius,
                    ]}>
                    <Text style={styles(theme).textButton}>View all</Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles(theme).normalButton,
                    globalStyle(theme).buttonRadius,
                  ]}>
                  <Text
                    style={[
                      styles(theme).textButton,
                      styles(theme).textButtonDark,
                    ]}>
                    Mark as all read
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
