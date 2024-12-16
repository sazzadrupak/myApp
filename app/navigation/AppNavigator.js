import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';

const AppNavigator = createBottomTabNavigator({
  screens: {
    Feed: {
      screen: FeedNavigator,
      options: {
        headerShown: false,
      },
    },
    ListingEdit: ListingEditScreen,
    Account: AccountScreen,
  },
});

export default AppNavigator;
