import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import listingsApi from '../api/listings';
import ActivityIndicator from '../components/ActivityIndicator';
import Button from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import useApi from '../hooks/useApi';
import routes from '../navigation/routes';

const ListingsScreen = () => {
  const navigation = useNavigation();
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings.</AppText>
          <Button title="Retry" onPress={() => loadListings()} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
  list: {
    paddingTop: 20,
  },
});
export default ListingsScreen;
