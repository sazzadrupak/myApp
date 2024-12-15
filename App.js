import React, { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
export default function App() {
  const [firstName, setFirstName] = useState('');
  return (
    <Screen>
      <AppTextInput placeholder="First Name" icon="email" />
    </Screen>
  );
}
