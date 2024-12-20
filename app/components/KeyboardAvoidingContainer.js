import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';

const KeyboardAvoidingContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.childrenContainer}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default KeyboardAvoidingContainer;
