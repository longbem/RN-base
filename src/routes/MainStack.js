import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabsApp from './BottomTabsApp';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="bottomTabsApp"
        component={BottomTabsApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
