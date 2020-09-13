import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ic_auth } from './../image';
import { useDispatch, connect } from 'react-redux';
import { fetchLogin } from './../../../store/users/actions';

function LoginWithNumberPhone() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    numberPhone: '',
    password: '',
    token: false,
  });

  const handleLogin = () => {
    dispatch(fetchLogin(user.numberPhone, user.password));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={ic_auth.ic_logo} style={styles.image} />
        <TextInput
          value={user.numberPhone}
          onChangeText={(text) => setUser({ ...user, numberPhone: text })}
          mode="outlined"
          placeholder="Số điện thoại"
        />
        <TextInput
          value={user.password}
          onChangeText={(text) => setUser({ ...user, password: text })}
          mode="outlined"
          placeholder="Mật khẩu"
          secureTextEntry={true}
          right={<TextInput.Icon name="circle-slice-8" />}
        />
        <Button
          uppercase={false}
          labelStyle={styles.labelPassword}
          style={styles.btnPassword}>
          Quên mật khẩu?
        </Button>
        <Button
          style={styles.btnLogin}
          uppercase={false}
          labelStyle={styles.labelLogin}
          mode="contained"
          color="#F88D1A"
          onPress={handleLogin}>
          Đăng nhập
        </Button>
      </View>
    </SafeAreaView>
  );
}

const mapDispatch = {
  fetchLogin,
};

export default connect(null, mapDispatch)(LoginWithNumberPhone);

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
    marginVertical: '20%',
  },
  labelLogin: {
    fontSize: 17,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  btnLogin: {
    padding: 7,
  },
  btnPassword: {
    alignItems: 'flex-end',
    margin: 10,
  },
  labelPassword: {
    color: '#007AFF',
    fontSize: 13,
  },
});
