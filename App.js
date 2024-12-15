import { createStaticNavigation } from '@react-navigation/native';
import React from 'react';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Navigation = createStaticNavigation(AuthNavigator);

export default function App() {
  return <Navigation theme={navigationTheme} />;
}
