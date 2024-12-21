import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';

import { View } from 'react-native';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    async function prepare() {
      await restoreUser();
      setIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}
      onLayout={onLayoutRootView}
    >
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
}

// import { createStaticNavigation } from '@react-navigation/native';
// import React from 'react';

// import OfflineNotice from './app/components/OfflineNotice';
// // import AppNavigator from './app/navigation/AppNavigator';
// import AuthNavigator from './app/navigation/AuthNavigator';
// import navigationTheme from './app/navigation/navigationTheme';

// const Navigation = createStaticNavigation(AuthNavigator);

// export default function App() {
//   return (
//     <>
//       <OfflineNotice />
//       <Navigation theme={navigationTheme} />
//     </>
//   );
// }
