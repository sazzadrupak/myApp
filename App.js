import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';

import AuthContext from './app/auth/context';
import OfflineNotice from './app/components/OfflineNotice';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
