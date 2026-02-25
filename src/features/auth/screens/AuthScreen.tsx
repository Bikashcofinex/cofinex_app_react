import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuthStore } from '../../../core/stores/authStore';
import cacheService from '../../../core/cache/cacheService';

export default function AuthScreen() {
  const login = useAuthStore(s => s.login);

  const handleLogin = async () => {
    await cacheService.set('token', 'real_token_123');
    login('real_token_123');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
