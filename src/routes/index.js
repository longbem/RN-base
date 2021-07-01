// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useMount } from '@umijs/hooks';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { connect } from 'react-redux';

const Routes = ({ token }) => {
  useMount(() => {
    // RNBootSplash.hide({fade: true});
  });

  return (
    <>
      <NavigationContainer>
        {!token ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
      {/* <SnackBar /> */}
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps, null)(Routes);

// export default Routes;
