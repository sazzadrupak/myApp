import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Screen from '../components/Screen';

const KeyboardAvoidingContainer = ({ children }) => {
  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.childrenContainer}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 0,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  childrenContainer: {},
});

export default KeyboardAvoidingContainer;
