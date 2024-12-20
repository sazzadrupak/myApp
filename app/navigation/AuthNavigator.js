import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

// import { createStackNavigator } from '@react-navigation/stack';

// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';

// const AuthNavigator = createStackNavigator({
//   screenOptions: {
//     headerTitleAlign: 'center',
//   },
//   screens: {
//     Welcome: {
//       screen: WelcomeScreen,
//       options: {
//         headerShown: false,
//         // title: 'Overview',
//         // headerStyle: { backgroundColor: 'tomato' },
//         // headerTintColor: 'white',
//       },
//     },
//     Login: {
//       screen: LoginScreen,
//     },
//     Register: {
//       screen: RegisterScreen,
//     },
//   },
// });

// export default AuthNavigator;
