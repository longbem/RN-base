import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import screen
import NotificationScreen from '../../screens/loanAmount';

const Stack = createStackNavigator();

export default function NotificationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="notifications"
        component={NotificationScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
