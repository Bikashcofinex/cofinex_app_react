import React from 'react';
import { Text, Button } from 'react-native';
import BaseScreen from '../../../core/layout/BaseScreen';
import { HomeConfig } from '../../../core/layout/screenConfig';
import { useAuthStore } from '../../../core/stores/authStore';

export default function HomeScreen() {
  const logout = useAuthStore(s => s.logout);
  return (
    <BaseScreen {...HomeConfig}>
      <Text style={{ color: '#fff' }}>Home Screen</Text>
      <Button title="Logout" onPress={logout} />
    </BaseScreen>
  );
}
