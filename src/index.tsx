import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { RootStack } from './routes';

const App: React.FC = () => {
  return (
    <PaperProvider>
      <RootStack />
    </PaperProvider>
  );
};

export default App;
