import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar style="auto" />
      <Text>Arquivo TS!</Text>
    </View>
  );
};

export default App;
