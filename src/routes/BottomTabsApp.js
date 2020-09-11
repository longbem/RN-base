import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import stack
import AccountStack from './accountStack';
import DebtStack from './debtStack';
import LoanAmountStack from './loanAmountStack';
import NewsStack from './newStack';
import NotificationStack from './notificationStack';

const TabsBottom = createBottomTabNavigator();

export default function TabsBottomApp() {
  return (
    <TabsBottom.Navigator>
      <TabsBottom.Screen name="newsStack" component={NewsStack} />
      <TabsBottom.Screen name="loanAmountStack" component={LoanAmountStack} />
      <TabsBottom.Screen name="debtStack" component={DebtStack} />
      <TabsBottom.Screen
        name="notificationStack"
        component={NotificationStack}
      />
      <TabsBottom.Screen name="accountStack" component={AccountStack} />
    </TabsBottom.Navigator>
  );
}
