import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

import colors from '../config/colors';

const UploadScreen = ({ progress = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <ProgressBar color={colors.primary} progress={progress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default UploadScreen;
