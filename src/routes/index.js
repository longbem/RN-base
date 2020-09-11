import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';

export default function AppContainer() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
