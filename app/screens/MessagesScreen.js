import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Sazzad rupak',
    description: 'Hey! Is this item still available?',
    image: require('../assets/rupak.jpg'),
  },
  {
    id: 2,
    title: 'Sazzad rupak',
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/rupak.jpg'),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from an array
    // Call the server to delete the message
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/rupak.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});
export default MessagesScreen;
