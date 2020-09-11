import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screen
import DebtScreen from '../../screens/debt';

const Stack = createStackNavigator();

export default function DebtStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="debt"
        component={DebtScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
