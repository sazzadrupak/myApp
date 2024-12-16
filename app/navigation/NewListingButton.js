import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    height: 80,
    width: 80,
    bottom: 30,
    left: 20,
    borderRadius: 40,
    borderWidth: 10,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewListingButton;
