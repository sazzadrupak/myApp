import { createStackNavigator } from '@react-navigation/stack';

import ListingDetailScreen from '../screens/ListingDetailScreen';
import ListingsScreen from '../screens/ListingsScreen';

const FeedNavigator = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
    gestureEnabled: true,
    headerShown: false,
  },
  mode: 'modal',
  screens: {
    Listings: {
      screen: ListingsScreen,
    },
    ListingDetails: {
      screen: ListingDetailScreen,
      options: {
        headerShown: false,
        presentation: 'modal',
      },
    },
  },
});

export default FeedNavigator;
