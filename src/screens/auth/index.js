import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Auth() {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Button
          mode="contained"
          color="#F88D1A"
          onPress={() => navigate('loginWithNumberPhone')}>
          Login with SDT
        </Button>
        <Text style={styles.or}>hoặc</Text>
        <Button mode="contained" color="#3B5998" icon="facebook-box">
          Login with Facebook
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, justifyContent: 'center' },
  container: {
    marginHorizontal: 20,
  },
  or: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
