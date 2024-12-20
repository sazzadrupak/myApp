import { createStaticNavigation } from '@react-navigation/native';
import React from 'react';

import OfflineNotice from './app/components/OfflineNotice';
// import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Navigation = createStaticNavigation(AuthNavigator);

export default function App() {
  return (
    <>
      <OfflineNotice />
      <Navigation theme={navigationTheme} />
    </>
  );
}
