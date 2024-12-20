import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailScreen = ({ route }) => {
  const item = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: item.images[0].thumbnailUrl }}
        uri={item.images[0].url}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.price}>{'$' + item.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/rupak.jpg')}
            title="Rupak"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailScreen;
