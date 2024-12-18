import { createStaticNavigation } from '@react-navigation/native';
import React from 'react';

// import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Navigation = createStaticNavigation(AppNavigator);

export default function App() {
  return <Navigation theme={navigationTheme} />;
}
