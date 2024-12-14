import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          { backgroundColor: 'dodgerblue', borderColor: 'royalblue' },
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: { width: 100, height: 100, borderWidth: 10, borderRadius: 10 },
});
