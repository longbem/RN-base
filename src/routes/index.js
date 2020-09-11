import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthStack from './authStack';

import { connect } from 'react-redux';

// const token = true;

function AppContainer({ token }) {
  return (
    <NavigationContainer>
      {token ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const mapState = (state) => {
  return {
    token: state.reducerUser.token,
  };
};

export default connect(mapState, null)(AppContainer);
