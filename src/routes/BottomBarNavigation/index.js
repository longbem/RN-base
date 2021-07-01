import React, { useMemo, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ImageIcon from '@src/components/ImageIcon';
import Animated, { EasingNode } from 'react-native-reanimated';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Box from '@src/components/Box';
import Typography from '@src/components/Typography';
import { getBottomSpace } from 'react-native-iphone-x-helper';
// import useRequest from '@umijs/use-request';
// import {useIsFocused} from '@react-navigation/native';
// import {useSelector} from 'react-redux';
import Sample from '@src/pages/Sample';
import colors from '@src/utils/colors';

const Tab = createBottomTabNavigator();
const WIDTH = Dimensions.get('window').width;

const TabBar = ({ state, descriptors, navigation }) => {
  const translateX = useRef(new Animated.Value(0)).current;
  const tabWidth = useMemo(() => WIDTH / state.routes.length, [state]);
  //   const isFocus = useIsFocused();

  //   const isLoggedIn = useSelector((s) => s?.auth?.userInfo?.accessToken);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: state.index * tabWidth,
      duration: 300,
      useNativeDriver: true,
      easing: EasingNode.ease,
    }).start(({ finished }) => {
      if (finished) {
        // do something
      }
    });
  }, [state.index, tabWidth, translateX]);

  //   const {data} = useRequest(
  //     () => (isLoggedIn ? getNotifications({size: 1}) : Promise.reject()),
  //     {
  //       debounceInterval: 2500,
  //       refreshDeps: [isLoggedIn, isFocus],
  //     },
  //   );

  //   const userInfo = useSelector((states) => states.auth.userInfo);

  //   const unread = useMemo(() => {
  //     let count = 0;
  //     data?.list?.map((noti) => {
  //       if (noti.status === 'unread') {
  //         count += 1;
  //       }
  //     });
  //     return count;
  //   }, [data]);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Box background={colors.white} padding={[0, 0, getBottomSpace(), 0]}>
      <Animated.View
        style={[
          styles.slider,
          {
            width: tabWidth,
            transform: [{ translateX }],
          },
        ]}
      />
      <Box flexDirection="row">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = isFocused ? 'home_select' : 'home';
              break;
            case 'Order':
              iconName = isFocused ? 'calendar_check' : 'calendar_un_check';
              break;
            case 'Member':
              iconName = isFocused ? 'member_select' : 'member';
              break;
            case 'Account':
              iconName = isFocused ? 'user_circle_select' : 'user_circle';
              break;
          }
          //    else if (route.name === 'Notifications') {
          //     if (unread > 0) {
          //       iconName = isFocused ? 'messages_unread' : 'messages_unread';
          //     } else {
          //       iconName = isFocused ? 'notifications' : 'notifications';
          //     }
          //   }

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              style={[styles.bottomTabItem, { width: tabWidth }]}
              activeOpacity={0.65}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onLongPress={onLongPress}
              onPress={onPress}
              key={route.key}>
              <Box margin={[8, 0, 4, 0]} justify="center" align="center">
                {route.name === 'Profile' ? (
                  <Box
                    circle={24}
                    background={colors.flesh}
                    justify="center"
                    align="center">
                    <Typography type="h4">{''}</Typography>
                  </Box>
                ) : (
                  <ImageIcon name={iconName} />
                )}
                <Typography
                  type="note"
                  margin={[4, 0]}
                  color={isFocused ? colors.mainBlue : colors.grayBD}>
                  {label}
                </Typography>
              </Box>
            </TouchableOpacity>
          );
        })}
      </Box>
    </Box>
  );
};
function TabNavigator({ token }) {
  return (
    <>
      <Tab.Navigator
        tabBar={props => <TabBar {...props} token={token} />}
        initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Sample}
          options={{
            title: 'Trang chủ',
          }}
        />
        <Tab.Screen
          name="Order"
          component={Sample}
          options={{
            title: 'Đơn hàng',
          }}
        />
        <Tab.Screen
          name="Member"
          component={Sample}
          options={{
            title: 'Thành viên',
          }}
        />
        <Tab.Screen
          name="Account"
          component={Sample}
          options={{
            title: 'Tài khoản',
          }}
        />
      </Tab.Navigator>
      {/* <Splash />
      <Terms /> */}
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//   };
// };

export default TabNavigator; // connect(mapStateToProps, null)(TabNavigator);

const styles = StyleSheet.create({
  bottomTabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    height: 2,
    backgroundColor: colors.black100,
  },
});
