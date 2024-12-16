import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
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
    Account: {
      screen: AccountNavigator,
      options: {
        headerShown: false,
      },
    },
  },
});

export default AppNavigator;
