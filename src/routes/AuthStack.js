import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sample from '@src/pages/Sample';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Sample}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AuthStack;
