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
          justifyContent: 'center',
          // justifyContent: 'space-evenly',
          // alignItems: 'center',
          alignItems: 'center',
          // flexWrap: 'wrap',
          // alignContent: 'center', // only works if style has flexWrap to wrap value
        }}
      >
        <View
          style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 100,
          }}
        />
        <View
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
            top: 20,
            left: 20,
            position: 'absolute',
          }}
        />
        <View
          style={{
            backgroundColor: 'tomato',
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
