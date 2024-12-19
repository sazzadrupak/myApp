import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus" size={20} color={colors.white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderColor: colors.white,
    height: 40,
    width: 40,
    top: 4,
    left: 48,
    borderRadius: 20,
    // borderWidth: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NewListingButton;
