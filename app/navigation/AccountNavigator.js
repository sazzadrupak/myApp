import { createStackNavigator } from '@react-navigation/stack';

import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}

// const AccountNavigator = createStackNavigator({
//   screenOptions: {
//     headerTitleAlign: 'center',
//   },
//   screens: {
//     Account: {
//       screen: AccountScreen,
//     },
//     Messages: {
//       screen: MessagesScreen,
//     },
//   },
// });

// export default AccountNavigator;
