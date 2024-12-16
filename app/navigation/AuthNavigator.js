import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AuthNavigator = createStackNavigator({
  screenOptions: {
    headerTitleAlign: 'center',
  },
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
