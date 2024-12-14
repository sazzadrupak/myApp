import { Platform, StyleSheet } from 'react-native';

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

export default styles;
