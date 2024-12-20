import { createStaticNavigation } from '@react-navigation/native';
import React from 'react';

import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Navigation = createStaticNavigation(AppNavigator);

export default function App() {
  return (
    <>
      <OfflineNotice />
      <Navigation theme={navigationTheme} />
    </>
  );
}
