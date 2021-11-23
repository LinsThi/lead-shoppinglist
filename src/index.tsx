import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StorageProvider } from 'react-redux';

import { RootStack } from './routes';
import store from './store';

const App: React.FC = () => {
  return (
    <StorageProvider store={store}>
      <PaperProvider>
        <RootStack />
      </PaperProvider>
    </StorageProvider>
  );
};

export default App;
