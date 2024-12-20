import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import ListingDetailScreen from '../screens/ListingDetailScreen';
import ListingsScreen from '../screens/ListingsScreen';

const Stack = createStackNavigator();

export default function FeedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        gestureEnabled: true,
        headerShown: false,
      }}
      mode="modal"
    >
      <Stack.Screen name="Listings" component={ListingsScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailScreen}
        options={{
          headerShown: false,
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

// import { createStackNavigator } from '@react-navigation/stack';

// import ListingDetailScreen from '../screens/ListingDetailScreen';
// import ListingsScreen from '../screens/ListingsScreen';

// const FeedNavigator = createStackNavigator({
//   screenOptions: {
//     headerTitleAlign: 'center',
//     gestureEnabled: true,
//     headerShown: false,
//   },
//   mode: 'modal',
//   screens: {
//     Listings: {
//       screen: ListingsScreen,
//     },
//     ListingDetails: {
//       screen: ListingDetailScreen,
//       options: {
//         headerShown: false,
//         presentation: 'modal',
//       },
//     },
//   },
// });

// export default FeedNavigator;
