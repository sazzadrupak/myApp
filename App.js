import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="email" size={60} color="dodgerblue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderRadius: 10,
    shadowColor: 'grey', // iOS
    shadowOffset: { width: 10, height: 10 }, // iOS
    shadowOpacity: 1, // iOS
    shadowRadius: 10, // iOS
    elevation: 50, // Android
  },
});
