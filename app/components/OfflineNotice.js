import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const OfflineNotice = (props) => {
  const { type, isInternetReachable } = useNetInfo();
  if (type !== 'unknown' && isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet connection</AppText>
      </View>
    );
  }
  return null;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: '100%',
    position: 'absolute',
    top: Constants.statusBarHeight,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
