import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { Login } from './screens/Login';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Login />
    </>
  );
};

export default App;
