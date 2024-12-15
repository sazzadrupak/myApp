import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text } from 'react-native';

import Screen from './app/components/Screen';

const TweetsScreen = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text>TWEET</Text>
      <Button
        title="View tweet"
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      />
    </Screen>
  );
};

const TweetDetailsScreen = ({ route }) => (
  <Screen>
    <Text>TWEET DETAILS {route.params.id}</Text>
  </Screen>
);

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Tweets',
  screenOptions: {
    headerStyle: { backgroundColor: 'tomato' },
  },
  screens: {
    Tweets: {
      screen: TweetsScreen,
      options: {
        title: 'Overview',
      },
    },
    TweetDetails: TweetDetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
