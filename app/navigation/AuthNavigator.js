import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AuthNavigator = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {
        headerShown: false,
        // title: 'Overview',
        // headerStyle: { backgroundColor: 'tomato' },
        // headerTintColor: 'white',
      },
    },
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
});

export default AuthNavigator;
