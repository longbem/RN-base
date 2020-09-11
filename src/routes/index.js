import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './authStack';

const token = true;

export default function AppContainer() {
  return (
    <NavigationContainer>
      {token ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
}
