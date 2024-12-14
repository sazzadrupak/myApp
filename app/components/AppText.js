import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
        fontSize: 20,
      },
      android: {
        fontFamily: 'Roboto',
        fontSize: 28,
      },
    }),
  },
});

export default AppText;
