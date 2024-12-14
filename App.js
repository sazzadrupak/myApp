import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello React Native</Text>
      <TouchableWithoutFeedback onPress={() => alert('Text pressed')}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }}
        />
      </TouchableWithoutFeedback> */}
      <Button
        title="Click me"
        onPress={() =>
          // Alert.alert('Button tapped', 'My Message', [
          //   { text: 'Yes', onPress: () => console.log('YES') },
          //   { text: 'No', onPress: () => console.log('NO') },
          // ])
          Alert.prompt('Enter new value', 'Please enter your name', (text) =>
            console.log(text)
          )
        }
      />
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
