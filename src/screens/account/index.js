import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useDispatch, connect } from 'react-redux';
import { setToken } from './../../store/users/actions';
import { Button } from 'react-native-paper';

function AccountScreen() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setToken(false));
  };

  return (
    <SafeAreaView>
      <Text>Account screen</Text>
      <Button
        uppercase={false}
        mode="outlined"
        color="#F88D1A"
        onPress={handleLogout}>
        Logout
      </Button>
    </SafeAreaView>
  );
}

const mapDispatch = {
  setToken,
};

export default connect(null, mapDispatch)(AccountScreen);
