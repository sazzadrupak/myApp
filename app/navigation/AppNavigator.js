import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import ListingEditScreen from '../screens/ListingEditScreen';
// import AccountNavigator from './AccountNavigator';
// import FeedNavigator from './FeedNavigator';
// import NewListingButton from './NewListingButton';
// import routes from './routes';

// const AppNavigator = createBottomTabNavigator({
//   screenOptions: {
//     headerTitleAlign: 'center',
//     tabBarHideOnKeyboard: true,
//   },
//   screens: {
//     Feed: {
//       screen: FeedNavigator,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="home" color={color} size={size} />
//         ),
//       },
//     },
//     ListingEdit: {
//       screen: ListingEditScreen,
//       options: ({ navigation }) => ({
//         tabBarButton: () => (
//           <NewListingButton
//             onPress={() => navigation.navigate(routes.LISTING_EDIT)}
//           />
//         ),
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons
//             name="plus-circle"
//             color={color}
//             size={size}
//           />
//         ),
//       }),
//     },
//     Account: {
//       screen: AccountNavigator,
//       options: {
//         headerShown: false,
//         tabBarIcon: ({ color, size }) => (
//           <MaterialCommunityIcons name="account" color={color} size={size} />
//         ),
//       },
//     },
//   },
// });

// export default AppNavigator;
