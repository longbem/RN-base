import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import screen
import AccountScreen from '../../screens/account';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
