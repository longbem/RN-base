import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import screen
import LoanAmountScreen from '../../screens/loanAmount';

const Stack = createStackNavigator();

export default function LoanAmountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="loanAmount"
        component={LoanAmountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
