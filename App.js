import { useDeviceOrientation } from '@react-native-community/hooks';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function App() {
  console.log(useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: 'row',
          // justifyContent: 'center',
          justifyContent: 'space-evenly',
          // alignItems: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: 'dodgerblue',
            // flex: 1,
            // flex: 2,
            width: 100,
            // height: 100,
            height: 300, // for baseline align items
            // alignSelf: 'flex-start',
          }}
        />
        <View
          style={{
            backgroundColor: 'gold',
            // flex: 1,
            width: 100,
            // height: 100,
            height: 200, // for baseline align items
          }}
        />
        <View
          style={{
            backgroundColor: 'tomato',
            // flex: 1,
            width: 100,
            height: 100,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
