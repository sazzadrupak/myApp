import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/rupak.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Rupak</AppText>
        <AppText style={styles.subtitle}>5 Listings</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: colors.medium,
  },
});
export default ListItem;
