import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';

const ActivityIndicator = ({ visible = false }) => {
  const animation = useRef(null);

  if (!visible) return null;
  console.log('VISIBLE', visible);
  return (
    <LottieView
      style={styles.loader}
      ref={animation}
      autoPlay
      loop
      source={require('../assets/animations/loader.json')}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    height: '100%',
    width: '100%',
  },
});

export default ActivityIndicator;
