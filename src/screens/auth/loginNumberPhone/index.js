import React from 'react';
import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { ic_auth } from './../image';

export default function LoginWithNumberPhone() {
  const handleLogin = () => {
    alert('login');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Image source={ic_auth.ic_logo} style={styles.image} />
        <TextInput mode="outlined" placeholder="Số điện thoại" />
        <TextInput mode="outlined" placeholder="Mật khẩu" />
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
