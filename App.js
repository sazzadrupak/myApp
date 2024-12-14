import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            backgroundColor: 'dodgerblue',
            borderColor: 'royalblue',
            padding: 20,
            paddingHorizontal: 10,
          },
        ]}
      >
        <View
          style={{
            backgroundColor: 'gold',
            width: 50,
            height: 50,
          }}
        ></View>
      </View>
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
