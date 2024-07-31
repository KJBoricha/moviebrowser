import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  return (
    <PaperProvider>
      <MainNavigator />
    </PaperProvider>
  );
};

export default App;
