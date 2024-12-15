import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

const ImageInput = ({ imageUri }) => {
  return (
    <View style={styles.container}>
      {!imageUri && (
        <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
      )}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: 100,
    width: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
