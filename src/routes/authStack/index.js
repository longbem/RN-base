import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screen
import AuthScreen from '../../screens/auth';
import LoginWithNumberPhone from './../../screens/auth/loginNumberPhone';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="auth"
        component={AuthScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="loginWithNumberPhone"
        component={LoginWithNumberPhone}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
