import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';

const AppNavigator = createBottomTabNavigator({
  screens: {
    Listings: ListingsScreen,
    ListingEdit: ListingEditScreen,
    Account: AccountScreen,
  },
});

export default AppNavigator;
