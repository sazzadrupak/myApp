import { createStaticNavigation } from '@react-navigation/native';
import React from 'react';

import AuthNavigator from './app/navigation/AuthNavigator';

const Navigation = createStaticNavigation(AuthNavigator);

export default function App() {
  return <Navigation />;
}
