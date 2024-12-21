import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ActivityIndicator = ({ visible = false }) => {
  const animation = useRef(null);

  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        style={styles.loader}
        ref={animation}
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
    zIndex: 1,
    opacity: 0.8,
  },
  loader: {
    height: '100%',
    width: '100%',
  },
});

export default ActivityIndicator;
