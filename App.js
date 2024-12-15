import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';

const TweetsScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text>TWEET</Text>
      {/* <Button
        title="View tweet"
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      /> */}
      <Button title="Contact" onPress={() => navigation.navigate('Contacts')} />
    </Screen>
  );
};

const ContactsScreen = () => (
  <Screen>
    <Text>CONTACTS</Text>
  </Screen>
);

const TweetDetailsScreen = ({ route }) => (
  <Screen>
    <Text>TWEET DETAILS {route.params.id}</Text>
  </Screen>
);

const AccountScreen = () => (
  <Screen>
    <Text>ACCOUNT</Text>
  </Screen>
);

const MyTabs = createBottomTabNavigator({
  screenOptions: {
    tabBarActiveBackgroundColor: 'tomato',
    tabBarActiveTintColor: 'white',
    tabBarInactiveBackgroundColor: '#eee',
    tabBarInactiveTintColor: 'black',
  },
  screens: {
    Feed: {
      screen: TweetsScreen,
      options: {
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      },
    },
    Account: AccountScreen,
  },
});

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Tweets',
  screenOptions: {
    headerStyle: { backgroundColor: 'dodgerblue' },
  },
  screens: {
    Tweets: {
      screen: MyTabs,
      options: {
        headerShown: false,
        title: 'Overview',
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
      },
    },
    TweetDetails: {
      screen: TweetDetailsScreen,
      options: ({ route }) => ({
        title: `Tweet ${route.params.id}`,
      }),
    },
    Contacts: {
      screen: ContactsScreen,
      options: {
        title: 'Contacts',
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
