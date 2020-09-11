import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsScreen from '../../screens/loanAmount';

const Stack = createStackNavigator();

export default function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="news"
        component={NewsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
