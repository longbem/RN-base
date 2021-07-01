import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './BottomBarNavigation';
import colors from '@src/utils/colors';
import TouchableBox from '@src/components/TouchableBox';
import ImageIcon from '@src/components/ImageIcon';
import { useNavigation } from '@react-navigation/native';

const headerTitleStyle = {
  color: colors.black100,
  fontFamily: 'Lexend',
  fontWeight: '600',
  fontSize: 17,
  lineHeight: 22,
  letterSpacing: -0.5,
  fontStyle: 'normal',
  textAlign: 'center',
};

const headerStyle = {
  backgroundColor: colors.white,
  shadowColor: 'transparent',
  elevation: 0,
  borderBottomWidth: 0,
};

const HeaderLeft = () => {
  const navigation = useNavigation();

  const onBack = useCallback(() => {
    navigation.pop();
  }, [navigation]);

  return (
    <TouchableBox
      square={10}
      justify="center"
      align="center"
      margin={[0, 16, 0, 0]}
      onPress={onBack}>
      <ImageIcon square={16} name="arrow_left" />
    </TouchableBox>
  );
};

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator
    initialRouteName="MainStack"
    // mode="modal"
    screenOptions={{
      headerStyle,
      headerTitleStyle,
      // cardStyle: {backgroundColor: 'transparent'},
      // cardOverlayEnabled: true,
      // cardStyleInterpolator: ({layouts, current: {progress}}) => ({
      //   cardStyle: {
      //     transform: [
      //       {
      //         translateY: progress.interpolate({
      //           inputRange: [0, 1],
      //           outputRange: [layouts.screen.height, 0],
      //         }),
      //       },
      //     ],
      //   },
      // }),
    }}>
    <Stack.Screen
      name="TabNavigator"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default MainStack;
