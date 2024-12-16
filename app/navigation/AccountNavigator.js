import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const AccountNavigator = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
  screens: {
    Account: {
      screen: AccountScreen,
    },
    Messages: {
      screen: MessagesScreen,
    },
  },
});

export default AccountNavigator;
