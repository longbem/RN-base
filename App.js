import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStore from '@src/store';
import Routes from '@src/routes';

export default function App() {
  return (
    <Provider store={MainStore.store}>
      <SafeAreaProvider>
        <PersistGate loading={null} persistor={MainStore.persistor}>
          <Routes />
        </PersistGate>
      </SafeAreaProvider>
    </Provider>
  );
}
